import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState({
        hrs: '00',
        mins: '00',
        sec: '00'
    });

    useEffect(() => {
        const upDateClock = () => {
            const currentTime = new Date();
            const hours = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
            const minutes = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
            const seconds = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();

            setTime({
                hrs: hours,
                mins: minutes,
                sec: seconds
            });
        };

        upDateClock(); 
        const intervalId = setInterval(upDateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="hero">
            <div className="container">
                <div className="clock">
                    <span id='hrs'>{time.hrs}</span>
                    <span>:</span>
                    <span id='mins'>{time.mins}</span>
                    <span>:</span>
                    <span id='sec'>{time.sec}</span>
                </div>
            </div>
        </div>
    );
}

export default DigitalClock;
