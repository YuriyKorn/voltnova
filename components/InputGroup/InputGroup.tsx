import React from 'react';

import InvalidFeedback from '../InvalidFeedback/InvalidFeedback';

import { InputGroupTypes } from '@/data/types';

import styles from './InputGroup.module.scss';

interface InputGroupProps {
  title: string;
  type: InputGroupTypes;
  placeholder: string;
  name: string;
  errors: string[] | null;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ title, type, placeholder, name, errors, onFocus }, ref) => {
    return (
      <div className={styles['input-group']}>
        <label className={styles['input-group__label']}>{title}:</label>
        <div className={styles['input-group__input-container']}>
          <input
            className={
              `${styles['input-group__input']}` +
              (errors ? ` ${styles['input-group__input_invalid']}` : ``)
            }
            type={type}
            placeholder={placeholder}
            name={name}
            ref={ref}
            autoComplete="off"
            onFocus={onFocus}
          />
        </div>
        {errors && errors.map((msg) => <InvalidFeedback key={msg} msg={msg} />)}
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
