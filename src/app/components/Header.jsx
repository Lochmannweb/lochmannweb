"use client"

import React, { useEffect, useState } from 'react'
import { ForsideData } from '../data/ForsideData'

const getClasses = (isMobile) => ({
  container: {
    gap: '5px',
    padding: isMobile ? '0rem' : '5rem',
    textAlign: 'center',
    paddingTop: isMobile ? '6rem' : '10rem',
    paddingBottom: isMobile ? '6rem' : '10rem',
  },
  title: {
    fontSize: isMobile ? '35px' : '90px',
    lineHeight: isMobile ? '3rem' : '5rem',
    marginBottom: '50px',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  linkButton: {
    padding: '9px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    margin: 'auto',
    borderRadius: '50px',
    border: 'solid',
    borderWidth: 'thin',
    fontSize: '12px',
  }
});

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  const texts = [
    "The Transformation",
    "The Magic",
    "The Strategy"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); 

    return () => clearInterval(interval); // Ryd op ved komponent unmount
  }, [texts.length  ]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") { // Check for client-side rendering
        setIsMobile(window.innerWidth < 799);
      }
    };
  
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const classes = getClasses(isMobile);

  return (
    <div style={classes.container}>
      <h2 style={classes.title}>{ForsideData.title1} <br /> <span className='animated-text font-serif text-1xl md:text-6xl '>{texts[index]}</span> <br />{ForsideData.title3}</h2>
      <a style={classes.linkButton} href="/Contact">{ForsideData.button}</a>
    </div>
  )
}

export default Header;