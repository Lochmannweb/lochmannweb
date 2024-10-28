"use client"

import React, { useEffect, useState } from 'react';
import { CustomerInformationsData } from '../data/CustomerInformationsData';

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? 'grid' : 'flex',
    gap: isMobile ? '1rem' : '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
    padding: '0.9rem',
    justifyContent: isMobile ? '' : isTablet ? 'space-around' : 'center',
    flexDirection: isTablet ? 'column' : 'row', 
  }),
  hr: (isMobile, isTablet) => ({
    width: isMobile ? '100%' : isTablet ? '100%' : '50%',
  }),
  title: (isMobile) => ({
    fontSize: isMobile ? '15px' : '18px',
  }),
  linksContainer: (isMobile) => ({
    lineHeight: '1.2rem',
    display: 'grid',
    marginTop: '10px',
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
      setIsMobile(width < 599);
      setIsTablet(width >= 599 && width < 1200); // Tablet size
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
        <hr style={styles.hr(isMobile, isTablet)} />
        <div style={styles.linksContainer(isMobile)}>
           <a href='/Contact' style={styles.a(isMobile)}>{CustomerInformationsData.contact.content2}</a>
           <a href='/Contact' style={styles.a(isMobile)}>{CustomerInformationsData.contact.content}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.about.title}</h1>
        <hr style={styles.hr(isMobile, isTablet)} />
        <div style={styles.linksContainer(isMobile)}>
           <a href='/About' style={styles.a(isMobile)}>{CustomerInformationsData.about.content}</a>
           <a href='/About' style={styles.a(isMobile)}>{CustomerInformationsData.about.content2}</a>
           <a href='/MyWork' style={styles.a(isMobile)}>{CustomerInformationsData.about.content3}</a>
           <a href='/MyWork' style={styles.a(isMobile)}>{CustomerInformationsData.about.content4}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.Ressourcer.title}</h1>
        <hr style={styles.hr(isMobile, isTablet)} />
        <div style={styles.linksContainer(isMobile)}>
          <a href='/' >{CustomerInformationsData.Ressourcer.content2}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content3}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content4}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.Services.title}</h1>
        <hr style={styles.hr(isMobile, isTablet)} />
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
