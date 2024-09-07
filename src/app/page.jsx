import React from 'react'
// import Expertise from '@/app/components/Expertise'
// import Erfaring from '@/app/components/Erfaring'
import About from '@/app/components/About'
// import MyWork from '@/app/components/MyWork';


const page = () => {
  return (
    <div className='grid gap-5'>
    <h1>Home</h1>
    <section className='grid gap-5'>
    <About />
    {/* <Expertise />
    <Erfaring />
    <MyWork /> */}
    </section>
    </div>
    
  )
}

export default page