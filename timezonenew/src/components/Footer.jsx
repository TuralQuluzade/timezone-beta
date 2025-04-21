import React from 'react'
import styles from "./Footer.module.css"
import { Link } from 'react-router'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.bir}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png" alt="" />
                <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
            </div>
            <div className={styles.iki}>
                <h2>Quick Links</h2>
                <div className={styles.link}>
                    <Link>About</Link>
                    <Link>Offers & Discounts</Link>
                    <Link>Get Coupon</Link>
                    <Link>Contact Us</Link>
                </div>
            </div>
            <div className={styles.iki}>
                <h2>New Products</h2>
                <div className={styles.link}>
                    <Link>Woman Cloth</Link>
                    <Link>Fashion Accessories</Link>
                    <Link>Man Accessories</Link>
                    <Link>Rubber made Toys</Link>
                </div>
            </div>
            <div className={styles.iki}>
                <h2>Support</h2>
                <div className={styles.link}>
                    <Link>Frequently Asked Questions</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Report a Payment Issue</Link>
                </div>
            </div>
        </div>
        <div className={styles.alt}>
            <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
            <div className={styles.icon}>
            <FaTwitter />
            <FaFacebookF />
            <FaBehance />
            <FaGlobe />

            </div>
        </div>
    </div>
  )
}

export default Footer