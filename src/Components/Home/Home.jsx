import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useAxios } from '../../CustomHook/useAxios'
import styles from './Home.module.css'

const Home = () => {
// const {data,isLoading,isError}=useAxios("http://localhost:1234/data")
// console.log(data)
const navigate=useNavigate()
const handleClick=()=>
{
     navigate("/movie")
}
  return (
    <div className={styles.background}>
        <h1 className={styles.h1}>Movies</h1>
        <button className={styles.btn} onClick={()=>handleClick()}>Start App</button>
    </div>
  )
}

export default Home
