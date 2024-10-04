import Image from 'next/image';

import styles from './Footer.module.scss';

import logo from '@/assets/logo/logo.webp';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles['footer__logo']}>
          <Image src={logo} alt="logo" priority />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
