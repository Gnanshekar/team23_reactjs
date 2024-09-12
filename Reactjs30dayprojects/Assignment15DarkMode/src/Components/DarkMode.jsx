// ThemeToggle.js
import React, { useState, useEffect } from 'react';


const DarkModeTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="theme-toggle-container">
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default DarkModeTheme;

// body {
//   background-color: #ffffff;
//   color: #000000;
//   transition: background-color 0.3s, color 0.3s;
// }

// .theme-toggle-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// }

// button {
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
// }


// body.dark-mode {
//   background-color: #121212;
//   color: #ffffff;
// }



