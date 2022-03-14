import { useEffect, useState } from "react";
import axios from "axios"

export const useAxios = (url="https://airmeetbackend.herokuapp.com/data") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    let req={
        method:"get",
        url:url,
    }
    axios(req).then((res)=>{
       // console.table(res)
     setTimeout(()=>
     {
      setData(res.data)
      setIsLoading(false);
     },1000)
    }).catch((e)=>
    {
        setIsError(true);
        setIsLoading(false);
        console.log(e)
    })
  }, [url]);
  return { data, isLoading, isError ,setData};
};