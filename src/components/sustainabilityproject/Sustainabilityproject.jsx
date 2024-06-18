import React from 'react'
import './sustainabilityproject.css'
import sustainability from '../../assets/sustainability image.png'

const Sustainabilityproject = () => {
  return (
    <div className='sustainability-container'>
        <div className='sustainability-item'>
            <h1>SUSTAINABILITY</h1>
            <p>
            Sustainability is at the heart of everything I do. 
            As a fervent supporter of the United Nations SDGs, I am committed to leveraging technology to make a positive impact on our planet. 
            My latest endeavor, GoalsAlly, is a software product designed to aid in the achievement of the SDGs. 
            GoalsAlly empowers individuals and organizations to track their progress towards sustainability goals, providing insights and tools to drive impactful actions. 
            This project reflects my dedication to creating solutions that not only solve problems but also contribute to a sustainable and equitable future for all. 
            My legal expertise in environmental regulations and policies further strengthens my ability to develop solutions that are not only effective but also compliant with global sustainability standards.
            </p>
        </div>
        <div className='sustainability-item'>
            <img src={sustainability} alt="sustainabilityimg" />
        </div>
    </div>
  )
}

export default Sustainabilityproject
