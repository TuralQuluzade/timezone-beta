import React from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.logo}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
            </div>
            <div className={styles.info}>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link>About</Link>
                <Link>Latest</Link>
                <Link>Blog</Link>
                <Link>Pages</Link>
                <Link>Contact</Link>
            </div>
            <div className={styles.icon}>
            <CiSearch style={{fontSize:"2rem"}}/>
            <CiUser style={{fontSize:"2rem"}}/>
            <CiShoppingCart style={{fontSize:"2rem"}}/>
            </div>      
        </div>
        
    </div>
  )
}

export default Header