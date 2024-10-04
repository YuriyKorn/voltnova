import styles from './MenuBtn.module.scss';

interface IMenuBtn {
  isMobileMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuBtn = ({ isMobileMenuOpen, toggleMenu }: IMenuBtn) => {
  return (
    <div
      className={`${styles['menu-btn']}` + (isMobileMenuOpen ? ` ${styles['menu-btn_close']}` : ``)}
      onClick={toggleMenu}
    >
      <div className={styles['menu-btn-line']}></div>
      <div className={styles['menu-btn-line']}></div>
      <div className={styles['menu-btn-line']}></div>
    </div>
  );
};

export default MenuBtn;
