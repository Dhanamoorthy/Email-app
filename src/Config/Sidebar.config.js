import { Photo,StarRateOutlined ,AccessTime,SendOutlined,InsertDriveFileOutlined, DeleteOutlined, MailOutlined} from "@mui/icons-material";

export const SIDEBAR_DATA=[
    {
        name:'inbox',
        title:'Inbox',
        icon:Photo
 
    },
    {
        name:'starred',
        title:'Starred',
        icon:StarRateOutlined
    },
   
    {
        name:'sent',
        title:'Sent',
        icon:SendOutlined
    },
    {
        name:'drafts',
        title:'Drafts',
        icon:InsertDriveFileOutlined
    },
    {
        name:'trash',
        title:'Trash',
        icon:DeleteOutlined
    },
    {
        name:'allmail',
        title:'All mails',
        icon:MailOutlined
    }
]