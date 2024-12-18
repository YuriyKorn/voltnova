export enum InputGroupTypes {
  text = 'text',
  tel = 'tel'
}

export enum InputFieldNames {
  name = 'name',
  phone = 'phone'
}

export interface IInputErrors {
  name?: string[];
  phone?: string[];
}

export interface IInputData {
  name: string;
  phone: string;
}

export interface IUserData {
  name: string;
  phone: string;
  productId?: string;
}

export enum IsAvailable {
  'В наявності' = 'В наявності',
  'Закінчується' = 'Закінчується',
  'В дорозі' = 'В дорозі',
  'Немає в наявності' = 'Немає в наявності'
}
