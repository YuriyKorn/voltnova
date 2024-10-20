import Image from 'next/image';
import Link from 'next/link';

import styles from './AboutUs.module.scss';

import img from '@/assets/aboutUs/about-us.png';

const AboutUs = () => {
  return (
    <section className={styles['about-us']}>
      <div className={styles['about-us__inner']}>
        <h2 className={styles.contacts__heading}>- Про нас -</h2>
        <div className={styles['about-us__img-container']}>
          <Image src={img} alt="about-us" priority />
        </div>
        <p className={styles['about-us__description']}>
          Ми — команда експертів, що спеціалізується на розробці та впровадженні сучасних систем
          резервного живлення для вашого дому, квартири або офісу. Наше головне завдання —
          забезпечити вас надійними джерелами енергії, щоб ви могли бути впевненими в стабільності
          електропостачання за будь-яких обставин.
        </p>
        <p className={styles['about-us__description']}>
          Нами використовуються лише найкращі рішення на базі акумуляторів LiFePo4, що відзначаються
          високою надійністю, екологічністю та довговічністю. Завдяки цим технологіям, наші системи
          можуть працювати понад 6000 циклів, що робить їх ідеальним вибором для тривалого
          використання. Ми пропонуємо різноманітні варіанти акумуляторних систем, а також сучасні
          гібридні інвертори, що забезпечують ефективну роботу навіть в умовах перебоїв
          електроживлення.
        </p>
        <p className={styles['about-us__description']}>
          Кожен продукт проходить сертифікацію та відповідає міжнародним стандартам якості й
          безпеки. Ми розуміємо, наскільки важливо мати надійне електропостачання, тому пропонуємо
          індивідуальні рішення для кожного клієнта — від консультацій та підбору обладнання до
          професійного монтажу і налаштування.
        </p>
        <p className={styles['about-us__description']}>
          Наші клієнти можуть розраховувати на повний спектр послуг: від швидкої онлайн-оплати до
          гарантійного та післягарантійного обслуговування. Наша розширена гарантія покриває до 5
          років роботи обладнання, а команда спеціалістів завжди готова надати технічну підтримку та
          консультації.
        </p>
        <p className={styles['about-us__description']}>
          Ми прагнемо стати вашим надійним партнером у забезпеченні енергетичної незалежності та
          стабільності. Приєднуйтесь до нас і відкрийте для себе новий рівень комфорту та надійності
          з нашими системами резервного живлення.
        </p>
        <div className={styles['about-us__link-container']}>
          <Link href="/certificates" className={styles['about-us__link']}>
            Сертифікати відповідності, тестування та безпечності продукції
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
