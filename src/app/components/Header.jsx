"use client";

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";

const classes = {
  container: (screenSize) => ({
    textAlign: 'center',
    paddingTop: screenSize === 'mobile' ? '5rem' : screenSize === 'tablet' ? '5rem' : '10rem',
    paddingBottom: screenSize === 'mobile' ? '4rem' : screenSize === 'tablet' ? '4rem' : '10rem',
  }),
  heading: (screenSize) => ({
    fontSize: screenSize === 'mobile' ? '10px' : screenSize === 'tablet' ? '20px' : '40px',
    lineHeight: screenSize === 'mobile' ? '2rem' : screenSize === 'tablet' ? '3rem' : '4rem',
    fontFamily: '',
  }),
  animatedText: (screenSize) => ({
    fontSize: screenSize === 'mobile' ? '40px' : screenSize === 'tablet' ? '40px' : '90px',
    fontFamily: 'auto',
    animation: 'pulse 1s infinite',
  }),
  button: (screenSize) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '1rem',
    width: screenSize === 'mobile' ? '27%' : screenSize === 'tablet' ? '15%' : '13%',
    padding: screenSize === 'mobile' ? '3px' : screenSize === 'tablet' ? '3px' : '0.5rem',
    fontSize: screenSize === 'mobile' ? '10px' : screenSize === 'tablet' ? '10px' : '15px',
    borderRadius: '25px',
    border: '1px solid white',
    textAlign: 'center',
    color: 'white',
  }),
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 599) {
        setScreenSize('mobile');
      } else if (width <= 760) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Set initial value on load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default function Header() {
  const screenSize = useScreenSize();
  const [index, setIndex] = useState(0);

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
    <div style={classes.container(screenSize)}>
      <h2 style={classes.heading(screenSize)}>
        {ForsideData.title1} <br />
        <span style={classes.animatedText(screenSize)}>
          {texts[index]}
        </span> <br />
        {ForsideData.title3}
      </h2>
      <a
        href="/Contact"
        style={classes.button(screenSize)}
      >
        {ForsideData.button}
      </a>
    </div>
  );
}
