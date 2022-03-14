import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./Favorite.module.css"
const Favorite = () => {
    const [info,setInfo]=useState([])
    const [flag,setFlag]=useState(false)
    useEffect(()=>
    {
        setInfo(JSON.parse(localStorage.getItem("WishList")))
    },[flag])
         
    const handleDelete = (data) => {
        let cart = JSON.parse(localStorage.getItem("WishList"));
        let newCart = cart.filter((e) => e._id !== data._id);
        localStorage.setItem("WishList", JSON.stringify(newCart));
        setFlag(prev=>!prev)
      };
  return (
    <div className={styles.background}>
      <div>
          <Navbar/>
      </div>
      <h1 className={styles.h1}>Favorite</h1>
     <div className={styles.grid}>
     {
          info.map(e=>(
            <div>
              <img className={styles.image} src={e.posterURL}  alt="img"/> 
              <button onClick={()=>handleDelete(e)} className={styles.btn}>Delete from Favorite</button>
            </div>
          ))
      }
     </div>
    </div>
  )
}

export default Favorite
