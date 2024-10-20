import Carousel from '../Carousel/Carousel';
import styles from './Certificates.module.scss';

import {
  carouselCertR01,
  carouselCertR02,
  carouselCertR05,
  carouselFccReport
} from '@/data/carousels';

const Certificates = () => {
  return (
    <section className={styles.certificates}>
      <div className={styles.certificates__inner}>
        <h2 className={styles.certificates__heading}>- Сертифікати -</h2>
        <p className={styles.certificates__description}>
          Нижче приведені сертифікати відповідності, тестування та безпечності продукції{' '}
        </p>
        <ul>
          {[carouselCertR01, carouselCertR02, carouselCertR05, carouselFccReport].map(
            (carousel) => (
              <li key={carousel.title} className={styles.certificates__carousel}>
                <Carousel
                  carousel={carousel}
                  title={carousel.title}
                  isWithCounter
                  isFullScreenOption
                />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
