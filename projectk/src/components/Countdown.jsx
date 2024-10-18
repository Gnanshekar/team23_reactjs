// Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds <= 0) return;

        const timerId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [seconds]);

    return (
        <div className="countdown">
            <h2>Countdown Timer</h2>
            <div className="countdown-timer">
                {seconds > 0 ? (
                    <h2>{seconds} seconds remaining</h2>
                ) : (
                    <h2>Time's up!</h2>
                )}
            </div>
        </div>
    );
};

export default Countdown;
