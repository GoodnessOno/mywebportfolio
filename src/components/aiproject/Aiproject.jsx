import React from 'react'
import './aiproject.css'
import ai from '../../assets/ai image.png'

const Aiproject = () => {
  return (
    <div className='ai-container'>
        <div className='ai-item'>
            <img src={ai} alt="aiimg" />
        </div>
        <div className='ai-item'>
            <h1>ARTIFICIAL INTELLIGENCE</h1>
        </div>
    </div>
  )
}

export default Aiproject
