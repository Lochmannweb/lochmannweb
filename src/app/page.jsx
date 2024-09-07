import React from 'react'
import About from '@/app/components/About'
import Expertise from './components/Expertise'
import Erfaring from './components/Erfaring'
import Header from './components/Header'
import MyWork from './components/MyWork'


const page = () => {
  return (
    <div className='grid gap-5'>
    <section className='grid gap-5'>
    <Header />
    <About />
    <Expertise />
    <Erfaring />
    <MyWork />
    </section>
    </div> 
  )
}

export default page