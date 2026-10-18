import { useState } from 'react'
import './App.css'
import Hero from './Hero/Hero'
import Navbar from './components/Navbar'
import About from './About/About'
import Skills from './Skills/Skills'

function App() {
  

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
