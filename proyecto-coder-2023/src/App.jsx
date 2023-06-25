import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Carousel from './components/Carousel';
import Nosotros from './components/Nosotros';
import Horarios from './components/Horarios';
import Mapa from './components/Mapa';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';


const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Logo />
    <Carousel />
    <Nosotros />
    <Horarios />
    <Mapa />
    <Footer />
    <WhatsAppButton/>
    </BrowserRouter>
  )
}

export default App

