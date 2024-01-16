import React from 'react'
import { AppBar,Toolbar,styled ,InputBase,Box} from '@mui/material';
import { Menu as MenuIcon,Search,Tune,HelpOutlineOutlined} from '@mui/icons-material';
import { emaillogo } from '../Constrants/Constrant';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function Header({toggleDrawer}) {

  // styled app bar is using for a adding the css for appbar
  const StyledAppBar= styled(AppBar)({
    background:"#F5F5F5",
    boxShadow:'none'
  })

  const SearchWrapper=styled(Box)({
    backgroundColor:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0px  20px',
    // this portion is used to the search input  100 percent width
    //input box child of the searchwrapper element so we using div is elements inside the searchwrapper element we have div name for the input 
    //so we using div
    '& > div':{
      width:'100%',
      padding:'0px 10px'
    }
  })


  const OptionsWrapper=styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
      marginLeft:'20px'
    }
      
  })
  return (
    <div> 
         <StyledAppBar position='static'>
          <Toolbar>
            {/* color action is the changing color of black */}
            <MenuIcon color='action' onClick={toggleDrawer}/>
            <img src={emaillogo} alt='logo' style={{width:110 ,marginLeft:'15px'}}/>
            <SearchWrapper>
               <Search color='action'/>
               <InputBase
               placeholder='Search mail'
               />
               <Tune color='action'/>
            </SearchWrapper>
            <OptionsWrapper>
              <HelpOutlineOutlined color='action'/>
              <SettingsOutlinedIcon color='action'/> 
              <AppsOutlinedIcon color='action'/>
              <AccountCircleOutlinedIcon color='action'/>
            </OptionsWrapper>
          
          </Toolbar>
         </StyledAppBar>
    </div>
  )
}

export default Header;