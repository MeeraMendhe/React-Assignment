import React from 'react'
import { useAxios } from '../../CustomHook/useAxios'
import Navbar from '../Navbar/Navbar'
import styles from "./Movie.module.css"
import SlideShow from './SlideShow/SlideShow'
import ReactLoading from "react-loading";
const Movie = () => {
   // console.log("Movie")
    const {data,isLoading,isError}=useAxios("http://localhost:1234/data")
    
  return (
    <div className={styles.background}>
      <Navbar/>
      <h1 className={styles.h1}>Come here and watch the movie</h1>
      <SlideShow/>
      <div className={styles.div}>
      {
        isLoading?(
            <div className={styles.center}>
            <ReactLoading
              type="balls"
              color="white"
              height={250}
              width={200}
            />
          </div>
        ):isError?(
            <div>
                <h1 className={styles.h1}>Something went wrong</h1>
            </div>
        ):(
        <div className={styles.grid}>
            {
                data.map(e=>
                    ( <div >
                         <img className={styles.image} src={e.posterURL} alt="img"/>
                     </div>)
                     )
            }
        </div>
        )
      }
      </div>
    </div>
  )
}

export default Movie
