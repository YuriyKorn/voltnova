import Notification from '@/components/Notification/Notification';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import WhyUs from '@/components/WhyUs/WhyUs';
import Catalog from '@/components/Catalog/Catalog';
import HowToBuy from '@/components/HowToBuy/HowToBuy';
import Service from '@/components/Service/Service';
import Contacts from '@/components/Contacts/Contacts';

import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Notification />
      <Hero />
      <About />
      <WhyUs />
      <Catalog />
      <HowToBuy />
      <Service />
      <Contacts />
    </main>
  );
}
