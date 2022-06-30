import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  const [NavBarClass, setNavBarClass] = useState('')

   useEffect(() => {
      const scrollChange = ()=>{
        if (window.pageYOffset > 1) {
          setNavBarClass('scroll-on');
        }else{
          setNavBarClass('')
        }
      }

        window.addEventListener('scroll',scrollChange);

     return ()=>{ window.removeEventListener('scroll',scrollChange)}
  },[]);
  
  

  return (
    <>
     <nav class={"navbar navbar-expand-lg navigation-wrap "+NavBarClass}>
      <div class="container">
        <img src="images/logo.png" alt='hi'/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-stream navbar-toggler-icon"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/About" className="nav-link ">About Us</Link>
            </li>
            <li class="nav-item">
              <Link to="/Food" className="nav-link ">Explore Foods</Link>
            </li>
            <li class="nav-item">
              <Link to="/Faq" className="nav-link ">FAQ</Link>
            </li>
            <li><button class="main-btn">1200 345 123</button></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
