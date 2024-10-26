"use client"

import React, { useEffect, useState } from 'react'
import { CustomerInformationsData } from '../data/CustomerInformationsData';

const styles = {
  container: (isMobile) => ({
    display: isMobile ? 'grid' : 'flex',
    gap: isMobile ? '1rem' : '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
    padding: '0.9rem',
    justifyContent: isMobile ? '' : 'center',
  }),
  hr: (isMobile) => ({
    width: isMobile ? '100%' : '15rem',
  }),
  title: (isMobile) => ({
    fontSize: '15px',
  }),
  linksContainer: (isMobile) => ({
    lineHeight: '1.2rem',
    display: 'grid',
    marginTop: '10px',
  }),
  a: (isMobile) => ({
    fontSize: '12px',
  }),
}

const CustomerInformation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 799);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.container(isMobile)}> 
      <div >
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.contact.title}</h1>
        <hr style={styles.hr(isMobile)} />
        <div style={styles.linksContainer(isMobile)}>
           <a href='/Contact' style={styles.a(isMobile)}>{CustomerInformationsData.contact.content2}</a>
           <a href='/Contact' style={styles.a(isMobile)}>{CustomerInformationsData.contact.content}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.about.title}</h1>
        <hr style={styles.hr(isMobile)} />
        <div style={styles.linksContainer(isMobile)}>
           <a href='/About' style={styles.a(isMobile)}>{CustomerInformationsData.about.content}</a>
           <a href='/About' style={styles.a(isMobile)}>{CustomerInformationsData.about.content2}</a>
           <a href='/MyWork' style={styles.a(isMobile)}>{CustomerInformationsData.about.content3}</a>
           <a href='/MyWork' style={styles.a(isMobile)}>{CustomerInformationsData.about.content4}</a>
        </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.Ressourcer.title}</h1>
        <hr style={styles.hr(isMobile)} />
        <div style={styles.linksContainer(isMobile)}>
          <a href='/' >{CustomerInformationsData.Ressourcer.content2}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content3}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content4}</a>
          <a href='/Ressourcer' style={styles.a(isMobile)}>{CustomerInformationsData.Ressourcer.content}</a>
          </div>
      </div>

      <div>
        <h1 style={styles.title(isMobile)}>{CustomerInformationsData.Services.title}</h1>
        <hr style={styles.hr(isMobile)} />
        <div style={styles.linksContainer(isMobile)}>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content}</a>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content2}</a>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content3}</a>
          <a href='/Services' style={styles.a(isMobile)}>{CustomerInformationsData.Services.content4}</a>
          </div>
      </div>
    </div>
  )
}

export default CustomerInformation
