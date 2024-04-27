import React from 'react';
import './Anchor.scss';

const Anchor = (props) => (
  <a
    className='pomodoro-link'
    href={props.href}
    target='_blank'
    rel="noreferrer"
    onClick={props.onClick}
  >
    {props.label}
  </a>
);

export default Anchor;
