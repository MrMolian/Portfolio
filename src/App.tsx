import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { AboutMe } from './pages/AboutMe.tsx'
import { Projects } from './pages/Projects.tsx'
import { Contact } from './pages/Contact.tsx'

function App() {

  return (
    <Routes >
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
