import navItems from '@/data/nav-items';
import Link from 'next/link';

import styles from './Navigation.module.scss';

interface INavigation {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const Navigation = ({ isMobileMenuOpen, closeMobileMenu }: INavigation) => {
  return (
    <nav
      className={`${styles.navigation}` + (isMobileMenuOpen ? ` ${styles.navigation_open}` : ``)}
    >
      <ul>
        {navItems.map((item) => (
          <li
            key={item.url}
            className={
              `${styles.navigation__item}` +
              (isMobileMenuOpen ? ` ${styles.navigation__item_open}` : ``)
            }
            onClick={closeMobileMenu}
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
