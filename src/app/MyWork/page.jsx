"use client"

import React, { useEffect, useState } from 'react'
import Header from '../components/MyWorkComponent/Header';
import Contact from '../components/Contact';
import StepByStep from '../components/MyWorkComponent/StepByStep';
import MyWork from '../components/MyWorkComponent/MyWork';

const styles = {
  container: {
    paddingBottom: '1rem',
  },
  aboutComponent: {
  },
  aboutContainer: {
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
      <div style={styles.container}>
        <Header />  
        <StepByStep />
        <MyWork />
        <Contact />
      </div>
  )
}

export default Aboutpage