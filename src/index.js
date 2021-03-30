import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: "AIzaSyDqaa9YM5bPSUxLRvEL99k6-tRzoCwYSMU",
  authDomain: "tinder-clone-b7e29.firebaseapp.com",
  projectId: "tinder-clone-b7e29",
  storageBucket: "tinder-clone-b7e29.appspot.com",
  messagingSenderId: "863390990510",
  appId: "1:863390990510:web:7ce421a857494e66abed3f",
  measurementId: "G-CWFX88B8B3"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
