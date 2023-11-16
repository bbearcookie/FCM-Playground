import { precacheAndRoute } from 'workbox-precaching';
// import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';
// import { initializeApp } from 'firebase/app';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', function (e) {
  console.log('[FCM] Service Worker Installed.');
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  console.log('[FCM] Service Worker Activated.');
});

self.addEventListener('push', function (e) {
  const data = e.data.json();
  if (!data) return;

  console.log('[FCM] Push Received.');

  const title = data.notification.title;

  const options = {
    icon: data.notification.image,
    ...data.notification,
  };

  self.registration.showNotification(title, options);
});

// const firebaseConfig = {
//   apiKey: 'AIzaSyC1bvPZi2X9nH0gI2gticmvgIbnHlHgNig',
//   authDomain: 'fcm-playground2.firebaseapp.com',
//   projectId: 'fcm-playground2',
//   storageBucket: 'fcm-playground2.appspot.com',
//   messagingSenderId: '396933658424',
//   appId: '1:396933658424:web:eb026568a6a9312c74f3cd',
//   measurementId: 'G-QJMLQLDJKL',
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// const messaging = getMessaging(firebase);
// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png',
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
