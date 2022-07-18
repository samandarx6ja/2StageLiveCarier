import React from 'react'

const YourQuestion = () => {
  return (
    <div className='question__container'>
      <div className="question__your">
        <h1>Didn't see your question?</h1>
        <div className='wrapper__question'>
          <input
            type="text"
            placeholder="Ask our experts and we will get you an answer."
          />
          <button>ASK</button>
        </div>
      </div>
    </div>
  )
}

export default YourQuestion
