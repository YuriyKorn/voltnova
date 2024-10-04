'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import { useCallback } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import styles from './Carousel.module.scss';

import slide_01 from '@/assets/aboutSection/slide_01.webp';
import slide_02 from '@/assets/aboutSection/slide_02.webp';
import slide_03 from '@/assets/aboutSection/slide_03.webp';
import slide_04 from '@/assets/aboutSection/slide_04.webp';
import slide_05 from '@/assets/aboutSection/slide_05.webp';

const sliders: {
  img: StaticImageData;
  alt: string;
}[] = [
  { img: slide_01, alt: 'img-01' },
  { img: slide_02, alt: 'img-02' },
  { img: slide_03, alt: 'img-03' },
  { img: slide_04, alt: 'img-04' },
  { img: slide_05, alt: 'img-05' }
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__viewport} ref={emblaRef}>
        <div className={styles.carousel__container}>
          {sliders.map((slide) => (
            <div key={slide.alt} className={styles.carousel__slide}>
              <Image src={slide.img} alt={slide.alt} priority />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carousel__controls}>
        <button onClick={scrollPrev}>
          <FaChevronCircleLeft />
        </button>
        <button onClick={scrollNext}>
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
