"use client"

import React, { useEffect, useState } from 'react'
import Header from '../components/MyWork/Header';
import Contact from '../components/Contact'
import StepByStep from '../components/MyWork/StepByStep';
import MyWork from '../components/Mywork/MyWork';

const getClasses = (isMobile) => ({
  container: {
    paddingBottom: '10rem',
  },
  aboutComponent: {
  },
  aboutContainer: {
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
      <div style={classes.container}>
        <Header />  
        <StepByStep />
        <MyWork />
        <Contact />
      </div>
  )
}

export default Aboutpage