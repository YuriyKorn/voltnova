'use client';

import { useCallback, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

import styles from './Notification.module.scss';

const Notification = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(true);

  const closeNotification = useCallback(() => {
    setIsOpenNotification(false);
  }, []);

  if (!isOpenNotification) {
    return null;
  }

  return (
    <div className={styles.notification}>
      <span>Акція до кінця листопада! Знижка на всі товари в наявності!</span>
      <span className={styles['notification__close-btn']} onClick={closeNotification}>
        <IoCloseCircle />
      </span>
    </div>
  );
};

export default Notification;
