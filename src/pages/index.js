import NextLink from "next/link";
import Head from 'next/head';
import styles from '../styles/styles.module.css';
import IconWheel from '../components/iconwheel';
import Header from '../components/header.js';

export default function Home() {
  return (
    <header>

        <Head>
          <title>Omega Calculator</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header/>
      
        <div className={styles.description}>
            
            <IconWheel/>
                
            <h1 className={styles.largeTitle}>Omega Calculator</h1>
            <h5><i>Your favorite calculator</i></h5>

            <h2>
            Welcome to Omega Calculator, an intuitive and beautiful calculator for your iPhone or iPad.
            </h2>

            <a href="https://apps.apple.com/us/app/omega-calculator/id1528068503"><img src="download.svg" className={styles.download}></img></a>
            
            <br/><br/>

            <h2>
              It’s powerful and capable. A full-blown scientific calculator when you need it, and a simple arithmetic device when you don’t. 
            </h2>

            <p>
              A myriad of capabilities to suit your needs, from trivial computations to advanced mathematical functions. Need to calculate the tip on your restaurant bill? No problem. Craving a challenging trigonometry problem? Consider it solved. Omega is your versatile mathematical sidekick, ready to tackle any numerical task you throw its way.
            </p>
            <br/><br/>

            <div className={styles.scrollmenu}>
              <img src="images/screenshots/image1.png"/>
              <img src="images/screenshots/image2.png"/>
              <img src="images/screenshots/image3.png"/>
              <img src="images/screenshots/image4.png"/>
              <img src="images/screenshots/image5.png"/>
              <img src="images/screenshots/image6.png"/>
              <img src="images/screenshots/image7.png"/>
              <img src="images/screenshots/image8.png"/>
              <img src="images/screenshots/image9.png"/>
              <img src="images/screenshots/image10.png"/>
            </div>

            <br/>
            <br/>

            <h2>
            Simplicity meets elegance in the app’s intuitive design.
            </h2>

            <p>
            Buttons are arranged to maximize efficiency and ease of use. The whole expression appears on one line as you input it, and then together with the result when you press enter. You can type in crazy long expressions and it’s a breeze. Results are also saved to a history tape for future use.
            </p>

            <br/>

            <h2>
            It’s a beautiful and seamless experience. 
            </h2>
            
            <p>
            The interface is smooth, fluid, and fun. Buttons are large and colorful. Characters are given high-quality mathematical typesetting. And you have the freedom to customize your calculator with a vast selection of color themes. 
            </p>

            <br/>

            <h2>
            And the best part: the app is free to use, and it has no third-party advertisements – for everyone, forever. 
            </h2>

            <p>
            Yes, you read that right. No longer shall you be bombarded with nonsensical, pesky ads while trying to add some numbers together! Delight in the sweet sensation of subtracting one item from your monthly expenses, thanks to your new OMEGA calculator.
            </p>

            <br/>
            <br/>
            <br/>

            <IconWheel/>

            <br/>
            <br/>
            <h2>It’s time to get the best calculator experience.<br/>Download Omega Calculator for free today!</h2>

            <br/>

            <a href="https://apps.apple.com/us/app/omega-calculator/id1528068503"><img src="download.svg" className={styles.download}></img></a>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    </header>
  )
}
