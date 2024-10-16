"use client"

import React, { useEffect, useState } from 'react'
import { AboutContent } from '../data/AboutData'
import About from '@/app/components/About'

const classes = {
  container: {
    display: 'grid',
    gap: '2rem',
    padding: '20px',
  },
  aboutComponent: {
    paddingLeft: '3rem',
  },
};

const Aboutpage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 599);
    };
    
    handleResize(); // set Initial value
    window.addEventListener("resize", handleResize);
  
  return () => {
    window.removeEventListener("resize", handleResize)
  }

 }, []);

  return (
    <div style={classes.container} >
      <div style={classes.aboutComponent}>
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