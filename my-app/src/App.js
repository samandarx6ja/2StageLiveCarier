import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Question from './component/Question/Question'
import QuestionAbout from './component/Question/section/QuestionAbout'

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/question/help" element={<QuestionAbout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
