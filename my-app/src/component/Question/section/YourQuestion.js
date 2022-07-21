import React from 'react'

const YourQuestion = () => {
  return (
    <div className='question__container'>
      <div className="question__your">
        <h1>Didn't see your question?</h1>
        <span></span>
        <div className='wrapper__question'>
          <input
            type="text"
            placeholder="Ask our experts and we will get you an answer."
          />
          <button>ASK</button>
        </div>
      </div>
      <hr/>
      <h1 className='footer__item'>Advertisement</h1>
    </div>
  )
}

export default YourQuestion
