import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar'
import Header from './Header';
import Condition from './Condition'
import Story from './Story'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Popular from './Popular';
import Machine from './Machine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <Condition/>
    <Story/>
    <Popular/>
    <Machine/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
