'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

import { useNotificationContext } from '@/app/contex/notificationContex';

import styles from './Notification.module.scss';

const Notification = () => {
  const { isNotificationOpen, closeNotification } = useNotificationContext();

  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingError, setIsFetchingError] = useState(false);

  const fetchNotificationData = useCallback(async () => {
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

      if (data.notification.isShown && data.notification.text) {
        setNotificationText(data.notification.text);
        setIsNotificationShown(true);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsFetchingError(true);
    }
  }, []);

  useEffect(() => {
    fetchNotificationData();
  }, [fetchNotificationData]);

  if (!isNotificationShown) {
    return null;
  }

  if (!isNotificationOpen) {
    return null;
  }

  if (isLoading || isFetchingError) {
    return null;
  }

  return (
    <div className={styles.notification}>
      <span>{notificationText}</span>
      <span className={styles['notification__close-btn']} onClick={closeNotification}>
        <IoCloseCircle />
      </span>
    </div>
  );
};

export default Notification;
