import React, { useState } from 'react'
import './Home.css'

const Home = () => {
  return (
    <div  id="home" className="home-container">
      <div className="home-content">
        {/* Text Section */}
        <div className="home-text">
          <h1 className="home-title">Hallo! I'm Phuong Thao</h1>
          <h2 className="home-subtitle">Full Stack Developer</h2>
          <p className="home-description">
            Pursue beautiful and pretty things. My projects are always well designed, beautiful and user friendly.
          </p>
          <button className="home-button">FIND ME AT</button>
          <div className="home-socials">
            <a href="https://www.instagram.com/lilsea.7/" className="social-icon instagram">IG</a>
            <a href="https://github.com/lilsea7" className="social-icon github">GH</a>
          </div>
    
          </div>

        {/* Image Section */}
        <div className="home-image-section">
          {/* Background blur layer */}
          <div className="image-background">
              {/* Floating blurred flowers for depth (multiple, different sizes/positions) */}
              <div className="floating-flower flower-1" aria-hidden="true"></div>
              <div className="floating-flower flower-2" aria-hidden="true"></div>
              <div className="floating-flower flower-3" aria-hidden="true"></div>
          </div>
          
          {/* Main image layer */}
          <div className="image-foreground">
            <img src="/images/img-profile.jpg" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
