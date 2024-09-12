import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const length = 12;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+{}:\"<>?-=[];',./";

    const createPassword = () => {
        let newPassword = "";
        newPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        newPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        newPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));

        while (length > newPassword.length) {
            const randomType = Math.floor(Math.random() * 4);
            switch (randomType) {
                case 0:
                    newPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
                    break;
                case 1:
                    newPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
                    break;
                case 2:
                    newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    break;
                case 3:
                    newPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
                    break;
                default:
                    break;
            }
        }

        setPassword(newPassword);
    };

    const copyPassword = () => {
        navigator.clipboard.writeText(password)
            .then(() => alert('Password copied to clipboard!'))
            .catch(err => console.error('Failed to copy password: ', err));
    };

    return (
        <div className="container">
            <h1>Generate a <br /><span>Random Password</span></h1>
            <div className="display">
                <input type="text" value={password} readOnly placeholder="Password" />
                <img 
                    src="path/to/copy-icon.png" // Update with the actual path to your copy icon
                    alt="Copy Password"
                    onClick={copyPassword}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <button onClick={createPassword}>Generate Password</button>
        </div>
    );
};

export default PasswordGenerator;

// * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
//   }
  
//   body {
//     background: #002339;
//     color: #fff;
//   }
  
//   .container {
//     margin: 12%;
//     width: 90%;
//     max-width: 700px;
//   }
  
//   .display {
//     width: 100%;
//     margin-top: 50px;
//     margin-bottom: 30px;
//     background: #fff;
//     color: #333;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 26px 20px;
//     border-radius: 5px;
//   }
  
//   .container h1 {
//     font-weight: 500;
//     font-size: 45px;
//   }
  
//   .container h1 span {
//     color: #019f55;
//     border-bottom: 4px solid #019f55;
//     padding-bottom: 7px;
//   }
  
//   .display img {
//     width: 30px;
//     cursor: pointer;
//   }
  
//   .display input {
//     border: 0;
//     outline: 0;
//     font-size: 24px;
//   }
  
//   .container button {
//     border: 0;
//     background: #019f55;
//     color: #fff;
//     font-size: 22px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 16px 26px;
//     border-radius: 5px;
//     cursor: pointer;
//   }
  
  
  
