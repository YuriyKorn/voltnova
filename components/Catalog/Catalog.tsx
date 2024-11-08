'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

import styles from './Catalog.module.scss';

import img_adv from '@/assets/catalogSection/p_01.webp';
import products from '@/data/products';
import Modal from '../Modal/Modal';
import UserDataForm from '../UserDataForm/UserDataForm';

const advantages: string[] = [
  'Доступна вартість',
  'Висока якість продукції',
  'Передпродажна перевірка',
  'Гнучкі умови для гуртовиків',
  'Індивідуальна ціна на великі замовлення'
];

const Catalog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedProductId, setClickedProductId] = useState('');

  const openModal = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const productId = e.currentTarget.getAttribute('data-id');
    if (!productId) {
      return;
    }
    setClickedProductId(productId);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
              <Link href={product.id}>
                <h4 className={styles['catalog__product-title']}>
                  {product.simpleDescription.title}
                </h4>
              </Link>
              <div className={styles['catalog__product-img-container']}>
                <Link href={product.id}>
                  <Image src={product.img} alt={product.simpleDescription.title} priority />
                </Link>
              </div>
              <p className={styles['catalog__old-price']}>{product.oldPrice}</p>
              <p className={styles['catalog__new-price']}>{product.newPrice}</p>
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
              <button
                className={styles['catalog__buy-btn']}
                data-id={product.id}
                onClick={openModal}
              >
                Купити
              </button>
              {isModalOpen && clickedProductId === product.id && (
                <Modal>
                  <UserDataForm closeModal={closeModal} productId={product.fullDescription.title} />
                </Modal>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
