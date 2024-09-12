import React, { useState } from 'react';


const PasswordStrengthIndicator = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [borderColor, setBorderColor] = useState('#ccc');
    const [messageColor, setMessageColor] = useState('#fff');

    const handlePasswordChange = (e) => {
        const pass = e.target.value;
        setPassword(pass);

        if (pass.length > 0) {
            if (pass.length < 4) {
                setStrength('weak');
                setBorderColor('#ff5925');
                setMessageColor('#ff5925');
            } else if (pass.length >= 4 && pass.length < 8) {
                setStrength('medium');
                setBorderColor('yellow');
                setMessageColor('yellow');
            } else if (pass.length >= 8) {
                setStrength('strong');
                setBorderColor('#26d720');
                setMessageColor('#26d720');
            }
        } else {
            setStrength('');
            setBorderColor('#ccc');
            setMessageColor('#fff');
        }
    };

    return (
        <div className="container">
            <div className="input-box">
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    style={{ borderColor }}
                />
                <button type="submit">
                    <img src="./arrow.png" alt="Submit" />
                </button>
                {password.length > 0 && (
                    <p id="message" style={{ color: messageColor }}>
                        Password is <span id="strength">{strength}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default PasswordStrengthIndicator;

// * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
//   }
  
//   .container {
//     height: 100vh;
//     width: 100%;
//     background: #201f21;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .input-box {
//     width: 400px;
//     max-width: 90%;
//     position: relative;
//   }
  
//   .input-box input {
//     width: 100%;
//     height: 60px;
//     padding: 0 20px;
//     border: 1px solid #ccc;
//     outline: none;
//     color: #fff;
//     background: transparent;
//   }
  
//   button {
//     background: transparent;
//     border: 0;
//     outline: none;
//     border-radius: 50%;
//     cursor: pointer;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     right: 15px;
//   }
  
//   button img {
//     width: 35px;
//   }
  
//   #message {
//     position: absolute;
//     bottom: -30px;
//     color: #fff;
//     font-size: 15px;
//   }
  
//   ::placeholder {
//     font-size: 15px;
//   }
  
  
