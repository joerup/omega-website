import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

export default function IconWheel() {
  return (
    <Link href="../../">
      <div className={styles.calcimageborder}> 
        <div className={styles.calcimage}> 
          <img src="images/icons/Omega_Cool.png" className={styles.tertiary}/>
          <img src="images/icons/Omega_Classic_Pink.png" className={styles.secondary}/>
          <img src="images/icons/Omega_Classic_Blue.png" className={styles.primary}/>
          <img src="images/icons/Omega_Life.png" className={styles.secondary}/>
          <img src="images/icons/Omega_Warm.png" className={styles.tertiary}/>
        </div>
      </div>
    </Link>
  )
}