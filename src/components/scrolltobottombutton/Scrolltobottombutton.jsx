// ScrollToBottomButton.js
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './scrolltobottombutton.css';

const Scrolltobottombutton = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button className="scroll-button bottom" onClick={scrollToBottom}>
      <FaArrowDown />
    </button>
  );
};

export default Scrolltobottombutton;

