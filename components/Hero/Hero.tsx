import Link from 'next/link';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <h1 className={styles.hero__heading}>Безпечні системи резервного живлення</h1>
        <p className={styles.hero__description}>
          Забезпечимо надійне зберігання енергії та резервне живлення в періоди високого попиту або
          збоїв у мережі
        </p>
        <Link href="/#about">
          <button className={styles.hero__btn}>Дізнатись більше</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
