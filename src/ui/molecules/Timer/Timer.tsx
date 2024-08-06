import { formatTime } from '@/utils';
import { useEffect, useState } from 'react';
import { Container } from './TimerStyle';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => setSeconds((prev) => prev + 1), 10);
      setIntervalId(id);
      return () => clearInterval(id);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
  }, [isRunning]);

  // const startTimer = () => setIsRunning(true);
  // const stopTimer = () => setIsRunning(false);

  return <Container>{formatTime(seconds)}</Container>;
};

export default Timer;
