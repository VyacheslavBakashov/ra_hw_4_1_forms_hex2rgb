import { FC, ChangeEventHandler, useState } from 'react';
import { checkColorHex } from '../utilites';
import React from 'react';

export const ColorConverter: FC = () => {
  const [value, setValue] = useState('#ffffff');

  const onChangeColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="converter-color" style={{ backgroundColor: checkColorHex(value) }}>
      <form className="converter-color__form">
        <input className="converter-color__form-input" onChange={onChangeColor} value={value} maxLength={7} />
        <p className="converter-color__form-rgb">{checkColorHex(value)}</p>
      </form>
    </div>
  );
};
