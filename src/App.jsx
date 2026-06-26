import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() 
{
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Projects />
        <Skills/>
        <Contact/>
      </div>
    </>
  )
}

export default App
