import React from 'react'

export default function Services() {
  return (
    <>
     <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">Services<span></span></h1>
        <h2>Some of the services provided by me.</h2>
      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="/images/services.png" alt='hi'/></div>
          <h2>Web Development & Web Design</h2>
          <p>Work with programming languages like HTML, CSS, JS, PHP, etc.. to create websites and web applications</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="/images/services.png" alt='hi'/></div>
          <h2>Game Development</h2>
          <p> Work with game engine like Unity, Buildbox, etc.. and programming languages like Python, Java, C#, etc.. to create games.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="/images/services.png" alt='hi'/></div>
          <h2>Android Software Development</h2>
          <p>Work with programming language like java, kotlin with help of android studio to build android application and games.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="/images/services.png" alt='hi'/></div>
          <h2>Photo Editing</h2>
          <p>Photo editing is the art of enhancing an image to make it look more like what you saw with your eyes. ...</p>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
