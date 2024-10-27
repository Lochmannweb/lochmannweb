"use client";

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";

const styles = {
  container: (device) => ({
    paddingTop: device === 'mobile' ? '3rem' : device === 'tablet' ? '4rem' : '5rem', // Adjusted padding for mobile, tablet, and desktop
    textAlign: 'center',
  }),
  heading: (device) => ({
    fontSize: device === 'mobile' ? '1.3rem' : device === 'tablet' ? '1.5rem' : '2rem', // Responsive font sizes
    lineHeight: device === 'mobile' ? '1.2' : device === 'tablet' ? '2.5rem' : '4rem', // Responsive line heights
    fontFamily: 'fantasy',
  }),
  animatedText: (device) => ({
    fontSize: device === 'mobile' ? '2rem' : device === 'tablet' ? '3rem' : '5rem', // Responsive font sizes
    fontWeight: 'bold',
    animation: 'pulse 1s infinite', // Animation
  }),
  button: (device) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '1rem', // Consistent margin
    width: device === 'mobile' ? '40%' : device === 'tablet' ? '30%' : '20%', // Adjusted width for each device
    padding: device === 'mobile' ? '0.5rem 0' : device === 'tablet' ? '0.5rem 1rem' : '0.5rem 1rem', // Padding adjustments
    borderRadius: '9999px', // Fully rounded
    border: '1px solid white',
    textAlign: 'center',
    color: 'white',
  }),
};

function Header() {
  const [device, setDevice] = useState('desktop'); // Default to desktop
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 599) {
        setDevice('mobile');
      } else if (width >= 599 && width < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
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
    <div style={styles.container(device)}>
      <h2 style={styles.heading(device)}>
        {ForsideData.title1} <br />
        <span style={styles.animatedText(device)}>
          {texts[index]}
        </span> <br />
        {ForsideData.title3}
      </h2>
      <a
        href="/Contact"
        style={styles.button(device)}
      >
        {ForsideData.button}
      </a>
    </div>
  );
}

export default Header;
