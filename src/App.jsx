import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import ProjectsPage from './page/Projects/Projects'
import ContactPage from './page/Contact/Contact'
import './index.css'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <TechnicalSkills />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
