import React, { useState } from 'react'
import { useAxios } from '../../CustomHook/useAxios'
import Navbar from '../Navbar/Navbar'
import styles from './Movie.module.css'
import SlideShow from './SlideShow/SlideShow'
import ReactLoading from 'react-loading'
import List from '../List/List'
const Movie = () => {
  // console.log("Movie")
  const [page, setPage] = useState(1)
  const limit = 6
  const { data, isLoading, isError } = useAxios(
    `http://localhost:1234/data?_page=${page}&_limit=${limit}`,
  )

  return (
    <div className={styles.background}>
      <Navbar />
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
            <div className={styles.grid}>
              {data
                ? data.map((e) => {
                    return <List key={e._id} {...e} />
                  })
                : ''}
            </div>
            <div className={styles.flex}>
              <button className={styles.btn} disabled={page == 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
              <h2 className={styles.h2}>{page}</h2>
              <button className={styles.btn1}  onClick={() => setPage(page + 1)}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Movie
