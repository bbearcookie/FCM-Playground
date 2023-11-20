import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getFCMToken } from './services/getFCMToken';
import './index.css';

const setupFCM = async () => {
  if (!('permissions' in navigator)) {
    return;
  }

  const permission = await navigator.permissions.query({ name: 'notifications' });

  permission.onchange = async () => {
    if (permission.state !== 'granted') {
      return;
    }

    try {
      const token = await getFCMToken();
      console.log(token);
    } catch (err) {
      console.error(err);
    }
  };
};

setupFCM().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
