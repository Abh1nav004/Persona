// client/src/components/CircularTimer.jsx
import React, { useState, useEffect } from 'react';

function CircularTimer({ duration, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let timerInterval;

    if (timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
      if (onComplete) {
        onComplete();
      }
    }

    return () => clearInterval(timerInterval); // Clean up on unmount or duration change
  }, [timeLeft, duration, onComplete]);

  const calculateProgress = () => {
    return (timeLeft / duration) * 100;
  };

  const formattedTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
        {formattedTime()}
      </div>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#e0e0e0" // Gray background
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#f43f5e" // Pink progress
          strokeWidth="10"
          fill="none"
          style={{
            strokeDasharray: `${calculateProgress()} 282.74`, // 282.74 is the circumference
            strokeDashoffset: 282.74 - (calculateProgress() / 100) * 282.74,
            transition: 'stroke-dashoffset 1s linear', // Smooth transition
          }}
        />
      </svg>
    </div>
  );
}

export default CircularTimer;