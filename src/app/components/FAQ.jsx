"use client"

import React, { useEffect, useState } from 'react'
import { faqData } from '../data/faqData'

const styles = {
  container: (isMobile, isTablet) => ({
    paddingLeft: isMobile ? '1rem' : isTablet ? '1rem' : '5.5rem',
    paddingRight: isMobile ? '1rem' : isTablet ? '1rem' : '5.5rem',
  }),
  faqTitle: (isMobile, isTablet) => ({
    fontSize: isMobile ? '1.5rem' : isTablet ? '' : '3rem',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  }),
  faqContainer: (isMobile, isTablet) => ({
    padding: isMobile ? '1rem' : isTablet ? '' : '1.5rem',
    backdropFilter: 'blur(20px)',
    borderColor: 'white',
    borderWidth: 'thin',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
    display: isMobile ? 'grid' : isTablet ? '' : 'flex',
    gap: '5rem',
    marginBottom: isMobile ? '1rem' : isTablet ? '' : '1rem',
    paddingLeft: isMobile ? '1rem' : isTablet ? '' : '3rem',
  }),
}

function FAQ() {
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
    <div style={styles.container(isMobile, isTablet)}>
        <h1 style={styles.faqTitle(isMobile, isTablet)}>{faqData.faqtitle}</h1>

        <div style={styles.faqContainer(isMobile, isTablet)}>
            <p>{faqData.faq1}</p>
        </div>

        <div style={styles.faqContainer(isMobile, isTablet)}>
           <p >{faqData.faq2}</p>
        </div>

        <div style={styles.faqContainer(isMobile, isTablet)}> 
            <p >{faqData.faq3}</p>
        </div>
    </div>
  )
}

export default FAQ