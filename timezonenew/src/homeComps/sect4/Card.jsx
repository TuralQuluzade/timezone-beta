import React from 'react'
import styles from "./Card.module.css"
const Card = ({item}) => {
  return (
    <div className={styles.card}>
        <div className={styles.main}>
        <div className={styles.sekil}>
        <img className={styles.image} src={item.image} alt="" />
        <button>Add to Color</button>
        </div>
        
        <h3>{item.title}</h3>
        <h4>{item.price}{ " Manat"}</h4>
        </div>
    </div>
  )
}

export default Card