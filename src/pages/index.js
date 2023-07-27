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
            Welcome to Omega Calculator, a beautiful and intuitive calculator for your iPhone and iPad.
            </h2>

            <a href="https://apps.apple.com/us/app/omega-calculator/id1528068503"><img src="download.svg" className={styles.download}></img></a>
            
            <br/><br/>

            <h2>
            It’s both familiar and powerful. A full-blown scientific calculator when you need it, and a simple arithmetic device when you don’t. 
            </h2>

            <p>
             A myriad of capabilities to suit your needs, from trivial computations to advanced mathematical functions. Perfect for students and professionals alike, or anyone in need of a high-quality, visually-pleasing calculator, capable of performing any mathematical task you throw its way.            </p>
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
            The interface is smooth, fluid, and fun. Buttons are large and colorful, arranged to maximize efficiency and ease of use. The whole expression appears on one line as you input it, and then together with the result when you press enter. Characters are given high-quality mathematical typesetting. You can type in crazy long expressions and it’s a breeze. Results are saved to a history tape for future use. And you have the freedom to customize your calculator with different themes.             
            </p>

            <br/>

            <h2>
            We’re committed to providing an ad-free experience for everyone. 
            </h2>
            
            <p>
            No one wants to be interrupted by irrelevant ads while trying to use their calculator. That’s why Omega has no outside advertisements. We also don’t collect any data from users. Your calculations and any other information are kept on your device only. 
            </p>

            <br/>

            <h2>
            Unlock even more features with Omega Pro.
            </h2>

            <p>
            Available as a single in-app purchase. All 30+ themes, an interactive text pointer for editing the input line, and saving and exporting your past calculations. Variables for storing and recalling values, plugging numbers into expressions, graphing functions, and more advanced operations like summation, derivatives, and integrals. 
            </p>

            <br/>
            <br/>
            <br/>

            <IconWheel/>

            <br/>
            <br/>
            <h2>It’s time to get the best calculator experience.<br/>Download Omega Calculator today.</h2>

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
