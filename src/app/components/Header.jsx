"use client"

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";

const styles = {
  container: (isMobile) => ({
    paddingTop: isMobile ? '3rem' : '5rem',
  }),
  title: (isMobile) => ({
    textAlign: 'center',
    fontSize: isMobile ? '1.3rem' : '2rem',
    fontFamily: 'fantasy',
    lineHeight: isMobile ? '' : '4rem', 
  }),
  animatedTextStyle: (isMobile) => ({
    fontFamily: 'auto',
    fontWeight: 'bold',
    fontSize: isMobile ? '2rem' : '5rem',
    animation: 'fade 3s infinite',
  }),
  linkStyle: (isMobile) => ({
    padding: isMobile ? '0.3rem' : '10px 20px',
    borderRadius: '50px',
    borderWidth: 'thin',
    borderColor: 'white',
    textAlign: 'center',
    display: 'flex',
    width: isMobile ? '40%' : '20%',
    margin: 'auto',
    marginTop: isMobile ? '1rem' : '2rem',
    justifyContent: 'center',
    fontSize: isMobile ? '0.8rem' : '1rem',
  })
}

const texts = [
  "The Transformation",
  "The Magic",
  "The Strategy",
];

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div style={styles.container(isMobile)}>
      <h2 style={styles.title(isMobile)}>
        {ForsideData.title1} <br />
        <span style={styles.animatedTextStyle(isMobile)}>{texts[index]}</span> <br />
        {ForsideData.title3}
      </h2>
      <a style={styles.linkStyle(isMobile)} href="/Contact">
        {ForsideData.button}
      </a>
    </div>
  );
}

export default Header;
