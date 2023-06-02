import Link from "next/link";
import Head from 'next/head';
import styles from '../styles/styles.module.css';
import Layout from '../components/layout';
import IconWheel from '../components/iconwheel';
import Header from '../components/header.js';

export default function Support() {
  return (
    <Layout>

      <Head>
        <title>Support | Omega Calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header/>
    
      <div className={styles.description}>
          
          <IconWheel/>

          <h1>Omega Calculator</h1>
                
          <h1 className={styles.largeTitle}>Support</h1>
          
          <h2>
            You can contact us directly via email at any time for support, feedback, or bug reports. We&apos;ll try our best to get back to you within a few hours or so.  
          </h2>

          <Link href="mailto: rupertusapps@gmail.com">
            <div className={styles.plate}> 
              <div>
                  <h2>Contact us at</h2>
                  <h1>rupertusapps@gmail.com</h1>
              </div>
            </div>
          </Link>
            
          <div className={styles.supportdetails}>

            <p><b>If you are contacting us about an issue in the app, please include the following details in your submission:</b></p>

            <h2><b>Omega Calculator version • device you are using • iOS version</b></h2>
          
            <p>This makes it faster for us to resolve any issues you may be facing.</p>

          </div>

          <br/>
          <br/>
              
          {/* <h1 className={styles.largeTitle}>FAQ</h1>
            
          <div className={styles.supportdetails}>

            <h2><b>How can I unlock more themes?</b></h2>
            <p>
              There are 8 themes available for free, plus 24 more that can be purchased. 
              Premium themes can be purchased in sets of four for $0.99 each, or with the Super Omega Theme Pack, which unlocks all themes for $2.99 (50% off).
            </p>

            <br/>

            <h2><b>How do I save a past calculation, and what does this mean?</b></h2>
            <p>
              Saving a past calculation allows it to be kept in the app after it is old enough to be deleted automatically.
              You can save any past calculation by pressing the down arrow icon in the top right of the screen.
            </p>  

            <br/>

            <h2><b>Are there ads in Omega Calculator?</b></h2>
            <p>
              Never. The only things which could be considered "ads" are the ocassional pop-ups offering you a theme pack,
              but even those are extremely rare. We believe third-party ads completely disrupt your calculator experience, and no calculator
              should ever include them.
            </p>  

          </div> */}
          

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

      </div>

    </Layout>
  )
}
