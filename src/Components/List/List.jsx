import React from 'react'
import styles from "./List.module.css"
const List = ({type,title,posterURL,_id}) => {
  return (
    <div>
     <img className={styles.image} src={posterURL} alt="img"/> 
    </div>
  )
}

export default List
