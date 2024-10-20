"use client"

import React, { useEffect, useState } from 'react'
import { CustomerInformationsData } from '../data/CustomerInformationsData';

const getClasses = (isMobile) => ({
  container: {
    display: isMobile ? 'grid' : 'flex',
    gap: isMobile ? '1rem' : '5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
    padding: '0.9rem',
    paddingLeft: isMobile ? '2rem' : '22rem',
  },
  hr: {
    width: isMobile ? '4rem' : '15rem',
  },
  title: {
    fontSize: '15px',
    marginBottom: '5px',
  },
  subheader: {
    fontSize: '11px',
  },
  contentLinks: {
    display: 'grid',
  },
  a: {
    color: 'black',
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
      <div style={classes.contentLinks}>
        <h1 style={classes.title}>{CustomerInformationsData.contact.title}</h1>
        <hr style={classes.hr} />
        <a href='/Contact' style={classes.subheader}>{CustomerInformationsData.contact.content}</a>
        <a href='/Contact' style={classes.subheader}>{CustomerInformationsData.contact.content2}</a>
      </div>

      <div style={classes.contentLinks}>
        <h1 style={classes.title}>{CustomerInformationsData.about.title}</h1>
        <hr style={classes.hr} />
        <a href='/About' style={classes.subheader}>{CustomerInformationsData.about.content}</a>
        <a href='/About' style={classes.subheader}>{CustomerInformationsData.about.content2}</a>
        <a href='/MyWork' style={classes.subheader}>{CustomerInformationsData.about.content3}</a>
        <a href='/MyWork' style={classes.subheader}>{CustomerInformationsData.about.content4}</a>
      </div>

      <div style={classes.contentLinks}>
        <h1 style={classes.title}>{CustomerInformationsData.Ressourcer.title}</h1>
        <hr style={classes.hr} />
        <a href='/' style={classes.subheader}>{CustomerInformationsData.Ressourcer.content2}</a>
        <a href='/Ressourcer' style={classes.subheader}>{CustomerInformationsData.Ressourcer.content3}</a>
        <a href='/Ressourcer' style={classes.subheader}>{CustomerInformationsData.Ressourcer.content4}</a>
        <a href='/Ressourcer' style={classes.subheader}>{CustomerInformationsData.Ressourcer.content}</a>
      </div>

      <div style={classes.contentLinks}>
        <h1 style={classes.title}>{CustomerInformationsData.Services.title}</h1>
        <hr style={classes.hr} />
        <a href='/Services' style={classes.subheader}>{CustomerInformationsData.Services.content}</a>
        <a href='/Services' style={classes.subheader}>{CustomerInformationsData.Services.content2}</a>
        <a href='/Services' style={classes.subheader}>{CustomerInformationsData.Services.content3}</a>
        <a href='/Services' style={classes.subheader}>{CustomerInformationsData.Services.content4}</a>
      </div>
    </div>
  )
}

export default CustomerInformation
