import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IoClose } from 'react-icons/io5';

import styles from './Modal.module.scss';

interface IModalProps {
  isWithOkBtn?: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ isWithOkBtn, closeModal, children }: IModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    setMounted(true);
    return () => {
      document.documentElement.style.overflow = '';
      setMounted(false);
    };
  }, []);

  return mounted
    ? createPortal(
        <div className={styles.modal}>
          <div className={styles['modal__content-container']}>
            <div className={styles['modal__close-btn']} onClick={closeModal}>
              <IoClose />
            </div>
            {children}
          </div>
          {isWithOkBtn && (
            <button className={styles['modal__ok-btn']} onClick={closeModal}>
              Ok
            </button>
          )}
        </div>,
        document.body
      )
    : null;
};

export default Modal;
