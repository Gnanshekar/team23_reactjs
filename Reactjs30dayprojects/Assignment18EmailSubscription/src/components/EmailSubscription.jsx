
import React, { useState } from 'react';
import background from './background.png'


const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwfXRPRujAL_y6Yeipk6GAjHBhB251RBzlUnPul6DucboWZ6lG2_HEEiX2dHse3R7jdig/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div className="hero">
      <h3>Coming Soon!</h3>
      <h1>OurBrand New <br /> Website is on its Way</h1>
      <p>Subscribe for more details.</p>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <input
          type="email"
          name="Email"
          placeholder="Your email Id"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          <img src="./send-icon.png" alt="Send Icon" />
        </button>
      </form>
      <span id="msg">{message}</span>
    </div>
  );
};

export default EmailSubscription;

// * {
//   margin: 0;
//   padding: 0;
//   font-family: 'Poppins', sans-serif;
//   box-sizing: border-box;
// }

// .hero {
//   width: 100%;
//   height: 100vh;
  
//   background-size: cover;
//   background-position: center;
//   padding: 10px 10px;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }

// .hero h3 {
//   margin-top: 30px;
//   font-weight: 400;
//   font-size: 30px;
// }

// .hero h1 {
//   margin-top: 30px;
//   font-size: 50px;
// }

// .hero p {
//   margin: 10px 0 50px;
//   font-size: 20px;
// }

// form {
//   display: flex;
// }

// form input {
//   border: 0;
//   outline: none;
//   padding: 10px 20px;
//   height: 70px;
//   width: 300px;
//   font-size: 16px;
//   border-radius: 5px 0 0 5px;
// }

// form button {
//   background: #61b752;
//   border: none;
//   outline: none;
//   height: 70px;
//   width: 70px;
//   cursor: pointer;
//   border-radius: 0 5px 5px 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// form button img {
//   width: 30px;
// }

// span {
//   color: #61b752;
//   margin-top: 10px;
//   display: block;
// }



