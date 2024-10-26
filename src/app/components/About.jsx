"use client"

import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React, { useEffect, useState } from 'react'

const styles = {
  aboutContainer: (isMobile) => ({
    display: isMobile ? 'grid' : 'flex',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', // Border gradient
    // borderRadius: isMobile ? '15px' : '25px', // Adjust radius based on screen size
    padding: isMobile ? '1rem' : '3rem',
    gap: isMobile ? '1rem' : '2rem',
    marginTop: isMobile ? '3rem' : '',
    backdropFilter: 'blur(20px)',
}),
  contentContainer: (isMobile) => ({
    display: isMobile ? '' : 'flow',
    alignContent: isMobile ? '' : 'center',
  }),
  title: (isMobile) => ({
    fontSize: isMobile ? '10px' : '13px',
  }),
  header: (isMobile) => ({
    fontSize: isMobile ? '25px' : '40px',
  }),
  content: (isMobile) => ({
    fontSize: isMobile ? '15px' : '20px',
  }),
}

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 799);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section style={styles.aboutContainer(isMobile)}>
      <div>
        <Image         
          src="/pf-about.png"
          width={ isMobile ? '200' : '700'}
          height={ isMobile ? '200' : '700'}
          alt='profil'
        />
      </div>

      <div style={styles.contentContainer(isMobile)}> 
        <h1 style={styles.title(isMobile)}>{AboutData.title}</h1>        
        <h2 style={styles.header(isMobile)}>{AboutData.subheader}</h2>
        <h3 style={styles.content(isMobile)}>{AboutData.content}</h3>
      </div>
    </section>
  )
}

export default About
