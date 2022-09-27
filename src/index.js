import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import axios from 'axios';
import AuthService from './services/auth_service';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

const authService = new AuthService(axiosApi);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>
);

