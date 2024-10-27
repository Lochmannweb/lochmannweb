"use client"

import React, { useEffect, useState } from 'react'
import { faqData } from '../data/faqData'

const styles = {
  container: (isMobile) => ({
    paddingLeft: isMobile ? '' : '5.5rem',
    paddingRight: isMobile ? '' : '5.5rem',
  }),
  faqTitle: (isMobile) => ({
    fontSize: isMobile ? '1.5rem' : '3rem',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  }),
  faqContainer: (isMobile) => ({
    padding: isMobile ? '1rem' : '1.5rem',
    backdropFilter: 'blur(20px)',
    borderColor: 'white',
    borderWidth: 'thin',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
    display: isMobile ? 'grid' : 'flex',
    gap: '5rem',
    marginBottom: isMobile ? '1rem' : '1rem',
    paddingLeft: isMobile ? '1rem' : '3rem',
  }),
}

function FAQ() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 599);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.container(isMobile)}>
        <h1 style={styles.faqTitle(isMobile)}>{faqData.faqtitle}</h1>

        <div style={styles.faqContainer(isMobile)}>
            <p>{faqData.faq1}</p>
        </div>

        <div style={styles.faqContainer(isMobile)}>
           <p >{faqData.faq2}</p>
        </div>

        <div style={styles.faqContainer(isMobile)}> 
            <p >{faqData.faq3}</p>
        </div>
    </div>
  )
}

export default FAQ