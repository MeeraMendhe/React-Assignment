import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from './Home.module.css'
const Home = () => {
const [data,setData]=useState([])
 useEffect(()=>
 {
     let req={
         method:"get",
         url:"http://localhost:1234/data"
     }
     axios(req).then((res)=>{
        // console.table(res)
        setData(res.data)
     }).catch((e)=>
     {
         console.log(e)
     })
 },[]) 
  return (
    <div className={styles.background}>
        <h1 className={styles.h1}>Movies</h1>
    </div>
  )
}

export default Home
