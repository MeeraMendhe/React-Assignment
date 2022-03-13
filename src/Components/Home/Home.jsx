import React from 'react'
import styles from './Home.module.css'
import { useAxios } from '../../CostumeHook/useAxios'
const Home = () => {
const {data,isLoading,isError}=useAxios("http://localhost:1234/data")
console.log(data)
  return (
    <div className={styles.background}>
        <h1 className={styles.h1}>Movies</h1>
    </div>
  )
}

export default Home
