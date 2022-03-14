import React, { useState } from 'react'
import { useAxios } from '../../CustomHook/useAxios'
import Navbar from '../Navbar/Navbar'
import styles from './Movie.module.css'
import SlideShow from './SlideShow/SlideShow'
import ReactLoading from 'react-loading'
import List from '../List/List'
import { useNavigate } from 'react-router-dom'
const Movie = () => {
  const [page, setPage] = useState(1)
  const [query,setQuery]=useState("")
  const [movie,setMovie]=useState([])
  const limit = 6
  const { data, isLoading, isError } = useAxios(
    `https://airmeetbackend.herokuapp.com/data?_page=${page}&_limit=${limit}`
  )
  const navigate=useNavigate()
  const handleQuery=(e)=>
  {
      setQuery(e.target.name)
      navigate(`/movie/${e.target.name}`)
  }
  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.flex}>
          <button name="animation" onClick={(e)=>handleQuery(e)} className={styles.button}>Animation</button>
          <button name="classic" onClick={(e)=>handleQuery(e)} className={styles.button}>Classic</button>
          <button name="comedy" onClick={(e)=>handleQuery(e)} className={styles.button}>Comedy</button>
          <button name="drama" onClick={(e)=>handleQuery(e)} className={styles.button}>Drama</button>
          <button name="horror" onClick={(e)=>handleQuery(e)} className={styles.button}>Horror</button>
          <button name="family" onClick={(e)=>handleQuery(e)} className={styles.button}>Family</button>
          <button name="mystery" onClick={(e)=>handleQuery(e)} className={styles.button}>Mystery</button>
          <button name="western" onClick={(e)=>handleQuery(e)} className={styles.button}>Western</button>
      </div>
      <h1 className={styles.h1}>Come here and watch the movie</h1>
      <SlideShow />
      <div className={styles.div}>
        {isLoading ? (
          <div className={styles.center}>
            <ReactLoading type="balls" color="white" height={250} width={200} />
          </div>
        ) : isError ? (
          <div>
            <h1 className={styles.h1}>Something went wrong</h1>
          </div>
        ) : (
          <div>
            <div className={styles.flex}>
              <button className={styles.btn} disabled={page == 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
              <h2 className={styles.h2}>{page}</h2>
              <button className={styles.btn1}  onClick={() => setPage(page + 1)}>Next</button>
            </div>
            <div className={styles.grid}>
              {data
                ? data.map((e) => {
                    return <List key={e._id} {...e} />
                  })
                : ''}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Movie
