import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import StepByStepHomePage from './components/Home/StepByStepHomePage'
import MyWork from './components/MyWork'
import FAQ from './components/FAQ'

const page = () => {
  return (
    <div> 
    <section>
    <Header />
    <About />
    <StepByStepHomePage />
    <MyWork />
    <Contact />
    <FAQ />
    </section>
    </div> 
  )
}

export default page