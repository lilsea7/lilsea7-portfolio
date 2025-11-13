import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    // toggle a class on the body when the mobile nav is open so we can add spacing
    if (isMenuOpen) {
      document.body.classList.add('nav-open')
    } else {
      document.body.classList.remove('nav-open')
    }

    // cleanup on unmount
    return () => {
      document.body.classList.remove('nav-open')
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      <div className="container">
        {/* Logo bên trái */}
        <div className="logo">
          <Link to="/">
            <span className="logo-text">lilsea7</span>
          </Link>
        </div>

        {/* Navigation bên phải - Desktop */}
        <nav className="nav-desktop">
          <ul>
            <li><a href="/#home" className="nav-link">Home</a></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/#home" onClick={handleNavClick}>Home</a></li>
            <li><Link to="/projects" onClick={handleNavClick}>Projects</Link></li>
            <li><a href="/contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav
