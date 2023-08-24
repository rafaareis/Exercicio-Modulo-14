import LogoNav from './components/LogoNav/LogoNav';
import CarouselBootstrap from './components/CarouselBootstrap/CarouselBootstrap'
import CarouselSlick from './components/CarouselSlick/CarouselSlick'
import Produtos from './components/Produtos/Produtos'
import Contato from './components/Contato/Contato';

import './assets/global.css'

function App() {

  return (
    <>
      <header id="cabecalho" className="navbar navbar-expand-lg sticky-top">
        <LogoNav />
      </header>
      <div data-bs-spy="scroll" data-bs-target="cabecalho" data-bs-smooth-scroll="true">
        <CarouselBootstrap />
        <CarouselSlick />
        <Produtos />
        <Contato />
      </div>
    </>
  )
}

export default App
