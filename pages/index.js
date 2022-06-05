import Head from 'next/head';
import Link from 'next/link';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import heroStyles from '../styles/Hero.module.css';

export default function Home({ images }) {
  return (
    <>
      <Head>
        <title>Visual Crate | Artistic Photographers</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <script src='https://kit.fontawesome.com/84047fdc96.js' crossOrigin='anonymous'></script>
      </Head>

      <div className={heroStyles.main}>
        <Navbar />
        <div className='container'>
          <main className={heroStyles.hero}>
            <h1>Nice to meet you.</h1>
            <span>We at Visual Crate are known to convey artistic moments that were frozen in time</span>
          </main>
          <svg width='24' height='32' viewBox='0 0 24 32' fill='none' xmlns='http://www.w3.org/2000/svg' className={heroStyles.arrow}>
            <path d='M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97918 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 -6.55671e-08L10.5 30L13.5 30L13.5 6.55671e-08L10.5 -6.55671e-08Z' fill='#f4f4f4' />
          </svg>
        </div>
      </div>

      <Modal />
      <div className='container'>
        <Card images={images} />
        <Link href='/portfolio'>
          <a className={heroStyles.viewMore}>
            View More{' '}
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z' fill='#333333' />
            </svg>
          </a>
        </Link>
        <div className='footer'>
          <span>Copyright &#169; {new Date().getFullYear()}, Visual Crate</span>
          <span>
            Designed and Developed by{' '}
            <a href='http://joshuacoutinho.com' target='_blank' rel='noopener noreferrer' className='accent'>
              Joshua Coutinho
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const params = {
    expression: 'folder="test"',
  };
  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`,
    },
  }).then((r) => r.json());

  const { resources } = results;

  const images = resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });

  return {
    props: {
      images,
    },
  };
}
