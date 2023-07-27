import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

export default function IconWheel() {
  return (
    <Link href="../../">
      <div className={styles.calcimageborder}> 
        <div className={styles.calcimage}> 
          <img src="images/icons/Omega_Aquatic.png" className={styles.tertiary}/>
          <img src="images/icons/Omega_Special.png" className={styles.secondary}/>
          <img src="images/icons/Omega_Classic.png" className={styles.primary}/>
          <img src="images/icons/Omega_Grassy.png" className={styles.secondary}/>
          <img src="images/icons/Omega_Ruby.png" className={styles.tertiary}/>
        </div>
      </div>
    </Link>
  )
}