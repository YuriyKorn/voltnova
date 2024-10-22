import Carousel from '@/components/Carousel/Carousel';

import styles from './page.module.scss';
import { carouselManual } from '@/data/carousels';

export default function ManualPage() {
  return (
    <main className={styles.main}>
      <section className={styles.manual}>
        <div className={styles.manual__inner}>
          <Carousel
            carousel={carouselManual}
            title={carouselManual.title}
            isWithCounter
            isFullScreenOption
          />
        </div>
      </section>
    </main>
  );
}
