import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import SignupPage from './pages/SignupPage/SignupPage';
import './app.css';

function App({authService}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage authService={authService}/>}/>
        <Route path="/signup" element={<SignupPage authService={authService}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
