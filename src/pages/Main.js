import React, { Suspense, useState } from 'react'
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Emails from '../Components/Emails';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../Components/Common/SuspenseLoader';
import { Box } from '@mui/material';


function Main() {
  
  //this use state is use for you click a menu icon show side bar
  //thats default value is true
  const [OpenDrawer,setOpenDrawer]=useState(true);

  //this function is used for onclick function to the menu icon
  
  const toggleDrawer = () =>{
    setOpenDrawer(prevstate => !prevstate)
  }
  return (
    <>
       <Header 
       toggleDrawer={toggleDrawer}
       />
       <Box>
          <Sidebar
             OpenDrawer={OpenDrawer}
          />
          <Suspense fallback={<SuspenseLoader/>} >
            <Outlet context={{OpenDrawer}}/>
           
          </Suspense>
      </Box>
    </>
  )
}

export default Main;