'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GoDotFill } from 'react-icons/go';

import Modal from '../Modal/Modal';
import UserDataForm from '../UserDataForm/UserDataForm';

import products from '@/data/products';
import { IsAvailable } from '@/data/types';

import styles from './Product.module.scss';

interface IProduct {
  id: string;
}

const Product = ({ id }: IProduct) => {
  const product = useMemo(() => products.find((product) => product.id === id), [id]);

  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingError, setIsFetchingError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProductData = useCallback(async () => {
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

      const fetchedProduct = fetchedProducts.find((prod) => prod.id === product?.id);
      if (fetchedProduct && product) {
        const newProduct = {
          ...product,
          oldPrice: fetchedProduct.oldPrice,
          newPrice: fetchedProduct.newPrice
        };
        setUpdatedProduct(newProduct);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsFetchingError(true);
    }
  }, [product]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  // if (isLoading || isFetchingError) {
  //   return null;
  // }

  if (!product || !updatedProduct) {
    return <div>No product found</div>;
  }

  return (
    <>
      {isModalOpen && (
        <Modal>
          <UserDataForm closeModal={closeModal} productId={product.fullDescription.title} />
        </Modal>
      )}
      <section>
        <article className={styles.product__inner}>
          <h1 className={styles.product__title}>{product.fullDescription.title}</h1>
          <div className={styles.product__content}>
            <div className={styles['product__img-container']}>
              <Image src={product.img} alt={product.fullDescription.title} priority />
              <p className={styles['product__old-price']}>
                {isLoading || isFetchingError ? 'Loading...' : updatedProduct.oldPrice}
              </p>
              <p className={styles['product__new-price']}>
                {isLoading || isFetchingError ? 'Loading...' : updatedProduct.newPrice}
              </p>
              <button className={styles['product__buy-btn']} onClick={openModal}>
                Купити
              </button>
            </div>
            <div className={styles['product__description-container']}>
              <p className={styles['product__description-primary']}>
                {product.fullDescription.descriptionPrimary.title && (
                  <span>{product.fullDescription.descriptionPrimary.title}</span>
                )}
                <span>{product.fullDescription.descriptionPrimary.content}</span>
              </p>
              <h4>{product.fullDescription.listPrimary.heading}</h4>
              <ul className={styles['product__list-primary']}>
                {product.fullDescription.listPrimary.list.map((item) => (
                  <li key={item.title}>
                    <span className={styles['dot-icon']}>
                      <GoDotFill />
                    </span>
                    <div>
                      <span className={styles['li-title']}>{item.title}</span>
                      <span> {item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              {product.fullDescription.listSecondary && (
                <>
                  <h4>{product.fullDescription.listSecondary.heading}</h4>
                  <ul className={styles['product__list-secondary']}>
                    {product.fullDescription.listSecondary.list.map((item) => (
                      <li key={item.description}>
                        <span className={styles['dot-icon']}>
                          <GoDotFill />
                        </span>
                        <div>
                          <span className={styles['li-title']}>{item.title}</span>
                          <span> {item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <p className={styles['product__description-secondary']}>
                {product.fullDescription.descriptionSecondary.title && (
                  <span>{product.fullDescription.descriptionSecondary.title}</span>
                )}
                <span>{product.fullDescription.descriptionSecondary.content}</span>
              </p>
            </div>
          </div>
          <table className={styles.product__characteristics}>
            <tbody>
              <tr>
                <td colSpan={2} className={styles['t-head']}>
                  Технічні характеристики:
                </td>
              </tr>
              {product.fullDescription.characteristicsPrimary.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className={styles['t-head']}>
                  Умови експлуатації та зберігання:
                </td>
              </tr>
              {product.fullDescription.characteristicsSecondary.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
};

export default Product;
