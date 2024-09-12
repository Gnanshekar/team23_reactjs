import React, {useState, useEffect } from 'react'


const MiniCalender = () => {
    const [date, setDate] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setyear] = useState("");

    useEffect(() => {
        const today = new Date();

        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        setDate((today.getDate() < 10 ? "0" : "") + today.getDate());
        setDay(weekDays[today.getDay()]);
        setMonth(months[today.getMonth()]);
        setyear(today.getFullYear());
    },[]);

    return (
        <div className='hero'>
            <div className='calender'>
                <div className='left'>
                    <p id='data'>{date}</p>
                </div>
                <div className='left'>
                    <p id='day'>{day}</p>
                </div>
                <div className='right'>
                    <p id='month'>{month}</p>
                </div>
                <div className='right'>
                    <p id='year'>{year}</p>
                </div>
            </div>
        </div>
    )

};

export default MiniCalender;

// *{
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins' sans-serif;
//     box-sizing: border-box;
//   }
  
//   .hero {
//     width: 100%;
//     min-height: 100vh;
//     background: linear-gradient(45deg, #1d0000, #20205d);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .calender {
//     width: 300px;
//     height: 250px;
//     background: #fff;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: 24px;
//     border-radius: 10px;
//   }
  
//   .left, .right {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 24px;
//     margin: 10px 0;
//   }
  
//   .right {
//     background: #f4351e;
//     color: #fff;
//     border-top-left-radius: 10px;
//     border-bottom-right-radius: 10px;
//   }
  
//   #date {
//     font-size: 100px;
//     line-height: 90px;
//   }
  
  