import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

const Button = (props) => (
  <button
    className={`pomodoro-button ${props.className}`}
    onClick={props.onClick}
  >
    <span className='text'>
      {props.label}
    </span>
    <FontAwesomeIcon icon={props.icon} />
  </button>
);

export default Button;
