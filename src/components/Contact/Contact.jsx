import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      {/* Decorative animated flowers */}
      <div className="contact-decor" aria-hidden>
        <div className="floating-flower flower-1" />
        <div className="floating-flower flower-2" />
        <div className="floating-flower flower-3" />
      </div>

      <div className="contact-content">
        <h2 className="contact-heading">It would be great to work together.</h2>
        <Link to="/contact" className="contact-button">
          Contact Me Now
        </Link>
      </div>
    </div>
  )
}

export default Contact
