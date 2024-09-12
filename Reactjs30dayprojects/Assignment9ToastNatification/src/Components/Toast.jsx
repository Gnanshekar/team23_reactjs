import React, {Component, useState} from 'react';

const ToastNotification = () => {
  const [toasts, setToasts] = useState([]);

  const successmgs = "Successfully Upadated";
  const errormgs = "Please fix the error";
  const invaild = "Check Invaild and fix the issue";

  const showToast = (msg) => {
    const newToast = {
      id: Date.now(),
      content: msg,
      type: msg.includes('error') ? 'error' : msg.includes("Invaild") ? "Invaild" : "success",
    }
    setToasts((prevToast) => [...prevToast, newToast]);

    setTimeout(() => {
      setToasts((prevToast) => prevToast.filter((toast) => toast.id !== newToast.id));
    }, 6000)
  };

  return <div>
    <div className='buttons'> 
      <button onClick={() => {showToast(successmgs)}}>Success</button>
      <button onClick={() => {showToast(errormgs)}}>Error</button>
      <button onClick={() => {showToast(invaild)}}>Invalid</button>
    </div>

    <div id='toastBox'>
      {toasts.map((toast) => (<div key={toast.id} className={'toast &{toast.type}'}>{toast.content}</div>))}
    </div>
  </div>
}

export default ToastNotification;

// .buttons {
//   display: flex;
//   gap: 10px;
//   margin: 20px;
// }

// #toastbox {
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   width: 300px;
//   z-index: 1000;
// }

// .toast {
//   background-color: #333;
//   color: #fff;
//   padding: 15px;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   font-size: 14px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
//   transition: opacity 0.5s ease-in-out;
//   opacity: 1;
// }

// .toast.success {
//   background-color: #4caf50; 
// }

// .toast.error {
//   background-color: #f44336;
// }

// .toast.invalid {
//   background-color: #ff9800; 
// }

// .toast.fade-out {
//   opacity: 0;
//   transition: opacity 0.5s ease-in;
// }

// .toast i {
//   margin-right: 10px;
// }


