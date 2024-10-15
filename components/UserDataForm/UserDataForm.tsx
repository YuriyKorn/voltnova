import { useCallback, useRef, useState } from 'react';
import cloneDeep from 'clone-deep';

import InputGroup from '../InputGroup/InputGroup';

import { IInputErrors, InputFieldNames, InputGroupTypes } from '@/data/types';

import styles from './UserDataForm.module.scss';

const UserDataForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  const [inputErrors, setInputErrors] = useState<IInputErrors>({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isSomethingWentWrong, setIsSomethingWentWrong] = useState(false);

  const focusInput = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const newErrors = cloneDeep(inputErrors);
      const fieldName = e.target.name as InputFieldNames;
      delete newErrors[fieldName];
      setInputErrors(newErrors);
    },
    [inputErrors]
  );

  const submitData = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('nameInput: ', nameInput.current?.value);
    console.log('phoneInput: ', phoneInput.current?.value);

    // if (!emailInput.current || !passwordInput.current) {
    //   return new Error('no inputs');
    // }

    // const loginData: ILoginInputData = {
    //   email: emailInput.current.value.toLowerCase().trim(),
    //   password: passwordInput.current.value.trim()
    // };

    // const loginInputErrors = loginValidation(loginData);
    // console.log('loginInputErrors: ', loginInputErrors);
    // if (loginInputErrors) {
    //   return setInputErrors(loginInputErrors);
    // }

    // setIsLoading(true);
    // try {
    //   const result = await signIn('credentials', {
    //     redirect: false,
    //     email: loginData.email,
    //     password: loginData.password
    //   });
    //   console.log('loginResult: ', result);

    //   if (!result) {
    //     setIsSomethingWentWrong(true);
    //     setIsLoading(false);
    //     return;
    //   }

    //   if (result.error) {
    //     switch (result.error as LoginInputErrorTypes) {
    //       case LoginInputErrorTypes.db: {
    //         setIsSomethingWentWrong(true);
    //         setIsLoading(false);
    //         return;
    //       }
    //       case LoginInputErrorTypes.email: {
    //         const error: ILoginInputErrors = {
    //           email: ['такого пользователя не существует']
    //         };
    //         setInputErrors(error);
    //         setIsLoading(false);
    //         return;
    //       }
    //       case LoginInputErrorTypes.password: {
    //         const error: ILoginInputErrors = {
    //           password: ['неправильный пароль']
    //         };
    //         setInputErrors(error);
    //         setIsLoading(false);
    //         return;
    //       }

    //       default:
    //         setIsSomethingWentWrong(true);
    //         setIsLoading(false);
    //         return;
    //     }
    //   }

    //   router.replace(`/`);
    // } catch (error) {
    //   console.log('error: ', error);
    //   setIsSomethingWentWrong(true);
    //   setIsLoading(false);
    //   return;
    // }
  }, []);

  return (
    <>
      <form className={styles.form} onSubmit={submitData} noValidate>
        <InputGroup
          title="Ім'я"
          type={InputGroupTypes.text}
          placeholder="Ім'я"
          name={InputFieldNames.name}
          errors={null}
          ref={nameInput}
          onFocus={focusInput}
        />
        <InputGroup
          title="Телефон"
          type={InputGroupTypes.tel}
          placeholder="Телефон"
          name={InputFieldNames.phone}
          errors={null}
          ref={phoneInput}
          onFocus={focusInput}
        />
        <button type="submit" className={styles['form__submit-btn']}>
          Підтвердити замовлення
        </button>
      </form>
    </>
  );
};

export default UserDataForm;
