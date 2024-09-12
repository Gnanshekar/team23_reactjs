import React, { useState } from 'react';

import arrow from './SelectMenu_Img/arrow.png'
import facebook from './SelectMenu_Img/facebook.png'
import instagram from './SelectMenu_Img/instagram.png'
import pinterest from './SelectMenu_Img/pinterest.png'
import twitter from './SelectMenu_Img/twitter.png'
import whatsapp from './SelectMenu_Img/whatsapp.png'
import youtube from './SelectMenu_Img/youtube.png'



const SelectMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectOptions, setSelectOptions] = useState('Select Social Media');

    const toggleList = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionclick = (text) => {
        setSelectOptions(text);
        setIsOpen(false)
    };

    return (
        <div className='hero'>
            <div className='selecter'>
                <div id='SelectedFiled' onClick={toggleList}>
                    <p id='selectedList' >{selectOptions}</p>
                    <img src={arrow} alt="Arrow" id='arrowIcon' className={isOpen ? 'rotate' : ""} />
                </div>
                <ul id='list' className={isOpen ? '' : 'hide'}>
                    <li className='options' onClick={() => handleOptionclick("Facebook")}>
                        <img src={facebook} alt="" />
                        <p>Facebook</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Instagram")}>
                        <img src={instagram} alt="" />
                        <p>Instagram</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Pinterest")}>
                        <img src={pinterest} alt="" />
                        <p>Pinterest</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Twitter")}>
                        <img src={twitter} alt="" />
                        <p>Twitter</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("whatsapp")}>
                        <img src={whatsapp} alt="" />
                        <p>Whatsapp</p>
                    </li>
                    <li className='options' onClick={() => handleOptionclick("Youtube")}>
                        <img src={youtube} alt="" />
                        <p>Youtube</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SelectMenu;

// * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
//   }
  
//   .hero {
//     width: 100%;
//     height: 100vh;
//     background-image: linear-gradient(#f44336, #730228);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .selector {
//     width: 350px;
//   }
  
//   #selectField {
//     width: 100%;
//     padding: 15px;
//     margin-bottom: 15px;
//     box-sizing: border-box;
//     background: rgba(255, 255, 255, 0.7);
//     border-radius: 6px;
//     cursor: pointer;
//   }
  
//   #selectField img {
//     width: 12px;
//     transition: transform 0.5s;
//   }
  
//   #list {
//     width: 100%;
//     background: rgba(255, 255, 255, 0.7);
//     border-radius: 6px;
//     overflow: hidden;
//   }
  
//   .options {
//     width: 100%;
//     padding: 15px;
//     list-style: none;
//     cursor: pointer;
//     box-sizing: border-box;
//     position: relative;
//   }
  
//   .options img {
//     width: 25px;
//     position: absolute;
//     top: 12px;
//     left: 25px;
//   }
  
//   .options:hover {
//     background: rgba(255, 255, 255, 0.7);
//   }
  
//   .hide {
//     visibility: hidden;
//   }
  
//   .rotate {
//     transform: rotate(180deg);
//   }
  
//   #arrowIcon {
//     width: 35px;
//   }
  
  
  