'use client';

import { useCallback, useState } from 'react';
import { MdPhoneCallback } from 'react-icons/md';

import Modal from '../Modal/Modal';
import UserDataForm from '../UserDataForm/UserDataForm';

import styles from './Feedback.module.scss';

const Feedback = () => {
  const [isOpenFeedback, setIsOpenFeedback] = useState(false);

  const openFeedback = useCallback(() => {
    setIsOpenFeedback(true);
  }, []);

  const closeFeedback = useCallback(() => {
    setIsOpenFeedback(false);
  }, []);

  return (
    <>
      {isOpenFeedback && (
        <Modal>
          <UserDataForm closeModal={closeFeedback} />
        </Modal>
      )}
      <div className={styles.feedback} onClick={openFeedback}>
        <MdPhoneCallback />
      </div>
    </>
  );
};

export default Feedback;
