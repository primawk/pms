import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { toast } from 'react-toastify';

// For GET requests
axios.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user-pms'));
  if (user?.access_token) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

// For POST requests
axios.interceptors.response.use(
  (response) => {
    if (response?.data?.code === 500) {
      toast.error(response?.data?.message);
      toast.clearWaitingQueue();
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      toast.error(error.response?.data?.detail_message?.message);
      toast.clearWaitingQueue();
    }
    if (error.response?.status === 404) {
      toast.error('The requested resource was not found.');
      toast.clearWaitingQueue();
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
