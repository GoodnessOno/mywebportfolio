import React from 'react';
import './skills.css';
import Flippablecard from '../flippablecard/Flippablecard';

const Skills = () => {

  const frontContent = (
    <div className='skills-hardskills'>
      <h2>HARD SKILLS</h2>
      <div className='skill'>
        <h4>REACT.JS</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '90%' }}></div>
          <span className="label">Advanced</span>
        </div>
      </div>
      <div className='skill'>
        <h4>JAVASCRIPT</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '90%' }}></div>
          <span className="label">Advanced</span>
        </div>
      </div>
      <div className='skill'>
        <h4>HTML5</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '90%' }}></div>
          <span className="label">Advanced</span>
        </div>
      </div>
      <div className='skill'>
        <h4>CSS3</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '90%' }}></div>
          <span className="label">Advanced</span>
        </div>
      </div>
      <div className='skill'>
        <h4>RESPONSIVE WEB DESIGN</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '90%' }}></div>
          <span className="label">Advanced</span>
        </div>
      </div>
      <div className='skill'>
        <h4>FRONTEND FRAMEWORKS - BOOTSTRAP</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '80%' }}></div>
          <span className="label">Advanced</span>
        </div>
      </div>
      <div className='skill'>
        <h4>VERSION CONTROL-GIT</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '80%' }}></div>
          <span className="label">Advanced</span>
        </div>
      </div>
    </div>
  );

  const backContent = (
    <div className='skills-hardskills'>
      <div className='skill'>
        <h4>MYSQL</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '60%' }}></div>
          <span className="label">Intermediate</span>
        </div>
      </div>
      <div className='skill'>
        <h4>TYPESCRIPT</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '50%' }}></div>
          <span className="label">Intermediate</span>
        </div>
      </div>
      <div className='skill'>
        <h4>FIGMA</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '50%' }}></div>
          <span className="label">Intermediate</span>
        </div>
      </div>
      <div className='skill'>
        <h4>AI & MACHINE LEARNING</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '50%' }}></div>
          <span className="label">Intermediate</span>
        </div>
      </div>
      <div className='skill'>
        <h4>NODE.JS</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '20%' }}></div>
          <span className="label">Beginner</span>
        </div>
      </div>
      <div className='skill'>
        <h4>EXPRESS</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '20%' }}></div>
          <span className="label">Beginner</span>
        </div>
      </div>
      <div className='skill'>
        <h4>TESTING FRAMEWORKS-JEST</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '20%' }}></div>
          <span className="label">Beginner</span>
        </div>
      </div>
      <div className='skill'>
        <h4>REACT NATIVE</h4>
        <div className='proficiency'>
          <div className="progress-bar" style={{ width: '10%' }}></div>
          <span className="label">Beginner</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className='skill-tab'>
      <div className='skills-header'>
        <h1>SKILLS</h1>
        <h3>Click on the tab to learn more</h3>
      </div>
      <div className="skills-flip">
        <Flippablecard frontContent={frontContent} backContent={backContent} />
      </div>
      </div>
    </>
  );
};

export default Skills;
