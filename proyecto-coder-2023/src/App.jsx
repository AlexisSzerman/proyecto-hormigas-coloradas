import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Carousel from './components/Carousel';
import Nosotros from './components/Nosotros';
import Horarios from './components/Horarios';
import Mapa from './components/Mapa';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Logo />} />
      <Route exact path="/carousel" element={<Carousel />} />
      <Route exact path="/nosotros" element={<Nosotros />} />
      <Route exact path='/horarios' element={<Horarios />} />
      <Route exact path='/mapa' element={<Mapa />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App