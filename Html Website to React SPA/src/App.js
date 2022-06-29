import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
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
            <Route  exact path="/Services" element={<Services />} />
            <Route  exact path="/Projects" element={<Projects />} />
            <Route  exact path="/About" element={<About />} />
            <Route  exact path="/Contacts" element={<Contacts />} />
            
        </Routes>
        
         <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
