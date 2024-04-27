import React from 'react';
import './Input.scss';

const Input = (props) => (
  <input
    type={props.type}
    min={props.min}
    className='pomodoro-input'
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
);

export default Input;
