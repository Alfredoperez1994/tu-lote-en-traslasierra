import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StickyNavbarComponent from './components/StickyNavbarComponent/StickyNavbarComponent'
import FloatingWhatsappButton from './components/FloatingWathsappButton/FloatingWathsappButton'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Info from "./pages/Info";





import MainLoteoComponent from './components/MainLoteoComponent/MainLoteoComponent'
import PlanoInteractivoLoteo from './components/PlanoInteractivoLoteo/PlanoInteractivoLoteo'


const App = () => {
  return (
    <div className='app'>
      <StickyNavbarComponent />
      <FloatingWhatsappButton
        phone="543516526387"
        message="¡Hola! Estoy interesado en los lotes de Traslasierra."
      />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Info" element={<Info />} />

      </Routes>


    </div>
  )
}

export default App