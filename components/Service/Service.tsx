import Image, { StaticImageData } from 'next/image';

import styles from './Service.module.scss';

import img_01 from '@/assets/serviceSection/serv_01.webp';
import img_02 from '@/assets/serviceSection/serv_02.webp';
import img_03 from '@/assets/serviceSection/serv_03.webp';
import img_04 from '@/assets/serviceSection/product-return.png';

const services: { img: StaticImageData; title: string; description: string }[] = [
  {
    img: img_01,
    title: 'Встановлення',
    description:
      'Наші кваліфіковані фахівці професійно встановлять обладнання та підключать резервне живлення у вашій домівці чи офісі.'
  },
  {
    img: img_02,
    title: 'Гарантія',
    description:
      'Стандартна гарантія на нашу продукцію складає 1 рік. На певні категорії товарів діє гарантійний термін 3 роки. Розширена гарантія має збільшений строк до 5 років.'
  },
  {
    img: img_03,
    title: 'Післягарантійне обслуговування',
    description:
      'За умов правильної експлуатації, у більшості випадків, строк служби продукції може бути значно більшим, ніж обумовлений технічними характеристиками. Власний сервісний відділ має змогу надати повний спектр післягарантійного обслуговування.'
  },
  {
    img: img_04,
    title: 'Повернення та обмін протягом 14 днів',
    description:
      'Ви маєте можливість обміняти або повернути придбаний товар протягом 14 днів з дня покупки за умови збереження товарного вигляду та відсутності слідів експлуатації та/або втручання.'
  }
];

const Service = () => {
  return (
    <section className={styles.service} id="services">
      <div className={styles.service__inner}>
        <h2 className={styles.service__heading}>- Сервіс -</h2>
        <ul>
          {services.map((service) => (
            <li key={service.title} className={styles.service__item}>
              <div>
                <h4 className={styles['service__item-heading']}>{service.title}</h4>
                <p className={styles['service__item-description']}>{service.description}</p>
              </div>
              <div className={styles['service__img-container']}>
                <Image src={service.img} alt={service.title} priority />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
