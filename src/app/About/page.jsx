import React from 'react'
import { AboutContent } from '../data/AboutData'
import { AboutData } from '../data/AboutData'
import About from '@/app/components/About'

const Aboutpage = () => {
  return (
    <div className='grid gap-5 p-20' >
      <div className='py-36'>
        <About />
      </div>

      <div className=''>
        <h2 className='md:text-4xl'>{AboutContent.kea.title}</h2>
        <h2>{AboutContent.kea.content}</h2>
      </div>

      <div className='text-end'>
        <h2 className='md:text-4xl'>{AboutContent.ThirdSemester.title}</h2>
        <h2 className=''>{AboutContent.ThirdSemester.content}</h2>
      </div>

      <div>
        <h2 className='md:text-4xl'>{AboutContent.Foursemester.title}</h2>
        <h2>{AboutContent.Foursemester.content}</h2>
      </div>

      <div className='text-end'>
        <h2 className='md:text-4xl'>{AboutContent.passion.title}</h2>
        <h2>{AboutContent.passion.content}</h2>
      </div>

      <div>
        <h2 className='md:text-4xl'>{AboutContent.work.title}</h2>
        <h2>{AboutContent.work.content}</h2>
      </div>
    </div>
  )
}

export default Aboutpage