
import API_GMAIL from "../Services/api"
import { useState } from "react";



const useApi= (urlObject) => {
    const [response,setResponse]=useState(null);
    const [error,setError]=useState("");
    const [isloading,setIsLoading]=useState(false);


    const call= async(payload,type = '')=>{
        setResponse(null);
        setError("");
        setIsLoading(true);

        try {
            let response = await API_GMAIL(urlObject,payload, type);
            setResponse(response.data)
        } catch (error) {
            setError(error.message);
        }finally{
            setIsLoading(false);
        }

    }

    return {call,response,error,isloading};
}

export default useApi;


