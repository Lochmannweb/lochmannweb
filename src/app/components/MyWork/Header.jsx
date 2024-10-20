"use client"
import { MyWorkHeader } from "@/app/data/MyWorkData"

import React, { useEffect, useState } from 'react'

const getClasses = (isMobile) => ({
  container: {
    display: 'grid',
    textAlign: 'center',
    marginTop: '10rem',
  },
  title: {
    fontSize: '15px',
    fontFamily: 'fantasy',
  },
  header: {
    fontSize: '50px',
    marginTop: '-10px',
    fontFamily: 'auto',
  },
  subheader: {
    paddingLeft: '16rem',
    paddingRight: '16rem',
    marginTop: '-10px',
  },
  button: {
    borderRadius: '50px',
    borderWidth: 'thin',
    borderColor: 'white',
    width: '20%',
    padding: '0.3rem',
    margin: 'auto',
    marginTop: '2rem',
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
        <h1 style={classes.title}>{MyWorkHeader.title}</h1>
        <h2 style={classes.header}>{MyWorkHeader.header}</h2>
        <h3 style={classes.subheader}>{MyWorkHeader.subheader}</h3>
        <a style={classes.button} href="/Contact">{MyWorkHeader.button}</a>
    </div>
  )
}

export default Aboutpage