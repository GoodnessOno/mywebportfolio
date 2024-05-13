import { Welcomepage, Homepage, Aboutme, Projects, Blog, Contactme } from './pages';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcomepage />} />
            <Route exact path="/homepage" element={<Homepage />} />
            <Route exact path="/aboutme" element={<Aboutme />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="#contactme" element={<Contactme />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
