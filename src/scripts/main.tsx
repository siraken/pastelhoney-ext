import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/_app';
import { ToastContainer, Flip } from 'react-toastify';
import '../styles/popup.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      newestOnTop={true}
      transition={Flip}
      theme="colored"
      autoClose={1000}
    />
  </React.StrictMode>,
);
