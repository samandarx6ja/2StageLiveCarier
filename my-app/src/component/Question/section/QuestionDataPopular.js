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
  return (
    <>
      {loader ? (
        <div className="search__card">
          <img src="" alt="photo human" />
        </div>
      ) : (
        <div className="loader__spin">
          <img src={require('../img/loader2.gif')} alt="12" />
        </div>
      )}
    </>
  )
}

export default QuestionDataPopular
