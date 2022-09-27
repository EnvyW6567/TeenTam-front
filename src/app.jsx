import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import SignupPage from './pages/SignupPage/SignupPage';
import './app.css';
import { useState } from 'react';

export const UserId = React.createContext(null);

function App({authService}) {
  const [uid, setUid] = useState(null);

  return (
    <BrowserRouter>
      <UserId.Provider value={uid} >
        <Routes>
          <Route path="/" element={<MainPage authService={authService} setUserId={setUid} />}/>
          <Route path="/login" element={<LoginPage authService={authService} />}/>
          <Route path="/signup" element={<SignupPage authService={authService} />}/>
        </Routes>
      </UserId.Provider>
    </BrowserRouter>
  );
}

export default App;
