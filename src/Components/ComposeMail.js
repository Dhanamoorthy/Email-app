import React, { useEffect, useState } from 'react';
import { Box, Dialog,InputBase,Typography ,styled,TextField,Button} from '@mui/material';
import { Close,DeleteOutlined } from '@mui/icons-material';
import useApi from '../Hooks/useApi';
import { API_URLS } from '../Services/api.urls.js';



// we using simple dialog on click function to compose
function ComposeMail({OpenDialog,setOpendialog}) {

    const [data,setData]=useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService=useApi(API_URLS.saveDraftEmails);

    const dialogStyle={
        height:'90%',
        width:'80%',
        maxWidth:'100%',
        maxHeight:'100%',
        boxShadow:'none',
        borderRadius:'10px 10px 0 0'
    }

    const Header=styled(Box)({
        display:'flex',
        justifyContent:'space-between',
        padding:'10px 15px',
        background:'#f2f6fc',
        '& > p':{
            fontSize:14,
            fontWeight:600,
        }
    })

    const ReceipiantsWrapper=styled(Box)({
        display:'flex',
        flexDirection:'column',
        padding:'0px 15px',
        '& > div':{
            fontSize:'14px',
            borderBottom:'1px solid #F5F5F5',
            marginTop:'10px'
        }

    })

    const Footer=styled(Box)({
        display:'flex',
        justifyContent:'space-between',
        padding:'10px 15px',
    })

    const SendButton=styled(Button)({
        background:'#0B57D0',
        color:'#fff',
        fontWeight:500,
        textTransform:'none',
        borderRadius:'18px',
        width:100
    })
    

    const CloseComposemail= (e) => {
        e.preventDefault();

        const payload ={
            to:data.to,
            from:'dhanasekar9540@gmail.com',
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:'',
            name:'Email clone ',
            starred:false,
            type:'drafts'
        }

        saveDraftService.call(payload);

        if(! saveDraftService.error){
            setOpendialog(false);
            setData({});
        }else{

        }

        setOpendialog(false);

    }

    const Config={
        
            Host : "smtp.elasticemail.com",
            Username :"beginnerdevelope@yopmail.com",
            Password : 'BCB8D1B41296B4A9C32B838654E6EF9432A6',
            Port:2525,
    }


    const SendMail= async (e)=>{
        e.preventDefault();
        if (window.Email){
        window.Email.send({
            ...Config,
            To : data.to,
            From : 'beginnerdevelope@yopmail.com',
            Subject :data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
        }

        const payload ={
            to:data.to,
            from:'dhanasekar9540@gmail.com',
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:'',
            name:'Email clone ',
            starred:false,
            type:'sent'
        }

        sentEmailService.call(payload);

        if(!sentEmailService.error){
            setOpendialog(false);
            setData({});
        }else{

        }


        setOpendialog(false);
    }

    const onValueChange=(e)=>{
        // console.log(e.target.name,e.target.value)
        setData({...data,[e.target.name]:e.target.value})
        console.log(e)
    }
    
    useEffect(()=>{
        console.log(data)
    },[data]);
  return (
    <Dialog
    open={OpenDialog}
    //Know about paperprops
    PaperProps={{sx:dialogStyle}}
    >
       <Header>
        <Typography>New Message</Typography>
        <Close fontSize='small'onClick={(e)=>CloseComposemail(e)}/>
       </Header>

       {/* < ReceipiantsWrapper> */}
        <InputBase placeholder='To' name="to"  value={data.to}onChange={(e)=>onValueChange(e)}/>
        <InputBase placeholder='Subject' name="subject"  value={data.subject} onChange={(e)=>onValueChange(e)}/>

       {/* </ ReceipiantsWrapper> */}
      
      <TextField 
      multiline
      rows={20}
      sx={{'& .MuiOutlinedInput-notchedOutline ':{border:'none'}}} 
      name="body"
      onChange={(e)=>onValueChange(e)}
      />
       <Footer>
        < SendButton onClick={(e)=>SendMail(e)}>Send</ SendButton>
        <DeleteOutlined onClick={()=>setOpendialog(false)}/>
       </Footer>
    </Dialog>
  )
}

export default ComposeMail