import { useState } from 'react'
import './App.css'
import Hero from './Hero/Hero'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
