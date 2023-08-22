import { useEffect } from 'react';
import $ from "jquery"
import LogoNav from './components/LogoNav/LogoNav';
import CarouselBootstrap from './components/CarouselBootstrap/CarouselBootstrap'
import CarouselSlick from './components/CarouselSlick/CarouselSlick'
import Produtos from './components/Produtos/Produtos'


import './assets/global.css'

function App() {

  useEffect(() => {

      $('.test-btn').on('click', function() {
        $('.test-btn').toggle()
        if($('.test-btn').hasClass('clicou')) {
          $('.test-btn').removeClass('clicou')
        } else {
          $('.test-btn').addClass('clicou')
        }
      })     
  })


  return (
    <>
      <header id="cabecalho" className="navbar navbar-expand-lg sticky-top">
        <LogoNav />
      </header>
      <div data-bs-spy="scroll" data-bs-target="cabecalho" data-bs-smooth-scroll="true">
        <CarouselBootstrap />
        <CarouselSlick />
        <Produtos />
        <button className='test-btn'>Clique Aqui - Teste</button>
      </div>
    </>
  )
}

export default App
