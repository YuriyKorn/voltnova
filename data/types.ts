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
