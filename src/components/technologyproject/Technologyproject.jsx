import React from 'react';
import './technologyproject.css'
import techimg from '../../assets/software dev image.png'

const Technologyproject = () => {
  return (
    <div className='software-container'>
        <div className='software-item'>
            <img src={techimg} alt="techimg" />
        </div>
        <div className='software-item'>
            <h1>SOFTWARE DEVELOPMENT</h1>
        </div>
    </div>
  )
}

export default Technologyproject
