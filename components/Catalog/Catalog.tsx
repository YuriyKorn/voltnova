'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

import styles from './Catalog.module.scss';

import img_adv from '@/assets/catalogSection/p_01.webp';
import products from '@/data/products';
import Modal from '../Modal/Modal';
import UserDataForm from '../UserDataForm/UserDataForm';
import { IsAvailable } from '@/data/types';

const advantages: string[] = [
  'Доступна вартість',
  'Висока якість продукції',
  'Передпродажна перевірка',
  'Гнучкі умови для гуртовиків',
  'Індивідуальна ціна на великі замовлення'
];

const Catalog = () => {
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingError, setIsFetchingError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedProductId, setClickedProductId] = useState('');

  const fetchProductsData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://exchange-currencies-obolon.firebaseio.com/battery.json',
        { cache: 'no-cache' }
      );
      if (response.status !== 200) {
        return setIsFetchingError(true);
      }

      const data = await response.json();
      console.log(data);
      const fetchedProducts = Object.values(data.products) as {
        oldPrice: string;
        newPrice: string;
        id: string;
        availability: IsAvailable;
      }[];

      const newProducts = [...products];

      for (const product of newProducts) {
        const fetchedProduct = fetchedProducts.find((prod) => prod.id === product.id);
        if (fetchedProduct) {
          product.oldPrice = fetchedProduct.oldPrice;
          product.newPrice = fetchedProduct.newPrice;
          product.simpleDescription.isAvailable = fetchedProduct.availability;
        }
      }
      setUpdatedProducts(newProducts);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsFetchingError(true);
    }
  }, []);

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

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  // if (isLoading || isFetchingError) {
  //   return <div>Loading...</div>;
  // }

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
          {updatedProducts.map((product) => (
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
              <>
                <p className={styles['catalog__old-price']}>
                  {isLoading || isFetchingError ? 'Loading...' : product.oldPrice}
                </p>
                <p className={styles['catalog__new-price']}>
                  {isLoading || isFetchingError ? 'Loading...' : product.newPrice}
                </p>
              </>
              <p
                className={
                  styles['catalog__product-is-available'] +
                  (product.simpleDescription.isAvailable === IsAvailable['В наявності'] ||
                  product.simpleDescription.isAvailable === IsAvailable.Закінчується
                    ? ` ${styles['catalog__product-is-available_available']}`
                    : ` ${styles['catalog__product-is-available_unavailable']}`)
                }
              >
                {isLoading || isFetchingError
                  ? 'Loading...'
                  : product.simpleDescription.isAvailable}
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
