import LogoNav from './components/LogoNav/LogoNav';
import CarouselBootstrap from './components/CarouselBootstrap/CarouselBootstrap'
import CarouselSlick from './components/CarouselSlick/CarouselSlick'
import Produtos from './components/Produtos/Produtos';


import './assets/global.css'

function App() {

  return (
    <>  
      <LogoNav />
      <div data-bs-spy="scroll" data-bs-target="cabecalho" data-bs-smooth-scroll="true">
        <CarouselBootstrap/>
        <CarouselSlick />
        <Produtos />
      </div>
    </>
  )
}

export default App
