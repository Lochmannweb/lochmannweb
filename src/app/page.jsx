"use client"

import React, { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import StepByStepHomePage from './components/Home/StepByStepHomePage'
import MyWork from './components/MyWork'
import FAQ from './components/FAQ'

const classes = {
  grid: (isMobile, isTablet) => ({
    display: 'grid',
    paddingTop: isMobile ? '50px' : isTablet ? '60px' : '10px',
    paddingBottom: isMobile ? '50px' : isTablet ? '60px' : '10px',
    gap: isMobile ? '50px' : isTablet ? '60px' : '10px',
  }),
} 

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width > 599);
      setIsTablet(width < 760 && width < 1024);
    };
    
    handleResize(); // set Initial value
    window.addEventListener("resize", handleResize);
  
  return () => {
    window.removeEventListener("resize", handleResize)
  }

 }, []); 

  return (
    <div style={classes.grid(isMobile, isTablet)}> 
    </div> 
  )
}

export default Page