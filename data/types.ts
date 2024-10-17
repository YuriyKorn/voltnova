export enum InputGroupTypes {
  text = 'text',
  tel = 'number'
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
