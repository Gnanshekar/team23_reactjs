import React, { useState } from 'react';

const PasswordHide = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div className="Input-box">
            <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                id="password"
            />
            <img
                src={isPasswordVisible ? "./eyeopen.jpg" : "./eyeclose.jpg"}
                alt="Toggle Password Visibility"
                id="eyeicon"
                onClick={togglePasswordVisibility}
            />
        </div>
    );
};

export default PasswordHide;

// body {
//     background: #250057;
//   }
  
//   .Input-box {
//     background: #fff;
//     width: 90%;
//     max-width: 500px;
//     border-radius: 5px;
//     padding: 10px 20px;
//     margin: 300px auto;
//     display: flex;
//     align-items: center;
//   }
  
//   .Input-box input {
//     width: 100%;
//     padding: 10px 0;
//     border: 0;
//     outline: 0;
//     font-size: 24px;
//     color: #555;
//   }
  
//   .Input-box img {
//     width: 35px;
//     cursor: pointer;
//   }
  
  
  
