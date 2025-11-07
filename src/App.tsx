import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { AboutMe } from './pages/AboutMe.tsx'
import { Projects } from './pages/Projects.tsx'

function App() {

  return (
    <Routes >
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  )
}

export default App
