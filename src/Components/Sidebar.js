import React from 'react';
import { Drawer,styled } from '@mui/material';
import SidebarContent from './SidebarContent';

function Sidebar({OpenDrawer}) {
  return (
    // anchor chosing bar showing side
    //hidebackdrop is clear black noise in background
    <Drawer
    anchor='left'
    open={OpenDrawer}
    hideBackdrop='true'
    ModalProps={{
      keepMounted:true
    }}
    variant='persistent'
    sx={{
      '& .MuiDrawer-paper':{
        marginTop:'64px',
        width:250,
        background:'#F5F5F5',
        borderRight:'none',
        height:'calc(100vh-64px)'
      }
    }}
    >
     <SidebarContent/>
    </Drawer>
  )
}

export default Sidebar