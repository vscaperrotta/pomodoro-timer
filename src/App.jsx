import React, { useState, useEffect } from 'react';
import { faPlay, faPause, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/Button';
import Anchor from './components/Anchor/Anchor';
import ringtone from './assets/audio/ringtone-126505.mp3';
import './styles/main.scss';
import './App.scss';

const ONE_SECOND = 1000;
const POMODORO_TIME = 25 * 60;

function PomodoroTimer() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const alarmSound = new Audio(ringtone);

  useEffect(() => {
    if (!isActive || startTime === null) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - startTime) / ONE_SECOND);
      setElapsedTime(elapsedSeconds);

      if (elapsedSeconds >= POMODORO_TIME) {
        setIsActive(false);
        alarmSound.play();
        setTimeout(() => {
          resetTimer()
        }, 5000);
      }
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, [isActive, startTime, alarmSound]);

  const startTimer = () => {
    setIsActive(true);
    if (startTime === null) {
      setStartTime(Date.now() - elapsedTime * ONE_SECOND);
    }
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setStartTime(null);
    setElapsedTime(0);
    alarmSound.pause();
    alarmSound.currentTime = 0;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const timeLeft = POMODORO_TIME - elapsedTime;

  return (
    <div className={`pomodoro-app ${isActive ? 'active' : ''}`}>
      <main className="pomodoro-header">
        <div className={`pomodoro-timer ${isActive ? 'active' : ''}`}>
          <h1 className='pomodoro-time'>{formatTime(timeLeft)}</h1>
          <div className='pomodoro-actions'>
            <Button
              className={isActive ? 'stop' : 'start'}
              label={isActive ? 'STOP' : 'START'}
              onClick={isActive ? stopTimer : startTimer}
              icon={isActive ? faPause : faPlay}
            />
            <Button
              className='reset'
              label='RESET'
              onClick={resetTimer}
              icon={faArrowRotateLeft}
            />
          </div>
        </div>
      </main>
      <footer className='pomodoro-footer'>
        <p className='pomodoro-text'>
          <Anchor
            href='https://github.com/vscaperrotta/pomodoro-timer/tree/master'
            label='GitHub Repository' /> | Sound Effect by <Anchor
            href='https://pixabay.com/it/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=126505'
            label='UNIVERSFIELD' /> from <Anchor
            href='https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=126505'
            label='Pixabay' />
        </p>
      </footer>
    </div>
  );
}

export default PomodoroTimer;
