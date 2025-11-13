import React, { useState } from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');

  const skills = {
    'Programming Languages': [
      { name: 'JavaScript', abbr: 'JS' },
      { name: 'Java', abbr: 'Java' },
      { name: 'TypeScript', abbr: 'TS' }
    ],
    'Front End': [
      { name: 'HTML', abbr: 'HTML' },
      { name: 'CSS', abbr: 'CSS' },
      { name: 'React', abbr: 'React' }
    ],
    'Backend': [
      { name: 'Node.js', abbr: 'Node' },
      { name: 'PostgreSQL', abbr: 'PSQL' },
      { name: 'MongoDB', abbr: 'MDB' },
      { name: 'Express', abbr: 'Express' }
    ],
    'Dev Tools': [
      { name: 'Git', abbr: 'Git' },
      { name: 'GitHub', abbr: 'GH' },
      { name: 'Figma', abbr: 'Figma' }
    ]
  };

  const categories = Object.keys(skills);

  // Danh sách logo thật từ web (chính thức, chất lượng cao)
  const logoMap = {
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'express': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'github': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    'figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  };

  return (
    <section className="technical-skills-section py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="skills-main-title">Technical Skills</h2>

        {/* Tabs */}
        <div className="skills-tabs mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skills-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills[activeCategory].map(skill => {
            const slug = skill.name.toLowerCase().replace(/\.? /g, '');
            const logoUrl = logoMap[slug] || '';

            return (
              <div key={skill.name} className="skill-card" title={skill.name}>
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                    loading="lazy"
                  />
                ) : (
                  <div className="skill-logo-fallback">
                    <span>{skill.abbr}</span>
                  </div>
                )}
                <p className="skill-name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;