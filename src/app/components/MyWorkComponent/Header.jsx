"use client"

import { MyWorkHeader } from "@/app/data/MyWorkData"
import React, { useEffect, useState } from 'react'

const styles = {
  container: (isMobile, isTablet) => ({
    display: 'grid',
    textAlign: 'center',
    marginTop: isMobile ? '5rem' : isTablet ? '' : '',
    paddingLeft: isMobile ? '18px' : isTablet ? '18px' : '13rem',
    paddingRight: isMobile ? '18px' : isTablet ? '18px' : '13rem',
    paddingTop: isMobile ? '18px' : isTablet ? '5rem' : '13rem',
    gap: isMobile ? '10px' : isTablet ? '' : '1rem',
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '15px' : isTablet ? '15px' : '25px',
    fontFamily: 'fantasy',
  }),
  header: (isMobile, isTablet) => ({
    fontSize: isMobile ? '27px' : isTablet ? '27px' : '59px',
    marginTop: '-10px',
    fontFamily: 'auto',
  }),
  subheader: (isMobile, isTablet) => ({
    marginTop: '-10px',
    fontSize: isMobile ? '10px' : isTablet ? '10px' : '20px',
  }),
  button: (isMobile, isTablet) => ({
    borderRadius: '50px',
    borderWidth: 'thin',
    borderColor: 'white',
    width: isMobile ? '60%' : isTablet ? '60%' : '35%',
    padding: '0.3rem',
    margin: 'auto',
    marginTop: '2rem',
    fontSize: isMobile ? '15px' : isTablet ? '' : '15px', 
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
    <div style={styles.container(isMobile, isTablet)}>
        <h1 style={styles.title(isMobile, isTablet)}>{MyWorkHeader.title}</h1>
        <h2 style={styles.header(isMobile, isTablet)}>{MyWorkHeader.header}</h2>
        <h3 style={styles.subheader(isMobile, isTablet)}>{MyWorkHeader.subheader}</h3>
        <a style={styles.button(isMobile, isTablet)} href="/Contact">{MyWorkHeader.button}</a>
    </div>
  )
}

export default Aboutpage