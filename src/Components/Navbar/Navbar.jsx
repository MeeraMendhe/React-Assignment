import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"
import Modal from "react-modal";
const Navbar = () => {
    const navigate=useNavigate()
    const time=useRef()
    const query=useRef()
    const [search,setSearch]=useState([])
    const [count,setCount]=useState(0)
    const [show,setShow]=useState(false)

    const handleFavorite=()=>
    {
        navigate("/favorite")
    }
    const handleHome=()=>
    {
        navigate("/movie")
    }
    const getData=(query)=>
    {
         let req={
             method:"get",
             url:`https://airmeetbackend.herokuapp.com/data/${query}`
         }
         axios(req).then(res=>
            {
               setSearch(res.data)
               console.log(res.data)
            }).catch(e=>
                {
                    return null
            })
    }
const debouncer=(func,delay)=>{
   
    if(time.current){
        clearTimeout(time.current);
    }
    time.current=setTimeout(()=>{
        func();
    },delay);
    console.log(count)
    setCount(prev=>prev+1)
}

function myfunc(){
   // console.log(query.current.value)
  getData(query.current.value)
  console.log(search)
  setShow(true)

}

  return (
    <div className={styles.Navbar}>
      <div onClick={handleHome} className={styles.image}>
           <img src="https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?k=20&m=1007557230&s=612x612&w=0&h=hWEw8rA6ASt-Z18pNvUKk2GtQZVLj1GHv3HFlNB4p6U=" alt=""/>
      </div> 
      <div className={styles.width}>
          <h1 className={styles.h1}>Best theater in your city</h1>
      </div>
      <div className={styles.box}>
          <input className={styles.inp} placeholder="Search Movie" ref={query} onChange={()=>debouncer(myfunc,1000)} type="text" />
      </div>
      <div onClick={handleFavorite} className={styles.image1}> 
          <img src="https://i.pinimg.com/originals/97/8e/33/978e334ee492dda7a96b7dcee8b468f2.jpg" alt="favorite"/>
      </div>
      <Modal className={styles.Modal} isOpen={show}>
      <button className={styles.x} onClick={()=>setShow(false)}>X</button>
          {
              search?search.map(e=>(
                  <p className={styles.p}>{e.title}</p>
              )):""
             
          }
          
      </Modal>
      <div className={styles.btnBox}>
          <button className={styles.btn}>Login</button>
      </div>
    </div>
  )
}

export default Navbar
