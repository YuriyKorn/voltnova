import Product from '@/components/Product/Product';
import styles from './page.module.scss';

export default function ProductPage({ params }: { params: { product_id: string } }) {
  return (
    <main className={styles.main}>
      <Product id={params.product_id} />
    </main>
  );
}
