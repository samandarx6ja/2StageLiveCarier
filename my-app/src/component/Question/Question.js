import React from 'react'
import QuestionHeader from './section/QuestionHeader'
import QuestionSearch from './section/QuestionSearch'
import QuestionSerarchItem from './section/QuestionSerarchItem'
import './style/Question.css'

const Question = () => {
  return (
    <div>
      <QuestionHeader />
      <QuestionSearch />
      <QuestionSerarchItem />
    </div>
  )
}

export default Question
