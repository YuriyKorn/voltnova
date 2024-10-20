'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './SelectedSnapDisplay/SelectedSnapDisplay';

import styles from './Carousel.module.scss';
import { TCarousel } from '@/data/carousels';

interface ICarousel {
  carousel: TCarousel;
  isFullScreenOption?: boolean;
  title?: string;
  isWithCounter?: boolean;
}

const Carousel = ({ carousel, isFullScreenOption, title, isWithCounter }: ICarousel) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const carouselContainer = useRef<HTMLDivElement>(null);

  const [isExpandedSlide, setIsExpandedSlide] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  const toggleSlideSize = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isFullScreenOption) {
        return;
      }

      const slideIndex = e.currentTarget.getAttribute('data-index');
      if (!slideIndex) {
        return;
      }
      if (emblaApi) emblaApi.scrollTo(+slideIndex);
      setIsExpandedSlide((prevState) => !prevState);
      setTimeout(() => {
        if (carouselContainer.current) {
          carouselContainer.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10);
    },
    [emblaApi, isFullScreenOption]
  );

  return (
    <div className={styles.carousel}>
      {title && <h2>{title}</h2>}
      <div className={styles.carousel__viewport} ref={emblaRef}>
        <div className={styles.carousel__container} ref={carouselContainer}>
          {carousel.slides.map((slide, index) => (
            <div
              key={slide.alt}
              className={
                `${styles.carousel__slide}` +
                (isFullScreenOption ? ` ${styles['carousel__slide_fullscreen-option']}` : ``) +
                (isExpandedSlide ? ` ${styles.carousel__slide_expanded}` : ``)
              }
              data-index={index}
              onClick={toggleSlideSize}
            >
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
        {isWithCounter && <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />}
      </div>
    </div>
  );
};

export default Carousel;
