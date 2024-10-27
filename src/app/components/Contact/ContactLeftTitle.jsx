'use client'

import React, { useEffect, useState } from 'react';

const styles = {
  leftContainer: (isMobile) => ({
    textAlign: 'center',
    paddingTop: isMobile ? '5rem' : '10.5rem',
    paddingBottom: isMobile ? '8rem' : '3rem',
  }),
  leftContainerTitle: (isMobile) => ({
    fontSize: isMobile ? '15px' : '20px',
  }),
  span: (isMobile) => ({
    fontFamily: 'emoji',
    fontSize: isMobile ? '40px' : '70px',
  }),
};

function ContactLeftTitle() {
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

  return (
  <>
    <div style={styles.leftContainer(isMobile)}>
      <h1 style={styles.leftContainerTitle(isMobile)}>
        LET&apos;S 
          <br /> 
            <span style={styles.span(isMobile)}>ACHIEVE YOUR</span>
          <br /> 
        VISION
      </h1> 
    </div>
  </>
  );
}

export default ContactLeftTitle;
