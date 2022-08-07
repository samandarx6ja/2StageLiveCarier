import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Navbars from './navbar/Nav';
import Resume from './resumes/Res';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    {/* <Navbars /> */}
    <App />
  </>,
)

reportWebVitals()
