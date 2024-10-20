"use client"

import { ServiceData } from "@/app/data/AboutData"
import Image from "next/image"
import React, { useEffect, useState } from 'react'

const getClasses = (isMobile) => ({
  container: {
    display: isMobile ? "grid" : "flex",
    justifyContent: "center",
    backdropFilter: "blur(20px)", 
    gap: '45px',
    border: "solid",
    borderWidth: "thin",
    width: isMobile ? "20rem" : "70rem",
    padding: isMobile ? "0.5rem" : "3rem",
    borderRadius: isMobile ? '10px' : '25px',
    marginBottom: '10rem',
    margin: isMobile ? 'auto' : '',
  },
  imageContainer: {
    marginTop: isMobile ? '2px' : '8px',
    marginBottom: isMobile ? '2px' : '8px',
  },
  aboutTextContainer: {
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: isMobile ? '8px' : '10px',
  },
  content: {
    fontSize: isMobile ? '15px' : '20px',
  },
});

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window exists (only on the client side)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 599);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const classes = getClasses(isMobile);

  return (
    <section style={classes.container}>
        <div style={classes.aboutTextContainer}>
          <h1 style={classes.title}>{ServiceData.title}</h1>        
          <h3 style={classes.content}>{ServiceData.content}</h3>
        </div>
        {/* <div>
          <Image         
          src="/pf-about.png"
          alt='profil'
          width={isMobile ? 200 : 825}
          height={isMobile ? 200 : 825}
          style={classes.imageContainer}/>
        </div> */}
    </section>
  )
}

export default About
