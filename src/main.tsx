import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Debounce from './utils/Debounce';
import { getFCMToken } from './utils/firebase';
import './index.css';

const setupFCM = async () => {
  const debounce = new Debounce();

  if (!('permissions' in navigator)) {
    return;
  }

  const permission = await navigator.permissions.query({ name: 'notifications' });

  permission.onchange = async () => {
    if (permission.state !== 'granted') {
      return;
    }

    try {
      debounce.run(async () => {
        const token = await getFCMToken();
        console.log(token);
      }, 1000);
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
