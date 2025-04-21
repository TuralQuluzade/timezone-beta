import React from 'react'
import styles from "./Sect2.module.css"
const Sect2 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h1>New Arrivals</h1>
            <div className={styles.cards}>
                <div className={styles.bir}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
                <h2>Thermo Ball Etip Gloves</h2>
                <h4>$ 45,743</h4>
                </div>
                <div className={styles.bir}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
                <h2>Thermo Ball Etip Gloves</h2>
                <h4>$ 45,743</h4>
                </div>
                <div className={styles.bir}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
                <h2>Thermo Ball Etip Gloves</h2>
                <h4>$ 45,743</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sect2