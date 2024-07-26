import { Welcomepage, Homepage, Aboutme, Projects, Blog, Contactme, Jsfatigue, Aireactprojects,
  Aipersonalisedmarketing, Futurefrontend
 } from './pages';
import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      color: {
        value: '#0d47a1',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'epulse',
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'square',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcomepage />} />
            <Route exact path="/homepage" element={<Homepage />} />
            <Route exact path="/aboutme" element={<Aboutme />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route excat path="/projects" element={<Projects />} />
            <Route exact path="/contactme" element={<Contactme />} />
            <Route exact path='/is-javascript-fatigue-real' element={<Jsfatigue />} />
            <Route exact path='/integrating-ai-into-react-projects' element={<Aireactprojects />} />
            <Route exact path='/leveraging-ai-for-personalised-marketing' element={<Aipersonalisedmarketing />} />
            <Route exact path='/future-of-frontend-development' element={<Futurefrontend />} />
            {/* Add more routes as needed */}
          </Routes>
          {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
        </Router>
      </div>
  );
}

export default App;
