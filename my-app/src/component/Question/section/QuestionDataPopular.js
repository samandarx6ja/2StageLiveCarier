import React, { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionDataPopular = () => {
  const [data, setData] = useState('')
  const [loader, setLoader] = useState(false)

  const baseUrl = {
    Api: 'https://my.api.mockaroo.com/samandar',
    key: '83a09970',
  }

  useEffect(() => {
    axios
      .get(`${baseUrl.Api}?key=${baseUrl.key}`)
      .then((resp) => {
        setLoader(false)
        setData(resp.data)
        setTimeout(() => {
          setLoader(true)
        }, 500)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(data)
  return (
    <>
      {loader ? (
        data.map((item) => (
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
              <h1>{item.description1}</h1>
              <p>
                <span>3 answers</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="loader__spin">
          <img src={require('../img/loader2.gif')} alt="12" />
        </div>
      )}
    </>
  )
}

export default QuestionDataPopular
