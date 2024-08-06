import { theme } from '@/styles/variables';
import { formatTime } from '@/utils';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 12px 20px;
  font-weight: 700;
  font-size: 40px;
  width: max-content;
  border-radius: ${theme.borderRadius};
  color: ${theme.primaryColor};
  text-shadow: 2px 2px 2px rgb(0 0 0);
`;

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
