import React from 'react'
import styles from '../styles/header.module.css'

export default function Header({ props }) {
  return(
    
    <header className={styles.navbar}>
      <a href="/">
        <div className={styles.navleft}>
          <img className={styles.logo} src="/images/icons/Omega_Classic_Blue.png"/>
          <h1 className={styles.title}>Omega Calculator</h1>
        </div>
      </a>

      <div className={styles.navright}>

        <div className={styles.dropdown}>
          <img className={styles.dropbutton} src="https://img.icons8.com/metro/26/ffffff/menu.png"/>
          <div className={styles.dropdowncontent}>
            <a href="/">Home</a>
            <a href="/support">Support</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>

        <a href="/">
          <p className={styles.rowItem}>Home</p>
        </a>
        <a href="/support">
          <p className={styles.rowItem}>Support</p>
        </a>
        <a href="/privacy">
          <p className={styles.rowItem}>Privacy</p>
        </a>
        
      </div>
    </header>
  )
}