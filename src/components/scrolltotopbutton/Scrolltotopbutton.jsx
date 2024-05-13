// ScrollToTopButton.js
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scrolltotopbutton.css';

const Scrolltotopbutton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="scroll-button top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default Scrolltotopbutton;

