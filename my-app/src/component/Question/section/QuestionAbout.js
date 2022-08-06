import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//Material ui react
import { Box, Tab } from '@mui/material'
import QuestionHeader from './QuestionHeader'
import YourQuestion from './YourQuestion'

const QuestionAbout = () => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [noOfElement, setnoOfElement] = useState(10)

  const baseUrl = {
    Api: 'https://my.api.mockaroo.com/samandar',
    key: '83a09970',
  }

  useEffect(() => {
    axios
      .get(`${baseUrl.Api}?key=${baseUrl.key}`)
      .then((resp) => {
        setLoader(true)
        setData(resp.data)
        setTimeout(() => {
          setLoader(false)
        }, 500)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const loadMore = () => {
    setnoOfElement(noOfElement + 4)
  }
  const sliceShow = data.slice(0, noOfElement)

  return (
    <>
    <QuestionHeader/>
    <div className="question__container">
      <div className="wrapper">
        <div className="search__button">
          <span></span>
          <input
            type="text"
            placeholder="Search for a question."
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
          <button>SEARCH</button>
        </div>
        <div className="question__about">
          <h1>
            <Link to="question/help">
              <span></span> About LiveCareer Q&A{' '}
            </Link>
          </h1>
        </div>
      </div>
      <div className="wrapper wrapper__flexstart ">
        <Box sx={{ width: '75%', typography: 'body1' }}>
            <div className='about__typography'>
                <h1><strong>About LiveCareer Q&A</strong></h1>
                <p>Livevareer Q&A is a community-driven question-and-answer (Q&A) site that allows users to both submit questions to be answered and answer questions asked by other users.</p>
                <h2>Asking a Question</h2>
                <p>
                Ask a question about a career- or job search-related topic. Questions usually focus on aspects of resume and cover letter writing, job interviews, job searches and job offers, career planning and advancement, and workplace etiquette.
                <br/> 
                <br/>Aim to ask your question using a complete sentence:
                <br/>
                 <br/>
                 <strong>
                    <em>Correct</em> -
                </strong> What is the best resume format to use when you are changing careers?
                <br/> 
                <br/>
                <strong><em>Incorrect</em> -
                </strong> best format for changing career?
                <br/> 
                <br/>When asking a question, you will categorize it in a topic, which makes it easier for others to find and answer.
                <br/> 
                <br/>You will receive a response to your question within 24 hours. You will receive an email when the response to your question is published and live on the site.
                <br/> 
                <br/>Questions that contain external links will be deleted:
                <br/>
                <br/>
                <strong><em>Example</em> -
                </strong> Can you name some good career advice books that I should check out on 
                <a href="https://www.amazon.com/">Amazon</a> or "
                <a href="https://www.barnesandnoble.com/">Barnes and Noble</a>?
                <br/> 
                <br/>Questions that are sales-like in nature – that promote the products or services of another business – will be deleted.
                <br/><br/>
                </p>
            </div>
        </Box>
        <div className="by__topic">
          <div className="topic__item">
            <h1>Browse by Topic</h1>

            {sliceShow.map((item) => (
              <div className="browse__topic" key={item.id}>
                {item.job_title.length < 11 ? (
                  <span>{item.job_title}</span>
                ) : (
                  <p>{item.job_title}</p>
                )}
              </div>
            ))}
             <button
              className="btn__seemore btn__weight"
              onClick={() => loadMore()}
            >
              See More
            </button>
          </div>
          <div className="expert topic__item">
            <h1>Expert Contributors</h1>
            {data.slice(0, 4).map((item) => (
              <div className="topic__expert" key={item.id}>
                <div className="search__item">
                  <img src={`${item.avatar}`} alt="photo human" />
                </div>
                <div className="search__description">
                  <p>{item.first_name}</p>

                  <p>
                    {'2022' === item.created_date.slice(-4)
                      ? '12' - item.created_date.slice(0, 1) + ' '
                      : 2022 - item.created_date.slice(-4) + ' '}
                    Answers contributed
                  </p>
                </div>
              </div>
            ))}
            <button className="btn__seemore">See More</button>
          </div>
        </div>
      </div>
    </div>
    <YourQuestion/>
    </>

  )
}

export default QuestionAbout
