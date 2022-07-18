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
    <div>
      {data
        .map((item) => (
          <div className="search__card" key={item.id}>
            <div className="search__item">
              <img src={`${item.avatar}`} alt="photo human" />
              <p>{item.first_name}</p>
            </div>
            <div className="search__description">
              <p>
                Asked{' '}
                {'2022' === item.created_date.slice(-4)
                  ? '12' - item.created_date.slice(0, 1) + ' month'
                  : 2022 - item.created_date.slice(-4) + ' years'}{' '}
                ago{' '}
              </p>
              <h1>{item.description1}?</h1>
              <p>
                <span>3 answers</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default QuestionDataAsked