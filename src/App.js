import { Welcomepage, Homepage, Aboutme, Projects, Blog, Contactme, Jsfatigue, Aireactprojects,
  Aipersonalisedmarketing, Futurefrontend, Growthhacking, Growthhackingfrontend, Aiinonlinedating,
  Customersjourney, Innovativeforstartups, Growthhackingforindustries, Customerretentionstrategies,
  Ideatomarketleader, Unityforgrowth, Owaspjuicepentest
 } from './pages';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcomepage />} />
            <Route exact path="/homepage" element={<Homepage />} />
            <Route exact path="/aboutme" element={<Aboutme />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route excat path="/projects" element={<Projects />} />
            <Route exact path="/growthhacking" element={<Growthhacking />} />
            <Route exact path="/contactme" element={<Contactme />} />
            <Route exact path='/blog/is-javascript-fatigue-real' element={<Jsfatigue />} />
            <Route exact path='/blog/integrating-ai-into-react-projects' element={<Aireactprojects />} />
            <Route exact path='/blog/leveraging-ai-for-personalised-marketing' element={<Aipersonalisedmarketing />} />
            <Route exact path='/blog/future-of-frontend-development' element={<Futurefrontend />} />
            <Route exact path='/blog/owasp-juice-shop-pentesting' element={<Owaspjuicepentest />} />
            <Route exact path='/blog/integrating-growth-hacking-for-frontend-development' element={<Growthhackingfrontend />} />
            <Route exact path="/blog/proven-growth-hacking-strategies-to-optimize-customer-retention" element={<Customerretentionstrategies />} />
            <Route exact path='/growthhacking/ai-in-online-dating-services' element={<Aiinonlinedating />} />
            <Route exact path="/growthhacking/pay-attention-to-your-customer's-journey" element={<Customersjourney />} />
            <Route exact path="/growthhacking/innovative-technologies-tools-and-methodologies-for-startups" element={<Innovativeforstartups />} />
            <Route exact path="/growthhacking/growthhacking-strategies-for-startups-across-industries" element={<Growthhackingforindustries />} />
            <Route exact path="/growthhacking/from-idea-to-market-leader" element={<Ideatomarketleader />} />
            <Route exact path="/growthhacking/the-importance-of-team-work-in-startup-growth" element={<Unityforgrowth />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </div>
  );
}

export default App;
