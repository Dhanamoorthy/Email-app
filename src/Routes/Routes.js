import { lazy } from "react";

const Main= lazy(()=>import('../pages/Main'));
const Emails=lazy(()=>import('../Components/Emails'));
const ViewEmail=lazy(()=>import('../Components/ViewEmail'));


const routes ={
    main:{
        path:'/',
        element:Main
    },
    emails:{
        path:'/emails',
        element:Emails
    },
    view:{
        path:'/view',
        element:ViewEmail
    },
    invalid:{
        path:'/*',
        element:Emails
    },
   
}

export {routes};
