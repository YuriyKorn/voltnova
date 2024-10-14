import Image, { StaticImageData } from 'next/image';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

import styles from './Catalog.module.scss';

import img_adv from '@/assets/catalogSection/p_01.webp';
import img_pr_01 from '@/assets/catalogSection/prod_01.webp';
import img_pr_02 from '@/assets/catalogSection/prod_02.webp';
import img_pr_03 from '@/assets/catalogSection/prod_03.webp';
import Link from 'next/link';

const advantages: string[] = [
  'Доступна вартість',
  'Висока якість продукції',
  'Передпродажна перевірка',
  'Гнучкі умови для гуртовиків',
  'Індивідуальна ціна на великі замовлення'
];

const products: {
  title: string;
  img: StaticImageData;
  options: string[];
  isAvailable: boolean;
  url: string;
}[] = [
  {
    title: `Акумуляторна система
48-100Ah`,
    img: img_pr_01,
    options: [
      '51.2 (48) вольт 100 Ампер',
      'Ємність 5.12 кВт',
      'Строк служби >6000 циклів',
      'до 16 батарей паралельно',
      'вага 45 кг'
    ],
    isAvailable: true,
    url: 'prod_001'
  },
  {
    title: `Акумуляторна система
48-200Ah`,
    img: img_pr_02,
    options: [
      '51.2 (48) вольт 200 Ампер',
      'Ємність 10.24 кВт',
      'Строк служби >6000 циклів',
      'до 16 батарей паралельно',
      'вага 91 кг'
    ],
    isAvailable: true,
    url: 'prod_002'
  },
  {
    title: `Інвертор гібридний
48-5500W`,
    img: img_pr_03,
    options: [
      'гібридний МРРТ інвертор',
      '48V DC / 230V AC',
      'потужність 5500 Watt',
      'чиста синусоїда',
      'вага 11 кг'
    ],
    isAvailable: true,
    url: 'prod_003'
  }
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
            <li key={product.title} className={styles.catalog__product}>
              <h4 className={styles['catalog__product-title']}>
                <pre>{product.title}</pre>
              </h4>
              <div className={styles['catalog__product-img-container']}>
                <Image src={product.img} alt={product.title} priority />
              </div>
              <p
                className={
                  styles['catalog__product-is-available'] +
                  (product.isAvailable
                    ? ` ${styles['catalog__product-is-available_available']}`
                    : ` ${styles['catalog__product-is-available_unavailable']}`)
                }
              >
                {product.isAvailable ? 'В наявності' : 'Немає в наявності'}
              </p>
              <ul>
                {product.options.map((option) => (
                  <li key={option} className={styles['catalog__product-option']}>
                    <span className={styles['catalog__dot-icon']}>
                      <GoDotFill />
                    </span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <Link href={product.url} className={styles['catalog__product-link']}>
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
