"use client";

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";

const styles = {
  container: (isMobile, isTablet) => ({
    paddingTop: isMobile ? '3rem' : isTablet ? '4rem' : '5rem', // Adjusted padding for mobile, tablet, and desktop
    textAlign: 'center',
  }),
  heading: (isMobile, isTablet) => ({
    fontSize: isMobile ? '1.3rem' : isTablet ? '1.5rem' : '2rem', // Responsive font sizes
    lineHeight: isMobile ? '1.2' : isTablet ? '2.5rem' : '4rem', // Responsive line heights
    fontFamily: 'fantasy',
  }),
  animatedText: (isMobile, isTablet) => ({
    fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '5rem', // Responsive font sizes
    fontWeight: 'bold',
    animation: 'pulse 1s infinite', // Animation
  }),
  button: (isMobile, isTablet) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '1rem', // Consistent margin
    width: isMobile ? '40%' : isTablet ? '30%' : '20%', // Adjusted width for each device
    padding: isMobile ? '0.5rem 0' : isTablet ? '0.5rem 1rem' : '0.5rem 1rem', // Padding adjustments
    borderRadius: '9999px', // Fully rounded
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
      setIsMobile(width < 799);
      setIsTablet(width >= 799 && width < 1200);
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
    <div style={styles.container(isMobile, isTablet)}>
      <h2 style={styles.heading(isMobile, isTablet)}>
        {ForsideData.title1} <br />
        <span style={styles.animatedText(isMobile, isTablet)}>
          {texts[index]}
        </span> <br />
        {ForsideData.title3}
      </h2>
      <a
        href="/Contact"
        style={styles.button(isMobile, isTablet)}
      >
        {ForsideData.button}
      </a>
    </div>
  );
}

export default Header;
