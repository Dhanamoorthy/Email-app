import { Box, Button,styled ,List,ListItem, Container} from '@mui/material';
import { CreateOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../Config/Sidebar.config';
import ComposeMail from './ComposeMail';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../Routes/Routes';


function SidebarContent() {

    const [OpenDialog,setOpendialog]=useState(false);

    const {type}=useParams();

    // styled app bar is using for a adding the css for in compose button
    const ComposeButton=styled(Button)({
        background:'#c2e7ff',
        color:'#001d35',
        padding:15,
        borderRadius:16,
        minWidth:140,
        textTransform:'none'

    })


    const Container=styled(Box)({
        padding:8,
        '& > ul':{
            padding:'10px 0 0 5px',
            fontsize:14,
            fontWeight:500,
            cursor:'pointer',
            '& > a':{
                textDecoration:'none',
                color:'inherit'
            }
        },
        '& > ul > a > li > svg':{
            marginRight:20
        }
    })

    const onComposeClick=()=>{
        setOpendialog(true);
    }
  return (
     <Container>
        <ComposeButton onClick={()=>onComposeClick()}>
            <CreateOutlined/>Compose
        </ComposeButton>
       
       <List>
        {
            SIDEBAR_DATA.map(data=>(
                <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                <ListItem style={type === data.name.toLowerCase()? {
                    backgroundColor:'#d3e3fd',
                    borderRadius:'0 16px 16px 0'
                }: {}}>
                    <data.icon/>{data.title}
                </ListItem>
                </NavLink>
            ))
        }
       </List>

       <ComposeMail OpenDialog={OpenDialog} setOpendialog={setOpendialog}/>
        
     </Container>
  )
}

export default SidebarContent