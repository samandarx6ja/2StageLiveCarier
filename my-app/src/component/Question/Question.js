import React from 'react'
import QuestionHeader from './section/QuestionHeader'
import QuestionSerarchItem from './section/QuestionSerarchItem'
import YourQuestion from './section/YourQuestion'
import './style/Question.css'

const Question = () => {
  return (
    <div>
      <QuestionHeader />
      <QuestionSerarchItem />
      <YourQuestion />
    </div>
  )
}

export default Question
