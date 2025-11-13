import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState({})

  const projects = [
    {
      id: 1,
      title: 'theIntroduction',
      date: 'Nov 2023',
      description: 'designed to introduce KPOP girl groups to fans. Includes basic information related to the group.',
      image: '/images/bt1.png',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Homeify',
      date: 'Sep 2024',
      description: 'website to help book and rent apartments.',
      image: '/images/bt2.jpg',
      technologies: ['React', 'MongoDB', 'TypeScript']
    },
    {
      id: 3,
      title: 'Caculator',
      date: 'Jul 2025',
      description: 'basic computer applications.',
      image: '/images/bt3.jpg',
      technologies: ['Android Studio', 'Java']
    },
    {
      id: 4,
      title: 'Flower Lover',
      date: 'Jun 2025',
      description: 'The website is built to support fresh flower shops with functions to support searching, ordering, and purchasing products. Integrated with basic chatbot.',
      image: '/images/bt4.png',
      technologies: ['JavaScript', 'JSP', 'MongoDB']
    },
    {
      id: 5,
      title: 'Rabbit Cake',
      date: 'Aug 2025',
      description: 'Personal portfolio showcasing projects, skills, and experience. Features smooth scrolling, animations, and responsive design across all devices.',
      image: '/images/bt5.png',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js']
    },
    {
      id: 6,
      title: 'Rentiful',
      date: 'Present',
      description: 'Intelligent chatbot powered by OpenAI API. Implements natural language processing and maintains conversation context for intelligent responses.',
      image: '/images/bt6.png',
      technologies: ['React', 'Node.js', 'Express','AWS', 'PostgreSQL']
    }
  ]

  // Calculate scroll progress based on container visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = containerRef.current.scrollHeight
      const viewportHeight = window.innerHeight
      
      // Calculate how much of the container is visible
      // Progress bar grows as we scroll through the timeline section
      const startOffset = Math.max(0, -rect.top)
      const progress = Math.min(1, startOffset / (containerHeight - viewportHeight / 2))
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add/remove 'visible' class based on intersection
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    // Observe all project content and image elements
    const contents = containerRef.current?.querySelectorAll('.project-content')
    const images = containerRef.current?.querySelectorAll('.project-image')
    
    contents?.forEach((item) => observer.observe(item))
    images?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="projects-container" ref={containerRef}>
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">my and my friends' passion projects</p>
      </div>

      <div className="timeline-wrapper">
        {/* Timeline center line */}
        <div className="timeline-center">
          <div className="timeline-line">
            <div 
              className="timeline-progress" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-item ${index % 2 === 0 ? 'left' : 'right'} ${visibleItems[project.id] ? 'visible' : ''}`}
              data-project-id={project.id}
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <div className="dot-inner"></div>
              </div>

              {/* Content */}
              <div className="project-content">
                <div className="project-date">{project.date}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="project-image">
                <div className="image-placeholder">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
