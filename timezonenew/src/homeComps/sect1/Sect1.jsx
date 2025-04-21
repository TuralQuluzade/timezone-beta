import React from 'react'
import styles from "./Sect1.module.css"
const Sect1 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.texts}>
                <h1>Select Your New Perfect Style</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                <button>SHOP NOW</button>
            </div>
            <div className={styles.sekil}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sect1