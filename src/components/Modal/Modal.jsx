import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Modal.scss';

const Modal = (props) => (
  <>
    <div className={`pomodoro-modal-background ${props.className}`} />
    <div className={`pomodoro-modal ${props.className}`}>
      <button className='close-button' onClick={props.onClose}>
        <FontAwesomeIcon icon={faX} />
      </button>
      <p className="text">
        Here you can set a custom time.
      </p>
      <div className='content'>
        <Input
          onChange={props.inputOnChange}
          type="number"
          min="1"
          placeholder={0}
        />
        <Button
          secondary
          label='CONFIRM'
          onClick={props.buttonOnClick}
        />
      </div>
    </div>
  </>
);

export default Modal;
