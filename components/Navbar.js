import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../public/menu.svg';
import Close from '../public/close.svg';
import navbar from '../styles/Navbar.module.css';

export default function Navbar() {
  const [height, setHeight] = useState('0');

  const navOpen = () => {
    setHeight('100vh');
  };

  const menuDisplay = {
    height: height,
  };

  const navClose = () => {
    setHeight('0');
  };

  return (
    <nav className={navbar.navcontainer}>
      <Link href='/'>
        <div>
          <Image alt='Joshua Coutinho Logo' className={navbar.logo} src='/logo.svg' width='100%' height='100%' objectFit='contain' />
        </div>
      </Link>
      <div className={navbar.icon} onClick={navOpen}>
        <Image src={Menu} />
      </div>
      <div className={navbar.navlinks} style={menuDisplay}>
        <Link href='/about'>
          <p className={navbar.link} onClick={navClose}>
            About Us
          </p>
        </Link>
        <Link href='/portfolio'>
          <p className={navbar.link} onClick={navClose}>
            Portfolio
          </p>
        </Link>
        <div onClick={navClose} className={navbar.close}>
          <Image src={Close} />
        </div>
      </div>
    </nav>
  );
}
