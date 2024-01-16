import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import useApi from '../Hooks/useApi';
import { API_URLS } from '../Services/api.urls';
import { Box, Checkbox , List , ListItem } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import Email from './Email';
import NoMails from './Common/NoMails';
import { EMPTY_TABS } from '../Constrants/Constrant';

function Emails() {

  const [selectedEmails,setSelectedEmails]=useState([]);
  const [refreshscreen,setRefreshScreen]=useState(false);

  const{OpenDrawer}=useOutletContext();

  const {type}=useParams();

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService=useApi(API_URLS.moveEmailsToBin);
  const deleteEmailService=useApi(API_URLS.deleteEmail);

  useEffect(()=>{
    getEmailsService.call({},type);
  },[type,refreshscreen])

  const selectAllEmails = (e) => {
    if(e.target.checked) {
      const emails = getEmailsService?.response?.map(email => email._id);
      setSelectedEmails(emails);
    }else{
      setSelectedEmails([]);

    }
  }

  const deleteSelectedEmails = (e) => {
    if (type === 'trash'){
      deleteEmailService.call(selectedEmails);

    }else{
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen(prevState => !prevState)
  }

  return (
    <Box style={OpenDrawer ? {marginLeft:250,width:'calc(100%-250px)'}:{width:"100%"}}>
      <Box style={{padding:'20px 10px 0 10px',display:'flex',alignItems:'center'}}>
        <Checkbox size='small' onChange={(e)=>selectAllEmails(e)}/>
        <DeleteOutline  onClick={(e)=> deleteSelectedEmails(e)}/>
      </Box>
      <List>
        {
         getEmailsService?.response?.map(email => (
          <Email
                key={email._id}
                email={email}
                selectedEmails={selectedEmails}
                setRefreshScreen={setRefreshScreen}
                setSelectedEmails={setSelectedEmails}
          />
         ))
        }
      </List>
      {
        getEmailsService?.response?.length === 0 &&
             <NoMails message={EMPTY_TABS[type]} />
      }
     
    </Box>
  )
}



export default Emails