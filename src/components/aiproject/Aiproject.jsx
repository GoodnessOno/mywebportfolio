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
            <p className='ai-item'>
            Artificial Intelligence (AI) is not just a buzzword for me; it's a tool that can transform user experiences and drive meaningful insights. 
            With sufficient experience in AI and machine learning, I am currently working on an AI UX Improvement Tool that aims to enhance the way developer build and users interact with digital products. 
            By leveraging AI, I strive to create smarter, more intuitive interfaces that adapt to user behavior, making technology more accessible and user-friendly. 
            This project is a testament to my belief that AI can be a powerful ally in the pursuit of innovation and excellence in software development. 
            <br />
            My understanding of data privacy laws and ethical considerations ensures that my AI solutions are not only innovative but also responsible and secure.
            </p>
        </div>
    </div>
  )
}

export default Aiproject
