import React, { useState } from 'react'

//Material ui react
import { Box, Tab } from '@mui/material'
import { TabList, TabPanel, TabContext } from '@mui/lab'
import QuestionDataPopular from './QuestionDataPopular'
import QuestionDataAsked from './QuestionDataAsked'

const QuestionSerarchItem = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
              <QuestionDataPopular />
            </TabPanel>
            <TabPanel value="2">
              <QuestionDataAsked />
            </TabPanel>
          </TabContext>
        </Box>
        <div className="by__topic">hggdfbgifd</div>
      </div>
    </div>
  )
}

export default QuestionSerarchItem
