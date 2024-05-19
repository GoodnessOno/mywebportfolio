import React from 'react'
import './projectsshowcase.css'
import { Link } from 'react-router-dom'
import ziloopimg from '../../assets/ZI_LOOP PROJECT.png'


const Projectsshowcase = () => {
    return (
        <div className="projectsshowcase">
          <div className='projectsshowcase-grid'>
          <div className='projectsshowcase-header'>
            <h1>VIEW MY PROJECTS</h1>
          </div>
            <h3>ZI_LOOP COMPANY WEBSITE</h3>
            <img src={ziloopimg} alt="ziloop company website" />
            <p><b><i> ZI_LOOP is a company that specializes in providing sustainable 
              <br />
              technology solutions and services to vessels and all vehicles that 
              <br />
              serve as a means of transportation on waterways.</i></b>
            </p>
            <div className='projectsshowcase-link'>
          <Link to='/projects'>CLICK TO FIND OUT MORE?</Link>
          </div>
          </div>
        </div>
    );
};

export default Projectsshowcase
