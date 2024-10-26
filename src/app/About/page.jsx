"use client"

import React, { useEffect, useState } from 'react'
import About from '@/app/components/About'
import Services from '@/app/components/About/Services'
import Experience from '@/app/components/About/Experience';

const getClasses = (isMobile) => ({
  container: {
    display: isMobile ? '' : 'grid',
    gap: isMobile ? '' : '2rem',
    padding: isMobile ? '' : '20px',
    marginTop: isMobile ? '' : '8rem',
    marginBottom: isMobile ? '' : '8rem',
  },
  aboutComponent: {
    paddingLeft: isMobile ? '' : '3rem',
  },
  aboutContainer: {
    marginTop: isMobile ? '' : '0rem',
    display: isMobile ? '' : 'grid',
  },
});

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

 const classes = getClasses(isMobile);

  return (
    <div style={classes.container} >
      <div style={classes.aboutContainer}>
        <About />
        <Services />
        <Experience />
      </div>
    </div>
  )
}

export default Aboutpage