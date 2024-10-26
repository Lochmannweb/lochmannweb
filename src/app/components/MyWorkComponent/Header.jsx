"use client"
import { MyWorkHeader } from "@/app/data/MyWorkData"

import React, { useEffect, useState } from 'react'

const styles = {
  container: (isMobile) => ({
    display: 'grid',
    textAlign: 'center',
    marginTop: isMobile ? '5rem' : '',
    paddingLeft: isMobile ? '18px' : '13rem',
    paddingRight: isMobile ? '18px' : '13rem',
    paddingTop: isMobile ? '18px' : '13rem',
    gap: isMobile ? '10px' : '1rem',
  }),
  title: (isMobile) => ({
    fontSize: isMobile ? '15px' : '25px',
    fontFamily: 'fantasy',
  }),
  header: (isMobile) => ({
    fontSize: isMobile ? '27px' : '59px',
    marginTop: '-10px',
    fontFamily: 'auto',
  }),
  subheader: (isMobile) => ({
    marginTop: '-10px',
    fontSize: isMobile ? '13px' : '20px',
  }),
  button: (isMobile) => ({
    borderRadius: '50px',
    borderWidth: 'thin',
    borderColor: 'white',
    width: isMobile ? '60%' : '35%',
    padding: '0.3rem',
    margin: 'auto',
    marginTop: '2rem',
    fontSize: isMobile ? '15px' : '15px', 
  }),
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
    <div style={styles.container(isMobile)}>
        <h1 style={styles.title(isMobile)}>{MyWorkHeader.title}</h1>
        <h2 style={styles.header(isMobile)}>{MyWorkHeader.header}</h2>
        <h3 style={styles.subheader(isMobile)}>{MyWorkHeader.subheader}</h3>
        <a style={styles.button(isMobile)} href="/Contact">{MyWorkHeader.button}</a>
    </div>
  )
}

export default Aboutpage