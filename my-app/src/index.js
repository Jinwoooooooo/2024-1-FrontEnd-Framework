import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './03/Library';
import Clock from './04/Clock';
import CommentList from './05/CommentList';
import NotificationList from './06/NotificationList';
import Accommodate from './07/Accommodate';
import ConfirmButton from './08/ConfirmButton';
import LandingPage from './09/LandingPage';
import AttendanceBook from './10/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 3장
/*root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
); */

/* 4장
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  )
}, 1000); */

/* 5장
 root.render(
   <React.StrictMode>
     <CommentList />
   </React.StrictMode>
); */

/* 6장
 root.render(
   <React.StrictMode>
     <NotificationList />
   </React.StrictMode>
); */

/* 7장
root.render(
  <React.StrictMode>
   <Accommodate />
  </React.StrictMode>
); */

/* 8장
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
); */

/* 9장
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
); */

// 10장
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
