'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import Navigation from '../Navigation/Navigation';
import MenuBtn from '../MenuBtn/MenuBtn';

import logo from '@/assets/logo/logo.webp';

import styles from './Header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prevState) => !prevState);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }, [isMobileMenuOpen]);
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href="/" className={styles.header__logo} onClick={closeMobileMenu}>
          <Image src={logo} alt="logo" priority />
        </Link>
        <Navigation isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
        <MenuBtn isMobileMenuOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
