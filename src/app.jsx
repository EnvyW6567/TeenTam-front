import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import SignupPage from './pages/SignupPage/SignupPage';
import WritePostPage from './pages/WritePostPage/WritePostPage';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage';
import BoardsPage from './pages/BoardsPage/BoardsPage';
import './app.css';

export const CRUD = React.createContext(null);
export const AUTH = React.createContext(null);

function App({authService, crudService}) {

  return (
    <BrowserRouter>
      <AUTH.Provider value={authService}>
        <CRUD.Provider value={crudService} >
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/login" element={<LoginPage authService={authService} />}/>
            <Route path="/signup" element={<SignupPage authService={authService} />}/>
            <Route path="/write-post" element={<WritePostPage />}/>
            <Route path="/boards" element={<BoardsPage />}/>
            <Route path="/boards/:boards_category/id/:boards_id" element={<PostDetailPage />}/>
          </Routes>
        </CRUD.Provider>
      </AUTH.Provider>
    </BrowserRouter>
  );
}

export default App;
