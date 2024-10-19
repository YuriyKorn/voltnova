import navItems, { navItemRole } from '@/data/nav-items';
import Link from 'next/link';

import styles from './Navigation.module.scss';
import NavItemDropdownList from '../NavItemDropdownList/NavItemDropdownList';

interface INavigation {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const Navigation = ({ isMobileMenuOpen, closeMobileMenu }: INavigation) => {
  return (
    <nav
      className={`${styles.navigation}` + (isMobileMenuOpen ? ` ${styles.navigation_open}` : ``)}
    >
      <ul className={styles.navigation__list}>
        {navItems.map((item) => (
          <li
            key={item.title}
            className={
              `${styles.navigation__item}` +
              (isMobileMenuOpen ? ` ${styles.navigation__item_open}` : ``)
            }
          >
            {item.role === navItemRole.list ? (
              <NavItemDropdownList title={item.title} list={item.sublist} />
            ) : (
              <Link href={item.url} onClick={closeMobileMenu}>
                {item.title}{' '}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
