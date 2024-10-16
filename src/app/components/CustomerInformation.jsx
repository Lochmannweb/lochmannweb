"use client"

import React, { useEffect, useState } from 'react'
import { CustomerInformationsData } from '../data/CustomerInformationsData';

const getClasses = (isMobile) => ({
  container: {
    display: isMobile ? 'grid' : 'flex',
    gap: isMobile ? '2rem' : '5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
    padding: '1rem',
    paddingLeft: isMobile ? '2rem' : '22rem',
  },
  hr: {
    width: isMobile ? '4rem' : '15rem',
  },
});

const CustomerInformation = () => {
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
    <div style={classes.container}> 
      <div>
        <h1>{CustomerInformationsData.contact.title}</h1>
        <hr style={classes.hr} />
        <h2>{CustomerInformationsData.contact.content}</h2>
        <h2>{CustomerInformationsData.contact.content2}</h2>
      </div>

      <div>
        <h1>{CustomerInformationsData.about.title}</h1>
        <hr style={classes.hr} />
        <h2>{CustomerInformationsData.about.content}</h2>
        <h2>{CustomerInformationsData.about.content2}</h2>
        <h2>{CustomerInformationsData.about.content3}</h2>
        <h2>{CustomerInformationsData.about.content4}</h2>
      </div>

      <div>
        <h1>{CustomerInformationsData.Ressourcer.title}</h1>
        <hr style={classes.hr} />
        <h2>{CustomerInformationsData.Ressourcer.content}</h2>
        <h2>{CustomerInformationsData.Ressourcer.content2}</h2>
        <h2>{CustomerInformationsData.Ressourcer.content3}</h2>
        <h2>{CustomerInformationsData.Ressourcer.content4}</h2>
      </div>

      <div>
        <h1>{CustomerInformationsData.Services.title}</h1>
        <hr style={classes.hr} />
        <h2>{CustomerInformationsData.Services.content}</h2>
        <h2>{CustomerInformationsData.Services.content2}</h2>
        <h2>{CustomerInformationsData.Services.content3}</h2>
        <h2>{CustomerInformationsData.Services.content4}</h2>
      </div>
    </div>
  )
}

export default CustomerInformation
