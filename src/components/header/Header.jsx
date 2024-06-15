import React from 'react'
import './header.css'
import { ai, softwaredev, sustainability } from './imports'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
};

  return (
    <div className='header'>
            <Slider {...settings}>
                <div className='header-content'>
                    <img src={ai} alt="ai" />
                </div>
                <div className='header-content'>
                    <img src={softwaredev} alt="softwaredev" />
                </div>
                <div className='header-content'>
                    <img src={sustainability} alt="sustainability" />
                </div>
            </Slider>
            <div className="rotate-center">
                <h1>WELCOME</h1>
            </div>
            </div>
  )
}

export default Header;
