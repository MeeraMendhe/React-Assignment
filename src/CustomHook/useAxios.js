import { useEffect, useState } from "react";
import axios from "axios"
export const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let req={
        method:"get",
        url:url
    }
    axios(req).then((res)=>{
       // console.table(res)
       setData(res.data)
       setIsLoading(false);
    }).catch((e)=>
    {
        setIsError(true);
        setIsLoading(false);
        console.log(e)
    })
  }, [url]);
  return { data, isLoading, isError };
};