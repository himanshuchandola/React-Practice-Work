import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Food from './components/Food';
import Faq from './components/Faq';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
   <div className="App">
     <Router>
     <Header />
        <Routes>
          
            <Route exact path="/" element={<Home />} />
            <Route  exact path="/About" element={<About />} />
            <Route  exact path="/Food" element={<Food />} />
            <Route  exact path="/Faq" element={<Faq />} />
            
            
        </Routes>
        
         <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
