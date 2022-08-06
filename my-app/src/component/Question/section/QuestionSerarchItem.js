import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//Material ui react
import { Box, Tab } from '@mui/material'
import { TabList, TabPanel, TabContext } from '@mui/lab'
import QuestionDataPopular from './QuestionDataPopular'
import QuestionDataAsked from './QuestionDataAsked'
import PaginationData from './PaginationData'

const QuestionSerarchItem = () => {
  const [value, setValue] = React.useState('1')
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loader, setLoader] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)
  const [noOfElement, setnoOfElement] = useState(15)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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

console.log(data)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const loadMore = () => {
    setnoOfElement(noOfElement + 4)
  }
  const sliceShow = data.slice(0, noOfElement)

  return (
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
      <div className="wrapper wrapper__flexstart item1 ">
        <Box className="box__nav">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Most Popular" value="1" />
                <Tab label="Recently Asked" value="2" />
              </TabList>
            </Box>
            <TabPanel sx={{ p: '10px 0 0 0' }} value="1">
              <QuestionDataPopular
                data={currentPosts}
                loader={loader}
                searchTerm={searchTerm}
              />
              <PaginationData
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
              />
            </TabPanel>
            <TabPanel sx={{ p: '10px 0 0 0' }} value="2">
              <QuestionDataAsked
                data={currentPosts}
                loader={loader}
                searchTerm={searchTerm}
              />
              <PaginationData
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
              />
            </TabPanel>
          </TabContext>
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
  )
}

export default QuestionSerarchItem
