"use client"

import React, { useEffect, useState } from 'react';
import { CustomerInformationsData } from '../data/CustomerInformationsData';

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? 'flex' : 'flex',
    gap: isMobile ? '1rem' : isTablet ? '4rem' : '12.3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
    padding: isMobile ? '0.9rem' : isTablet ? '1rem' : '1rem',
    justifyContent: isMobile ? '' : isTablet ? 'space-around' : 'center',
    justifyContent: isMobile ? '' : isTablet ? 'center' : 'center', 
  }),
  hr: (isMobile, isTablet) => ({
    width: isMobile ? '100%' : isTablet ? '100%' : '100%',
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '15px' : isTablet ? '10px' : '18px',
  }),
  linksContainer: (isMobile) => ({
    lineHeight: '1.2rem',
    display: 'grid',
    marginTop: '10px',
    color: 'grey',
  }),
  a: (isMobile) => ({
    fontSize: isMobile ? '12px' : '14px',
  }),
}

const CustomerInformation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width > 599);
      setIsTablet(width < 760 && width < 1200); 
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.container(isMobile, isTablet)}> 
      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.contact.title}</h1>
        {/* <hr style={styles.hr(isMobile, isTablet)} /> */}
        <div style={styles.linksContainer(isMobile)}>
           <a href='/Contact' style={styles.a(isMobile)}>{CustomerInformationsData.contact.content2}</a>
           <a href='/Contact' style={styles.a(isMobile)}>{CustomerInformationsData.contact.content}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.about.title}</h1>
        {/* <hr style={styles.hr(isMobile, isTablet)} /> */}
        <div style={styles.linksContainer(isMobile)}>
           <a href='/About' style={styles.a(isMobile)}>{CustomerInformationsData.about.content}</a>
           <a href='/About' style={styles.a(isMobile)}>{CustomerInformationsData.about.content2}</a>
           <a href='/MyWork' style={styles.a(isMobile)}>{CustomerInformationsData.about.content3}</a>
           <a href='/MyWork' style={styles.a(isMobile)}>{CustomerInformationsData.about.content4}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.Ressourcer.title}</h1>
        {/* <hr style={styles.hr(isMobile, isTablet)} /> */}
        <div style={styles.linksContainer(isMobile)}>
          <a href='/' >{CustomerInformationsData.Ressourcer.content2}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content3}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content4}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.Services.title}</h1>
        {/* <hr style={styles.hr(isMobile, isTablet)} /> */}
        <div style={styles.linksContainer(isMobile)}>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content}</a>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content2}</a>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content3}</a>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content4}</a>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation;
