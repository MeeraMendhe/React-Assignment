import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWish, deleteWish } from '../../Redux/action'
import styles from "./List.module.css"
import {useAxios} from "../../CustomHook/useAxios"
const List = ({...e}) => {
    let {type,title,posterURL,_id,flag}=e
    let [id,setId]=useState(false)
    const [val,setVal]=useState("")
    const { wish } = useSelector((state) => ({ wish: state.wish }));
    const toggle=()=>
    {
     
        let req={
            method:"patch",
            url:`https://airmeetbackend.herokuapp.com/data/${_id}`
        }
        axios(req).then((res)=>{
           console.log(res.data)
           setVal(res.data.flag)
           window.location.href="/movie"
        }).catch(e=>
            {
                console.log(e)
       })
      
    }
    //console.log(wish)
    const dispatch=useDispatch()
    const handleAddLocal = (data) => {
        if (localStorage.getItem("WishList") === null) {
          localStorage.setItem("WishList", JSON.stringify([]));
        }
        let wishlistPro = JSON.parse(localStorage.getItem("WishList"));
         wishlistPro.push(data);
        localStorage.setItem("WishList", JSON.stringify(wishlistPro));
      }
      const handleChange=(el)=>{
        if(el.target.checked==true)
        {
            toggle()
            dispatch(addWish(e)) 
            setVal(prev=>!prev)       
        }
        else
        {
            toggle()
            dispatch(deleteWish(_id)) 
            setVal(prev=>!prev)   
        }
      }
    useEffect(()=>  
    {

    },[val])
  return (
    <div >
     <img style={!e.flag?{border:"5px solid blue",boxShadow: "red 0px 3px 8px"}:{border:"2px solid white",boxShadow: "white 0px 3px 8px"}} className={styles.image} src={posterURL}  alt="img"/> 
     <div className={styles.flex}>
     <input className={styles.check} type="checkbox" checked={!flag} onChange={(e)=>handleChange(e)} id={_id}/>
     <button className={styles.btn} onClick={()=>handleAddLocal(e)}>Add to Favorite</button>
     </div>
    </div>
  )
}

export default List
