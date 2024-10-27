"use client"

import React, { useEffect, useState } from 'react';
import { MyWorkData } from '../data/MyWorkData';
import Image from 'next/image';

const styles = {
  bg: (isMobile, isTablet) => ({
    backgroundColor: '#0000008e',
    marginLeft: isMobile ? '' : isTablet ? '-10rem' : '-23rem',
    marginRight: isMobile ? '' : isTablet ? '-10rem' : '-23rem',
  }),
  container: (isMobile, isTablet) => ({
    display: isMobile ? '' : '',
    paddingTop: isMobile ? '1rem' : isTablet ? '2rem' : '3rem',
    paddingBottom: isMobile ? '1rem' : isTablet ? '2rem' : '3rem',
  }),
  headerContainer: (isMobile) => ({
    textAlign: 'center',
    paddingBottom: '1rem',
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '10px' : isTablet ? '12px' : '15px',
  }),
  content: (isMobile, isTablet) => ({
    fontSize: isMobile ? '20px' : isTablet ? '25px' : '30px',
  }),
  myWorkContainer: (isMobile, isTablet) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? 'none' : isTablet ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
    paddingLeft: isMobile ? '1rem' : isTablet ? '12rem' : '24.5rem',
    paddingRight: isMobile ? '1rem' : isTablet ? '12rem' : '24.5rem',
    gap: isMobile ? '1rem' : isTablet ? '2rem' : '3rem',
  }),
  myWorkBorder: {
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1',
    borderWidth: 'thin',
    borderStyle: 'solid',
    padding: '',
  },
  hr: (isMobile) => ({
    width: isMobile ? '10rem' : '20rem',
    margin: 'auto',
  }),
};

const MyWork = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 799);
      setIsTablet(width >= 799 && width < 1200);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.bg(isMobile, isTablet)}>
      <div style={styles.container(isMobile, isTablet)}>
        <div style={styles.headerContainer(isMobile)}>
          <h1 style={styles.title(isMobile, isTablet)}>{MyWorkData.title}</h1>
          <hr style={styles.hr(isMobile)} />
          <h2 style={styles.content(isMobile, isTablet)}>{MyWorkData.content}</h2>
        </div>

        <div style={styles.myWorkContainer(isMobile, isTablet)}>
          <div style={styles.myWorkBorder}>
            <Image
              src="/foofest-project.png"
              alt='profil'
              width={1000}
              height={1000}
            />
            <h3>{MyWorkData.project1.title}</h3>
          </div>
          <div style={styles.myWorkBorder}>
            <Image
              src="/cgc-project.png"
              alt='profil'
              width={1000}
              height={1000}
            />
            <h3>{MyWorkData.project2.title}</h3>
          </div>
          <div style={styles.myWorkBorder}>
            <Image
              src="/ca-project.png"
              alt='profil'
              width={1000}
              height={1000}
            />
            <h3>{MyWorkData.project3.title}</h3>
          </div>
          <div style={styles.myWorkBorder}>
            <Image
              src="/charlietango-project.png"
              alt='profil'
              width={1000}
              height={1000}
            />
            <h3>{MyWorkData.project4.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
