import Image from 'next/image';

import Carousel from '../Carousel/Carousel';

import styles from './About.module.scss';

import img from '@/assets/aboutSection/img001.webp';
import { carouselAboutSection } from '@/data/carousels';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about__inner}>
        <article className={styles.about__intro}>
          <div className={styles['about__img-container']}>
            <Image src={img} alt="img" />
          </div>
          <div className={styles['about__txt-container']}>
            <h4>- Що це? -</h4>
            <p>
              Ми пропонуємо системи резервного живлення для квартир, будинків та офісів. В нашому
              обладнанні використовуються лише якісні і протестовані заводом-виробником
              літій-залізо-фосфатні акумуляторні батареї (LiFePo4) та системи управління
              (BMS-контролери). Кожен тип батареї пройшов випробування та має відповідні сертифікати
              згідно міжнародних стандартів UN38.3, MSDS, FCC, UL, CE, RoHS, SAA та ін.
            </p>
          </div>
        </article>
        <Carousel carousel={carouselAboutSection} />
      </div>
    </section>
  );
};

export default About;
