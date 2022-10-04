import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import SignupPage from './pages/SignupPage/SignupPage';
import './app.css';
import WritePostPage from './pages/WritePostPage/WritePostPage';

export const User = React.createContext(null);
export const Logout = React.createContext(null);

function App({authService, crudService}) {
  const [user, setUser] = useState({
    id: null,
    email: null,
    username: null
  });

  const logout = () => {
    authService.logout(() => { setUser({
        id: null,
        email: null,
        username: null
    }) });
}

  return (
    <BrowserRouter>
      <User.Provider value={user} >
        <Logout.Provider value={logout} >
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/login" element={<LoginPage authService={authService} setUser={setUser} />}/>
            <Route path="/signup" element={<SignupPage authService={authService} setUser={setUser} />}/>
            <Route path="/write-post" element={<WritePostPage crudService={crudService} />}/>
          </Routes>
        </Logout.Provider>
      </User.Provider>
    </BrowserRouter>
  );
}

export default App;
