import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../CustomHook/useAxios'
import Navbar from '../Navbar/Navbar'
import styles from "./MovieType.module.css"
import ReactLoading from 'react-loading'
const MovieType = () => {
    const obj=useParams()
    const [page,setPage]=useState(1)
    const [all,setAll]=useState([])
    const limit=9;
    const divRef = useRef();
    const scroll = () => {
        if (
          divRef.current.scrollTop + divRef.current.clientHeight >
          divRef.current.scrollHeight - 5
        ) {
          setAll(all.concat(data))
          setPage((page) => page + 1);
          console.log(page);
        }
      };
    const { data, isLoading, isError } = useAxios(
        `https://airmeetbackend.herokuapp.com/data/filter/${obj.type}?_page=${page}&_limit=${limit}`,
      )
    
     // console.log(data,"type")
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
              <div className={styles.grid} ref={divRef} onScroll={scroll} >
                  {
                      all.length==0?data.map(e=>(
                        <img className={styles.image} key={e._id} src={e.posterURL} alt="img"/> 
                      )):all.map(e=>(
                        <img className={styles.image} key={e._id} src={e.posterURL} alt="img"/> 
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
