import { IInputData, IInputErrors } from '@/data/types';

export const userDataValidation = (inputData: IInputData): IInputErrors | undefined => {
  const inputErrors: IInputErrors = {};

  const { name, phone } = inputData;

  if (name.trim().length < 1 || name.trim().length > 40) {
    const errorMsg = 'від 1 до 40 символів';
    inputErrors.name = inputErrors.name ? [...inputErrors.name, errorMsg] : [errorMsg];
  }

  if (phone.trim().length < 10 || name.trim().length > 40) {
    const errorMsg = 'від 10 до 40 символів';
    inputErrors.phone = inputErrors.phone ? [...inputErrors.phone, errorMsg] : [errorMsg];
  }

  if (Object.keys(inputErrors).length > 0) {
    return inputErrors;
  }
};
