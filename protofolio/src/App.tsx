import './index.css'
import ProtofolioAceuil from './pages/elements/ProtofolioAceuil'
import About from './pages/elements/About'
import Contact from './pages/elements/Contact'
import { Starfield } from './pages/NavBar/StarFeild';

const App = () => {
  return (
    <div className="min-h-screen">
      <Starfield />
      <ProtofolioAceuil/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
