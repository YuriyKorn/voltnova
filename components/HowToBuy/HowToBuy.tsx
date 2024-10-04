import styles from './HowToBuy.module.scss';

const steps: { step: string; title: string; description: string }[] = [
  {
    step: '01.',
    title: 'Ви замовляєте',
    description:
      'Зробіть замовлення у зручний для Вас спосіб: на сайті, по телефону, через месенджер'
  },
  {
    step: '02.',
    title: 'Ми підготуємо',
    description:
      "Ми зв'язуємося з Вами для підтвердження замовлення і підготуємо обладнання, яке буде відправлено саме Вам"
  },
  {
    step: '03.',
    title: 'Ви оплачуєте',
    description:
      'Ви оплачуєте замовлення у зручний для Вас спосіб: онлайн, готівкою при отриманні, банківським переказом, криптовалютою'
  },
  {
    step: '04.',
    title: 'Ми доставляємо',
    description:
      "Ми відправляємо Ваше замовлення обраним способом. Наразі доступні: самовивіз, кур'єрська доставка або відправка перевізниками"
  }
];

const HowToBuy = () => {
  return (
    <section className={styles['how-to-buy']} id="steps">
      <div className={styles['how-to-buy__inner']}>
        <h2 className={styles['how-to-buy__heading']}>- Як придбати? -</h2>
        <ul className={styles['how-to-buy__steps']}>
          {steps.map((step) => (
            <li key={step.title} className={styles['how-to-buy__step']}>
              <h4 className={styles['how-to-buy__step-number']}>{step.step}</h4>
              <h5 className={styles['how-to-buy__step-title']}>{step.title}</h5>
              <p className={styles['how-to-buy__step-description']}>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowToBuy;
