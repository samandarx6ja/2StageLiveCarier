import React from 'react'

const QuestionDataAsked = ({data, loader}) => {

  if(loader){
    return  (
      <div className="loader__spin">
          <img src={require('../img/loader2.gif')} alt="12" />
        </div>
    )
  }

  return (
    <div>QuestionDataAsked</div>
  )
}

export default QuestionDataAsked