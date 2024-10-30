"use client"

import React, { useEffect, useState } from 'react';
import { MyWorkData } from '../data/MyWorkData';
import Image from 'next/image';

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? '' : '',
    paddingTop: isMobile ? '1rem' : isTablet ? '1rem' : '2rem',
    paddingBottom: isMobile ? '5rem' : isTablet ? '5rem' : '5rem',
    padding: isMobile ? '1rem' : isTablet ? '7rem' : '0rem',
  }),
  headerContainer: (isMobile) => ({
    textAlign: 'center',
    paddingBottom: '1rem',
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '15px' : isTablet ? '15px' : '15px',
    // borderWidth: 'thin',
    // borderColor: 'white',
    // width: '8%',
    // margin: 'auto',
    // padding: '5px',
  }),
  header: (isMobile, isTablet) => ({
    fontSize: isMobile ? '1.9rem' : isTablet ? '1.9rem' : '40px',
    paddingBottom: isMobile ? '' : isTablet ? '' : '0px',
  }),
  myWorkContainer: (isMobile, isTablet) => ({
    display: isMobile ? 'grid' : isTablet ? 'grid' : 'grid',
    gridTemplateColumns: isMobile ? 'none' : isTablet ? '1fr 1fr' : '1fr 1fr',
    padding: isMobile ? '1rem' : isTablet ? '1rem' : '2rem',
    gap: isMobile ? '1rem' : isTablet ? '2rem' : '3rem',
    borderImage: 'linear-gradient(90deg, #840000, #FFF, #000, #FFF, #840000) 1',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderRadius: '25px',
    backdropFilter: isMobile ? 'blur(20px)' : isTablet ? 'blur(20px)' : 'blur(20px)',
  }),
  myWorkBorder: (isMobile, isTablet) => ({
    // borderImage: 'linear-gradient(90deg, #840000, #FFF, #000, #FFF, #840000) 1',
    // borderWidth: 'thin',
    // borderStyle: 'solid',
    // borderRadius: '25px',
    marginBottom: isMobile ? '1rem' : isTablet ? '2rem' : '0rem',
  }),
  filter: {
    filter: 'brightness(0.5)',
  },
  hr: (isMobile) => ({
    width: isMobile ? '10rem' : '10rem',
    margin: 'auto',
  }),
  projectTitle: {
    padding: '1rem',
  },
};

const MyWork = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 599);
      setIsTablet(width >= 799 && width < 1200);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div style={styles.container(isMobile, isTablet)}>
        <div style={styles.headerContainer(isMobile)}>
          {/* <h1 style={styles.title(isMobile, isTablet)}>{MyWorkData.title}</h1> */}
          {/* <hr style={styles.hr(isMobile)} /> */}
          <h2 style={styles.header(isMobile, isTablet)}>{MyWorkData.content}</h2>
        </div>

        <div style={styles.myWorkContainer(isMobile, isTablet)}>
          <div style={styles.myWorkBorder(isMobile, isTablet)}>
            <Image
              src="/foofest-project.png"
              alt='profil'
              width={1000}
              height={1000}
            />
            <h3 style={styles.projectTitle}>{MyWorkData.project1.title}</h3>
          </div>
          <div style={styles.myWorkBorder(isMobile, isTablet)}>
            <Image
              src="/cgc-project.png"
              alt='profil'
              width={1000}
              height={1000}
            />
            <h3 style={styles.projectTitle}>{MyWorkData.project2.title}</h3>
          </div>
          <div style={styles.myWorkBorder(isMobile, isTablet)}>
            <Image
              src="/ca-project.png"
              alt='profil'
              width={1000}
              height={1000}
              style={styles.filter}
            />
            <h3 style={styles.projectTitle}>{MyWorkData.project3.title}</h3>
          </div>
          <div style={styles.myWorkBorder(isMobile, isTablet)}>
            <Image
              src="/charlietango-project.png"
              alt='profil'
              width={1000}
              height={1000}
              style={styles.filter}
            />
            <h3 style={styles.projectTitle}>{MyWorkData.project4.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
