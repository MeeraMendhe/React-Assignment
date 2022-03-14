import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWish, deleteWish } from '../../Redux/action'
import styles from "./List.module.css"
const List = ({...e}) => {
    let {type,title,posterURL,_id}=e
    const [flag,setFlag]=useState(false)
    const { wish } = useSelector((state) => ({ wish: state.wish }));
    //console.log(wish)
    if(wish)
    {
        let m=wish.filter(item=>item._id==_id)
        console.log(m)
    }
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
        // console.log(e.target.checked)
        if(el.target.checked==true)
        {
            dispatch(addWish(e)) 
            setFlag(true)  
        }
        else
        {
            dispatch(deleteWish(_id))
            setFlag(false)
        }
      }
      
  return (
    <div >
     <img style={flag?{border:"2px solid green",boxShadow: "green 0px 3px 8px"}:{border:"2px solid white",boxShadow: "white 0px 3px 8px"}} className={styles.image} src={posterURL}  alt="img"/> 
     <div className={styles.flex}>
     <input className={styles.check} type="checkbox"  onChange={(e)=>handleChange(e)} id={_id}/>
     <button className={styles.btn} onClick={()=>handleAddLocal(e)}>Add to Favorite</button>
     </div>
    </div>
  )
}

export default List
