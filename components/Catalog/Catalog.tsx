import Image from 'next/image';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

import styles from './Catalog.module.scss';

import img_adv from '@/assets/catalogSection/p_01.webp';
import products from '@/data/products';

import Link from 'next/link';

const advantages: string[] = [
  'Доступна вартість',
  'Висока якість продукції',
  'Передпродажна перевірка',
  'Гнучкі умови для гуртовиків',
  'Індивідуальна ціна на великі замовлення'
];

const Catalog = () => {
  return (
    <section className={styles.catalog} id="pricing">
      <div className={styles.catalog__inner}>
        <h2 className={styles.catalog__heading}>- Каталог -</h2>
        <article className={styles.catalog__intro}>
          <div className={styles['catalog__intro-img-container']}>
            <Image src={img_adv} alt="advantages" priority />
          </div>
          <div className={styles['catalog__intro-txt-container']}>
            <p className={styles.catalog__description}>Наша продукція має ряд переваг:</p>
            <ul className={styles.catalog__advantages}>
              {advantages.map((advantage) => (
                <li key={advantage} className={styles.catalog__advantage}>
                  <span className={styles['catalog__advantage-icon']}>
                    <FaRegThumbsUp />
                  </span>
                  <span className={styles['catalog__advantage-txt']}>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <ul className={styles.catalog__products}>
          {products.map((product) => (
            <li key={product.simpleDescription.title} className={styles.catalog__product}>
              <h4 className={styles['catalog__product-title']}>
                {product.simpleDescription.title}
              </h4>
              <div className={styles['catalog__product-img-container']}>
                <Image src={product.img} alt={product.simpleDescription.title} priority />
              </div>
              <p
                className={
                  styles['catalog__product-is-available'] +
                  (product.simpleDescription.isAvailable
                    ? ` ${styles['catalog__product-is-available_available']}`
                    : ` ${styles['catalog__product-is-available_unavailable']}`)
                }
              >
                {product.simpleDescription.isAvailable ? 'В наявності' : 'Немає в наявності'}
              </p>
              <ul>
                {product.simpleDescription.options.map((option) => (
                  <li key={option} className={styles['catalog__product-option']}>
                    <span className={styles['catalog__dot-icon']}>
                      <GoDotFill />
                    </span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <Link href={product.id} className={styles['catalog__product-link']}>
                <button>Детальніше</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
