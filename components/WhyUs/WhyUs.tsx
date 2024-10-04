import styles from './WhyUs.module.scss';

import img_01 from '@/assets/whyUsSection/img01.svg';
import img_02 from '@/assets/whyUsSection/img02.svg';
import img_03 from '@/assets/whyUsSection/img03.svg';
import Image from 'next/image';

const cards: { img: string; title: string; description: string }[] = [
  {
    img: img_01,
    title: 'Безпечно',
    description:
      'Ми використовуємо лише безпечні LiFePo4 акумуляторні батареї таких провідних виробників як CATL, EVE, CALB.'
  },
  {
    img: img_02,
    title: 'Якісно',
    description:
      'Більшість процесів виготовлення та збірки повністю автоматизовані. Фактор людського втручання зведений до мінімуму.'
  },
  {
    img: img_03,
    title: 'Оптимально',
    description:
      'Проаналізувавши існуючі потреби та майбутні тенденції, ми створили оптимальні рішення для більшості побутових споживачів.'
  }
];

const WhyUs = () => {
  return (
    <section className={styles['why-us']}>
      <div className={styles['why-us__inner']}>
        <h4 className={styles['why-us__heading']}>- Чому ми? -</h4>
        <ul className={styles['why-us__cards']}>
          {cards.map((card) => (
            <li key={card.title} className={styles['why-us__card']}>
              <div className={styles['why-us__image-container']}>
                <Image src={card.img} alt={card.title} priority />
              </div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
