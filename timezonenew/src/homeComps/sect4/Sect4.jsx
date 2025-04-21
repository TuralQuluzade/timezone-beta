import React, { useEffect, useState } from 'react'
import styles from "./Sect4.module.css"
import axios from 'axios'
import Card from './Card'
const Sect4 = () => {
    const [data,setData]=useState([])
    const getData=()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.texts}>
                <h1>Popular Items</h1>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div style={{display:"flex",justifyContent:"center"}} >
                <div style={{display:"flex",width:"100%",flexWrap:"wrap",gap:"2rem"}} >
                {data && data.map((x) => <Card item ={x}/>).slice(0,6)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sect4