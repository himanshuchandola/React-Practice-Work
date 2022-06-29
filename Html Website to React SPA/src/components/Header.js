import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
    <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero"><h1><span>SAHIL <span> </span></span>JANBANDHU</h1></a>
        </div>
        <div class="nav-list">
          <div class="hamburger"><div class="bar"></div></div>
          <ul>
            {/* <li><a href="/" data-after="Home">Home</a></li> */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            {/* <li><a href="/services" data-after="Service">Services</a></li>
            <li><a href="/projects" data-after="Projects">Projects</a></li>
            <li><a href="/about" data-after="About">About</a></li>
            <li><a href="/contact" data-after="Contact">Contact</a></li> */}
            
          </ul>
        </div>
      </div>
    </div>
  </section>
  
    </>
  )
}
