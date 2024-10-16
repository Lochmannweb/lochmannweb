"use client"

import React, { useEffect, useState } from 'react'
import { faqData } from '../data/faqData'

const getClasses = (isMobile) => ({
  title: {
    fontSize: isMobile ? '25px' : '40px',
    lineHeight: isMobile ? '3rem' : '5rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  faq: {
    padding: isMobile ? '0.5rem' : '1rem',
    paddingLeft: '1.8rem',
    backdropFilter: 'blur(20px)',
    borderColor: 'white',
    borderWidth: 'thin',
    borderRadius: '25px',
    marginBottom: '1rem',
  },
});

function FAQ() {
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

  const classes = getClasses(isMobile);

  return (
    <div>
        <h1 style={classes.title}>{faqData.faqtitle}</h1>

        <div>
            <p style={classes.faq}>{faqData.faq1}</p>
        </div>

        <div>
           <p style={classes.faq}>{faqData.faq2}</p>
        </div>

        <div>
            <p style={classes.faq}>{faqData.faq3}</p>
        </div>
    </div>
  )
}

export default FAQ