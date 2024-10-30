"use client";

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";

const classes = {
  container: (isMobile, isTablet) => ({
    paddingTop: isMobile ? '5rem' : isTablet ? '5rem' : '10rem',
    paddingBottom: isMobile ? '4rem' : isTablet ? '4rem' : '10rem',
    textAlign: 'center',
  }),
  heading: (isMobile, isTablet) => ({
    fontSize: isMobile ? '1.5rem' : isTablet ? '1.8rem' : '2rem',
    lineHeight: isMobile ? '2rem' : isTablet ? '3rem' : '4rem', 
    fontFamily: '',
  }),
  animatedText: (isMobile, isTablet) => ({
    fontSize: isMobile ? '2.5rem' : isTablet ? '4rem' : '6rem', 
    fontFamily: 'auto',
    animation: 'pulse 1s infinite', 
  }),
  button: (isMobile, isTablet) => ({ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '1rem', 
    width: isMobile ? '30%' : isTablet ? '15%' : '13%', 
    padding: isMobile ? '3px' : isTablet ? '3px' : '0.5rem', 
    fontSize: isMobile ? '10px' : isTablet ? '10px' : '15px', 
    borderRadius: '25px', 
    border: '1px solid white',
    textAlign: 'center',
    color: 'white',
  }),
};

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 599);
      setIsTablet(width > 760 && width < 1200);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const texts = [
    "The Transformation",
    "The Magic",
    "The Strategy",
  ];

  return (
    <div style={classes.container(isMobile, isTablet)}>
      <h2 style={classes.heading(isMobile, isTablet)}>
        {ForsideData.title1} <br />
        <span style={classes.animatedText(isMobile, isTablet)}>
          {texts[index]}
        </span> <br />
        {ForsideData.title3}
      </h2>
      <a
        href="/Contact"
        style={classes.button(isMobile, isTablet)}
      >
        {ForsideData.button}
      </a>
    </div>
  );
}

export default Header;
