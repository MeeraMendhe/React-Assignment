import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./Movie.module.css"
import SlideShow from './SlideShow/SlideShow'
const Movie = () => {
    console.log("Movie")
  return (
    <div className={styles.background}>
      <Navbar/>
      <h1 className={styles.h1}>Come here and watch the movie</h1>
      <SlideShow/>
      
    </div>
  )
}

export default Movie
