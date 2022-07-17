import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Material ui react
import { Box, Tab } from '@mui/material'
import { TabList, TabPanel, TabContext } from '@mui/lab'
import QuestionDataPopular from './QuestionDataPopular'
import QuestionDataAsked from './QuestionDataAsked'
import PaginationData from './PaginationData'

const QuestionSerarchItem = () => {
  const [value, setValue] = React.useState('1')
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)

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

  return (
    <div className="question__container">
      <div className="wrapper wrapper__flexstart ">
        <Box sx={{ width: '75%', typography: 'body1' }}>
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
              <QuestionDataPopular data={currentPosts} loader={loader} />
              <PaginationData
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
              />
            </TabPanel>
            <TabPanel value="2">
              <QuestionDataAsked data={data} loader={loader} />
            </TabPanel>
          </TabContext>
        </Box>
        <div className="by__topic">
          <div className="topic__item">
            <h1>Browse by Topic</h1>

            {data.map((item) => (
              <div className="browse__topic" key={item.id}>
                {item.job_title.length < 11 ? (
                  <span>{item.job_title}</span>
                ) : (
                  <p>{item.job_title}</p>
                )}
              </div>
            ))}
          </div>
          <div className="expert">
            {
              data.map((item) =>{
                <div className='expert__wrapper'>
                    <h1>Expert Contributors</h1>
                    <div>
                      
                    </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionSerarchItem
