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
            <p>
            My journey in software development began with a fascination for creating intuitive, responsive, and visually appealing web applications. 
            Specializing in front-end development, I have honed my skills in technologies such as HTML, CSS, JavaScript, and modern frameworks like React and Angular. 
            My passion lies in crafting seamless user experiences that not only meet user needs but also exceed their expectations. Each project I undertake is an opportunity to push the boundaries of what's possible in the digital realm, ensuring that my creations are both functional and delightful to use. 
            My legal background also empowers me to address regulatory challenges and ensure compliance, adding an extra layer of robustness to my development process.
            </p>
        </div>
    </div>
  )
}

export default Technologyproject
