import React from 'react'
import './nessdroidweather.css'
import logo from '../../assets/NESSDROID LOGO WORD.png'
import { IoLogoGithub } from "react-icons/io";

const Nessdroidweather = () => {
  return (
    <div className='intelliux-container'>
      <div className='intelliux-item'>
        <strong><h1>NESSDROID WEATHER APP</h1></strong>
      </div>
      <div className='intelliux-item'>
        <img src={logo} alt="intelliux" />
      </div>
      <div className='intelliux-item'>
        <b><i>
        <h2>NESSDROID WEATHER APP</h2>
        </i></b>
        
        <p>
            Nessdroid weather app is a comprehensive weather forecast tool that provides accurate and up-to-date information about the current weather conditions for a given location.
            <br />
            <br />
            This innovative application leverages OpenWeather API to provide precise weather forecasts based on various factors such as temperature, humidity, wind speed, and precipitation.
            <br />
            <br />
            Nessdroid weather app is designed to be user-friendly and intuitive, allowing users to easily access weather information for any location around the world. It is also a Progressive Web App and can be downloaded to any device which gives it the feel of a native application.
            <br />
            <br />
            <b>Key Features - </b>
            <li> 1. Real-Time Weather Update</li>
           <li> 2. Progressive Web App</li>
            <li> 3. Current date and time of your city</li>
            <br />
            <br />
            Nessdroid weather app is one of my projects as a frontend web developer and I would appreciate your feedback on your experience using the app.
            Kindly try out this tool by clicking the link below or visit our github repository to contribute to this project which has been made open source.
            <br />
            <br />
            <li><a href="https://nessdroid-weather-app.vercel.app/" target="_blank" rel="noopener noreferrer">NESSDROID WEATHER WEB APP</a></li>
            <li><a href="https://github.com/GoodnessOno/nessdroid_weather" target="_blank" rel="noopener noreferrer"><IoLogoGithub />Nessdroid Weather App Github Repositiry</a></li>
        </p>
        <h3>Technologies used - Javascript, ReactJS, HTML, CSS, API</h3>
      </div>
    </div>
  )
}

export default Nessdroidweather
