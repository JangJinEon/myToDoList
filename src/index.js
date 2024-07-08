import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Gallery from './event/Gallery';
// import Gallery from './event/galleryUpgrade/Gallery';
import reportWebVitals from './reportWebVitals';
// import App from './event/interval/App';
// import Wrap from './airplaneservice/Wrap';
import App from './memoService/App';
// import App from './event/app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    <App />
  // </React.StrictMode>
);

reportWebVitals();