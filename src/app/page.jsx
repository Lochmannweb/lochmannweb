import React from 'react'
import About from '@/app/components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import ProcesStages from './components/ProcesStages'
import MyWork from '@/app/components/MyWork'
import FAQ from './components/FAQ'


const page = () => {
  return (
    <div className='grid gap-5'> 
    <section className='p-5 grid gap-20'>
    <Header />
    <About />
    <ProcesStages />
    <MyWork />
    <Contact />
    <FAQ />
    </section>
    </div> 
  )
}

export default page