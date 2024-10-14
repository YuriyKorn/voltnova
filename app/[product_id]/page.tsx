import styles from './page.module.scss';

export default function ProductPage({ params }: { params: { product_id: string } }) {
  return <main className={styles.product}>Product: {params.product_id}</main>;
}
