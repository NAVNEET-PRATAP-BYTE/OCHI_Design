import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Active from './components/Active'
import Featured from './components/Featured'
import Card from './components/Card'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css"
import ButtonUI from './components/ButtonUI'
import Ready from './components/Ready'

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} className='w-full h-full bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
     {/* <ButtonUI/> */}
     
      <Active/>
     <Featured/>
    
     <Card/>
     <Ready/>
     <Footer/>
    </div>
  )
}

export default App
