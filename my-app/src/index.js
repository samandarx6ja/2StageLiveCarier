import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbars from './navbar/Nav';
import Resume from './resumes/Res';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Navbars/>  
    <Resume/>
  </React.StrictMode>
);

reportWebVitals();
