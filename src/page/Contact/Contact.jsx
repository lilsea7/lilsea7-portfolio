import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize EmailJS (do this once when component mounts)
  useEffect(() => {
    // Replace with your EmailJS public key
    emailjs.init('xJyeMGZ_AeJiYMuLD')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Template parameters for EmailJS
    const templateParams = {
      to_email: 'nphuongthao270103@gmail.com', // Replace with your email
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }

    // Send email using EmailJS
    emailjs
      .send(
        'service_yd7i9i8', // Replace with your Service ID
        'template_wxbxvhf', // Replace with your Template ID
        templateParams
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setSubmitStatus('success')
          setFormData({ name: '', email: '', message: '' })
          // Reset success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000)
        },
        (error) => {
          console.log('FAILED...', error)
          setSubmitStatus('error')
          // Reset error message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000)
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="contact-page-container">
          {/* Background blur layer */}
          <div className="image-background">
              {/* Floating blurred flowers for depth (multiple, different sizes/positions) */}
              <div className="floating-flower flower-1" aria-hidden="true"></div>
              <div className="floating-flower flower-2" aria-hidden="true"></div>
              <div className="floating-flower flower-3" aria-hidden="true"></div>
          </div>
      <div className="contact-page-content">
        <h1 className="contact-page-title">Get In Touch</h1>
        <p className="contact-page-subtitle">I'd love to hear from you. Let's discuss your project!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your-email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="status-message error">
              ✗ Failed to send message. Please try again.
            </div>
          )}
        </form>

        <div className="contact-info">
          <h3>Other ways to reach me:</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:nphuongthao270103@gmail.com">nphuongthao270103@gmail.com</a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/lilsea7" target="_blank" rel="noopener noreferrer">
              github.com/lilsea7
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
