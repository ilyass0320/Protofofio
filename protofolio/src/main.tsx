import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Nav from './pages/NavBar/Nav.tsx'
import About from './pages/elements/About'
import Projects from './pages/elements/Projects'
import Contact from './pages/elements/Contact'
import Footer from './pages/NavBar/Footer.tsx';
import { Starfield } from './pages/NavBar/StarFeild';
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics/>
    <BrowserRouter>
      <Nav/>
      <Starfield/>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
