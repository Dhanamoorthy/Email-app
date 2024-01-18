
import { StarBorder } from "@mui/icons-material";
import { Box,Typography,Checkbox,styled} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import useApi from "../Hooks/useApi";
import { API_URLS } from "../Services/api.urls";
import { Star } from "@mui/icons-material";

const Wrapper= styled (Box)({
    padding:'0 0 0 10px',
    background:"#f2f6fc",
    display:'flex',
    alignItems:"center",
    cursor:'pointer',
    '& > div':{
        display:'flex',
        width:"100%",
        '& > p':{
            fontSize:'14px'
        }
    }
})

const Indicator=styled(Typography)({
    fontSize:'12 px !important',
    background:'#ddd',
    color:"#222",
    padding:'0 4px',
    borderRadius:4,
    marginRight:'6px'
})

const Date=styled(Typography)({
    marginLeft:'auto',
    marginRight:'20px',
    fontSize:'12px',
    color:'#5F6368'
})
const Email = ({email,selectedEmails,setRefreshScreen,setSelectedEmails}) => {

    const navigate = useNavigate();

    const toggleStarredService = useApi(API_URLS.toggleStarredEmails);

    const toggleStarredEmails = () => {
        toggleStarredService.call({id: email._id, value: !email.starred})
        setRefreshScreen(prevState => !prevState);

    }


    const onValueChange = (prevstate) => {
        if (selectedEmails.includes(email._id)){
            setSelectedEmails(prevState => prevState.filter(id => id != email._id));
        }else{
            setSelectedEmails(prevState = [...prevState,email._id])
        }
    }
    return(
      <Wrapper>
        <Checkbox size="small" 
         checked={selectedEmails.includes(email._id)}
         onChange={ ()=> onValueChange() }
         />
        {
            email.starred ?
            <Star fontSize='small' style={{marginRight:10 ,color:'#FFF200' }} onClick={()=>toggleStarredEmails()} />
            :
            <StarBorder fontSize="small" style={{marginRight:10}} onClick={()=>toggleStarredEmails()}/>
        }
      
        <Box onClick={()=>navigate(routes.view.path,{state: { email : email}})}>
            <Typography style={{width:200,overflow:"hidden"}}>{email.name}</Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
            <Date>
                {(new window.Date(email.date)).getDate()}
                {(new window.Date(email.date)).toLocaleString('default',{ month:'long'})}
            </Date>
        </Box>
      </Wrapper>
    )
}

export default Email;
