import React from 'react'
import './sustainabilityproject.css'
import sustainability from '../../assets/sustainability image.png'

const Sustainabilityproject = () => {
  return (
    <div className='sustainability-container'>
        <div className='sustainability-item'>
            <h1>SUSTAINABILITY</h1>
        </div>
        <div className='sustainability-item'>
            <img src={sustainability} alt="sustainabilityimg" />
        </div>
    </div>
  )
}

export default Sustainabilityproject
