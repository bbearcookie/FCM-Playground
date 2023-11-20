import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1bvPZi2X9nH0gI2gticmvgIbnHlHgNig',
  authDomain: 'fcm-playground2.firebaseapp.com',
  projectId: 'fcm-playground2',
  storageBucket: 'fcm-playground2.appspot.com',
  messagingSenderId: '396933658424',
  appId: '1:396933658424:web:eb026568a6a9312c74f3cd',
  measurementId: 'G-QJMLQLDJKL',
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const message = getMessaging(firebase);
