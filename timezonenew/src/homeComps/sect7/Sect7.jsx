import React from 'react';
import styles from "./Sect7.module.css";
import { FiPackage } from "react-icons/fi";
import { IoLockOpen } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";



const Sect7 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.bir}>
            <FiPackage style={{fontSize:"3rem"}}/>
            <h2>Free Shipping Method</h2>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className={styles.bir}>
            <IoLockOpen style={{fontSize:"3rem"}}/>
            <h2>Secure Payment System</h2>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className={styles.bir}>
            <IoIosRefresh style={{fontSize:"3rem"}} />
            <h2>Secure Payment System</h2>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
        </div>
    </div>
  )
}

export default Sect7