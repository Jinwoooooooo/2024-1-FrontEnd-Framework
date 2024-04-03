import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './03/Library';
import Clock from './04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 3장
/*root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
); */
// 4장
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  )
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
