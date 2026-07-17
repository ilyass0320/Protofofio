import './index.css'
import { Route, Routes } from 'react-router-dom'
import ProtofolioAceuil from './pages/elements/ProtofolioAceuil'
import About from './pages/elements/About'
import Projects from './pages/elements/Projects'
import Contact from './pages/elements/Contact'
import Nav from './pages/NavBar/Nav'

const App = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="px-6 py-10">
        <Routes>
          <Route path="/" element={<ProtofolioAceuil />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
