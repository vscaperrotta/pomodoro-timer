import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

const Button = (props) => (
  <button
    className={`pomodoro-button ${props.icon && 'hasIcon'} ${props.secondary && 'secondary'} ${props.className}`}
    onClick={props.onClick}
  >
    {props.label ? (
      <span className='label'>
        {props.label}
      </span>
    ) : null}
    {props.icon ? (
      <FontAwesomeIcon icon={props.icon} />
    ) : null}
  </button>
);

export default Button;
