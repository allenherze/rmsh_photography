import Head from 'next/head';
import Navbar from '../components/NavLight';
import aboutStyles from '../styles/About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const about = () => {
  return (
    <>
      <Head>
        <title>Visual Crate | About Us </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <script src='https://kit.fontawesome.com/84047fdc96.js' crossOrigin='anonymous'></script>
      </Head>
      <Navbar />
      <div className='container'>
        <div className={aboutStyles.about}>
          <div className={aboutStyles.aboutContent}>
            <h1 className={aboutStyles.header}>Who we are? and What do we do?</h1>
            <p className={aboutStyles.description}>
              Thank you for taking the time to visit our website. We are based in Mumbai who use photography, design and animation to tell stories in our own unique way. <br />
              <br />
              Over the years, we have been fortunate enough to discover a true passion for photography and explore it on a daily basis. Colors, nature, and the street are prominent themes in our work.
            </p>
          </div>
        </div>
        <div>
          <img src='/about.png' alt='about' className={aboutStyles.aboutImage} />
        </div>
        <div className={aboutStyles.social}>
          <span>Follow us on Social Media</span>
          <div className={aboutStyles.socialIcons}>
            <a href='https://www.instagram.com/visual.crate/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} />
            </a> */}
          </div>
        </div>
      </div>
      <div className='footer'>
        <span>Copyright &#169; {new Date().getFullYear()}, Visual Crate</span>
        <span>
          Designed and Developed by{' '}
          <a href='https://joshuacoutinho.com' target='_blank' rel='noopener noreferrer' className='accent'>
            Joshua Coutinho
          </a>
        </span>
      </div>
    </>
  );
};

export default about;
