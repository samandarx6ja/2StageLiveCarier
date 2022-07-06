import React from 'react'

const QuestionSearch = () => {
  return (
    <div className="question__container">
      <div className="wrapper">
        <div className="search__button">
          <span></span>
          <input type="text" placeholder="Search for a question." />
          <button>SEARCH</button>
        </div>
        <div className="question__about">
          <h1>
            <span></span> About LiveCareer Q&A{' '}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default QuestionSearch
