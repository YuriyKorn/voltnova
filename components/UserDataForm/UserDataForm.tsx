import { useCallback, useRef, useState } from 'react';
import cloneDeep from 'clone-deep';
import { IoClose } from 'react-icons/io5';

import Spinner from '../Spinner/Spinner';
import InputGroup from '../InputGroup/InputGroup';

import { IInputData, IInputErrors, InputFieldNames, InputGroupTypes } from '@/data/types';
import { userDataValidation } from '@/utils/ts/validation';

import styles from './UserDataForm.module.scss';

interface IUserDataFormProps {
  closeModal: () => void;
  productId?: string;
}

const UserDataForm = ({ closeModal, productId }: IUserDataFormProps) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  const [inputErrors, setInputErrors] = useState<IInputErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSomethingWentWrong, setIsSomethingWentWrong] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const focusInput = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const newErrors = cloneDeep(inputErrors);
      const fieldName = e.target.name as InputFieldNames;
      delete newErrors[fieldName];
      setInputErrors(newErrors);
    },
    [inputErrors]
  );

  const submitData = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!nameInput.current || !phoneInput.current) {
        return new Error('no inputs');
      }

      console.log('nameInput: ', nameInput.current.value);
      console.log('phoneInput: ', phoneInput.current.value);

      const inputData: IInputData & { productId?: string } = {
        name: nameInput.current.value.toLowerCase().trim(),
        phone: phoneInput.current.value.trim(),
        productId: productId
      };

      const userInputErrors = userDataValidation(inputData);
      console.log('userInputErrors: ', userInputErrors);
      if (userInputErrors) {
        return setInputErrors(userInputErrors);
      }

      setIsLoading(true);

      try {
        const response = await fetch('/api/send-user-data', {
          method: 'POST',
          body: JSON.stringify(inputData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response);

        if (response.status === 200) {
          setIsLoading(false);
          return setIsSuccess(true);
        }

        if (response.status === 422) {
          const data = (await response.json()) as { inputErrors: IInputErrors };
          setInputErrors(data.inputErrors);
          setIsLoading(false);
          return;
        }

        if (response.status !== 200) {
          setIsLoading(false);
          return setIsSomethingWentWrong(true);
        }
      } catch (error) {
        console.log('error: ', error);
        setIsSomethingWentWrong(true);
        setIsLoading(false);
        return;
      }
    },
    [productId]
  );

  return (
    <>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {isSomethingWentWrong && (
        <div className={styles['modal-message-container']}>
          <p>{`Щось пішло не так.
Спробуйте ще раз.`}</p>
          <button onClick={closeModal}>ok</button>
        </div>
      )}
      {isSuccess && (
        <div className={styles['modal-message-container']}>
          {productId && <p>Дякуємо за ваше замовлення!</p>}
          <p>
            Ми зв'яжемося з Вами у найближчий робочий час (Пн-Пт: 09:30-20:30, Сб-Нд: 10:00-19:00)
          </p>
          <button onClick={closeModal}>ok</button>
        </div>
      )}
      {!isLoading && !isSomethingWentWrong && !isSuccess && (
        <form className={styles.form} onSubmit={submitData} noValidate>
          <div className={styles['form__close-btn']}>
            <IoClose onClick={closeModal} />
          </div>
          <p className={styles.form__title}>Залиште дані для зворотного зв'язку</p>
          <InputGroup
            title="Ім'я"
            type={InputGroupTypes.text}
            placeholder="Ім'я"
            name={InputFieldNames.name}
            errors={inputErrors.name ? inputErrors.name : null}
            ref={nameInput}
            onFocus={focusInput}
          />
          <InputGroup
            title="Телефон"
            type={InputGroupTypes.tel}
            placeholder="Телефон"
            name={InputFieldNames.phone}
            errors={inputErrors.phone ? inputErrors.phone : null}
            ref={phoneInput}
            onFocus={focusInput}
          />
          <button type="submit" className={styles['form__submit-btn']}>
            {productId ? 'Підтвердити замовлення' : "Зв'яжіться зі мною"}
          </button>
        </form>
      )}
    </>
  );
};

export default UserDataForm;
