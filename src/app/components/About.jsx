"use client"

import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React, { useEffect, useState } from 'react'

const styles = {
  aboutContainer: (isMobile, isTablet) => ({
    display: isMobile ? 'grid' : isTablet ? 'grid' : 'flex',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', // Border gradient
    padding: isMobile ? '1rem' : isTablet ? '2rem' : '3rem',
    margin: isMobile ? '1rem' : isTablet ? '1rem' : '3rem',
    gap: isMobile ? '1rem' : isTablet ? '1rem' : '2rem',
    marginTop: isMobile ? '5rem' : isTablet ? '5rem' : '',
    marginBottom: isMobile ? '7rem' : isTablet ? '7rem' : '',
    backdropFilter: isMobile ? 'blur(20px)' : isTablet ? 'blur(20px)' : 'blur(20px)',
  }),
  contentContainer: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? '' : 'flow',
    alignContent: isMobile ? '' : isTablet ? '' : 'center',
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '10px' : isTablet ? '12px' : '13px',
  }),
  header: (isMobile, isTablet) => ({
    fontSize: isMobile ? '25px' : isTablet ? '25px' : '40px',
  }),
  content: (isMobile, isTablet) => ({
    fontSize: isMobile ? '15px' : isTablet ? '18px' : '20px',
  }),
}

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 799);
      setIsTablet(width >= 799 && width < 1200);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section style={styles.aboutContainer(isMobile, isTablet)}>
      <div>
        <Image         
          src="/pf-about.png"
          width={isMobile ? '200' : isTablet ? '500' : '700'}
          height={isMobile ? '200' : isTablet ? '500' : '700'}
          alt='profil'
        />
      </div>

      <div style={styles.contentContainer(isMobile, isTablet)}> 
        <h1 style={styles.title(isMobile, isTablet)}>{AboutData.title}</h1>        
        <h2 style={styles.header(isMobile, isTablet)}>{AboutData.subheader}</h2>
        <h3 style={styles.content(isMobile, isTablet)}>{AboutData.content}</h3>
      </div>
    </section>
  )
}

export default About
