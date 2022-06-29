import React from 'react'

export default function Contacts() {
  return (
    <>
    <section id="contact">
    <div class="contact container">
      <div><h1 class="section-title">Contact <span>info</span></h1></div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="/images/phone.png" alt='hi'/></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+91 9892734812</h2>
            
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="/images/gmail.png" alt='hi'/></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>sahil14498@gmail.com</h2>
            <h2>gamer14498@gmail.com</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="/images/location.png" alt='hi'/></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>Mumbai, Maharashtra, India</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
