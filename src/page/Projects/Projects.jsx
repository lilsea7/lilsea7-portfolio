import React from 'react'
import './Projects.css'

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Rabbit Cake',
      image: '/images/bt5.png',
      link: 'https://rabbit-cake.onrender.com/'
    },
    {
      id: 2,
      title: 'introduction',
      image: '/images/bt1.png',
      link: 'https://github.com/lilsea7/g-idle'
    },
    {
      id: 3,
      title: 'Homeify',
      image: '/images/bt2.jpg',
      link: 'https://github.com/hwamin2101/homeify'
    },
    {
      id: 4,
      title: 'Flower Lover',
      image: '/images/bt4.png',
      link: 'https://github.com/NgocHoa2811/FlowerLover'
    },
    {
      id: 5,
      title: 'Caculator',
      image: '/images/bt3.jpg',
      link: 'https://github.com/hwamin2101/Calculator'
    },
    {
      id: 6,
      title: 'Rentiful',
      image: '/images/bt6.png',
      link: 'https://github.com/hwamin2101/real_estate'
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <h1 className="projects-page-title">My Projects</h1>
        <p className="projects-page-subtitle">Explore my latest work and creations</p>
      </div>

      <div className="projects-page-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <a
              className="project-card-link"
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
