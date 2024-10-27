"use client"

import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Services from '../components/About/Services'
import Experience from '../components/About/Experience';

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? '' : 'grid',
    gap: isMobile ? '0.5rem' : isTablet ? '' : '2rem',
    padding: isMobile ? '' : isTablet ? '' : '20px',
    marginTop: isMobile ? '' : isTablet ? '' : '8rem',
    marginBottom: isMobile ? '' : isTablet ? '' : '8rem',
  }),
  aboutComponent: (isMobile, isTablet) => ({
    paddingLeft: isMobile ? '' : isTablet ? '' :'3rem',
  }),
  aboutContainer: (isMobile, isTablet) => ({
    marginTop: isMobile ? '' : isTablet ? '' : '0rem',
    display: isMobile ? '' : isTablet ? '' : 'grid',
  }),
};

const Aboutpage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 600);
      setIsTablet(width >= 600 && width < 1024);
    };
    
    handleResize(); // set Initial value
    window.addEventListener("resize", handleResize);
  
  return () => {
    window.removeEventListener("resize", handleResize)
  }

 }, []);

  return (
    <div style={styles.container(isMobile, isTablet)} >
      <div style={styles.aboutContainer(isMobile, isTablet)}>
        <About />
        <Services />
        <Experience />
      </div>
    </div>
  )
}

export default Aboutpage