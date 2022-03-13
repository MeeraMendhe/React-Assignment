import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../CustomHook/useAxios'
import Navbar from '../Navbar/Navbar'
import styles from "./MovieType.module.css"
import ReactLoading from 'react-loading'
const MovieType = () => {
    const obj=useParams()
    const { data, isLoading, isError } = useAxios(
        `http://localhost:1234/data/filter/${obj.type}`,
      )
      console.log(data,"type")
  return (
    <div className={styles.background}>
      <div>
          <Navbar/>
      </div>
      <h1 className={styles.h1}>{obj.type}</h1>
      <div className={styles.div}>
      {
          isLoading?(
              <div className={styles.center}>
                  <ReactLoading type="balls" color="white" height={250} width={200} />
              </div>
          ):isError?(
              <div>
                   <h1 className={styles.h1}>Something went wrong</h1>
              </div>
          ):data?(
              <div className={styles.grid}>
                  {
                      data.map(e=>(
                        <img className={styles.image} src={e.posterURL} alt="img"/> 
                      ))
                  }
              </div>
          ):""
      }
      </div>
        
    </div>
  )
}

export default MovieType
