import Link from "next/link";
import Head from 'next/head';
import styles from '../styles/styles.module.css';
import Layout from '../components/layout';
import IconWheel from '../components/iconwheel';
import Header from '../components/header.js';

export default function Privacy() {
  return (
    <Layout>

      <Head>
        <title>Privacy | Omega Calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header/>
      
      <div className={styles.description}>
          
          <IconWheel/>

          <h1>Omega Calculator</h1>
                
          <h1 className={styles.largeTitle}>Privacy Policy</h1>

          <h3>Last updated June 24, 2021</h3>

          <p>
          <br/>
          
          Thank you for choosing to be part of our community at Omega Calculator (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. 

          <b> By using Omega Calculator, you are consenting to our policies regarding the collection, use and disclosure of personal information set out in this privacy policy. </b>
          
          We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
          
          This privacy notice applies to all information collected through our Services (which includes our App), as well as, any related services, sales, marketing or events.
          <br/><br/>
          </p>
          <h1>What information do we collect?</h1>
          <p>
          <b>None. We don&apos;t collect your data, period. </b> 
          
          Your past calculations, as well as any other data you put into Omega Calculator, are stored locally on your device.
          
          We do not transfer your data to any other location, nor do we include any advertising or analytics software affiliated with third parties.
          <br/><br/>
          </p>
          <h1>Do we update this privacy policy?</h1>
          <p>
          <b>We may update this privacy notice as necessary to stay compliant with relevant laws. </b> 

          The updated version will be indicated by the last updated date and the updated version will be effective as soon as it is accessible. 

          If we make material changes to this privacy notice, we may notify you either by posting a notice of such changes or by directly sending you a notification. 
          
          We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
          <br/><br/>
          </p>
          <h1>How can you contact us about this policy?</h1>
          <p>
          <b>If you have questions, comments, or concerns about Omega Calculator&apos;s privacy policy, please do not hesitate to reach out. </b>
              
          You can contact us on our <a href="../support">Support page</a>.
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

      </div>

    </Layout>
  )
}
