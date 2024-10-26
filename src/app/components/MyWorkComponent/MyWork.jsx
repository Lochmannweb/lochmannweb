"use client"

import React, { useEffect, useState } from 'react'
import { MyWorkData } from '../../data/MyWorkData'
import Image from 'next/image';

const styles = {
  bg: (isMobile) => ({
    backgroundColor: '#0000008e',
    marginLeft: isMobile ? '' : '-23rem',
    marginRight: isMobile ? '' : '-23rem',
  }),
  container: (isMobile) => ({
    display: isMobile ? '' : '',
    paddingTop: isMobile ? '1rem' : '3rem',
    paddingBottom: isMobile ? '1rem' : '3rem',
  }),
  headerContainer: (isMobile) => ({
    textAlign: 'center',
    paddingBottom: isMobile ? '1rem' : '1rem',
  }),
  title: (isMobile) => ({
    fontSize: isMobile ? '10px' : '15px',
  }),
  content: (isMobile) => ({
    fontSize: isMobile ? '20px' : '30px',
  }),
  myWorkContainer: (isMobile) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? 'none' : 'repeat(2, 1fr)',
    paddingLeft: isMobile ? '1rem' : '24.5rem',
    paddingRight: isMobile ? '1rem' : '24.5rem',
    gap: isMobile ? '1rem' : '3rem',
  }),
  myWorkBorder: (isMobile) => ({
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
    padding: isMobile ? '' : '',
    borderWidth: 'thin',
    borderStyle: 'solid',
  }),
  hr: (isMobile) => ({
    width: isMobile ? '10rem' : '20rem',
    margin: 'auto',
  }),
}

const MyWork = () => {
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
  <div style={styles.bg(isMobile)}>
    <div style={styles.container(isMobile)}>
      <div style={styles.headerContainer(isMobile)}>
        <h1 style={styles.title(isMobile)}>{MyWorkData.title}</h1>
        <hr style={styles.hr(isMobile)} />
        <h2 style={styles.content(isMobile)}>{MyWorkData.content}</h2>
      </div>

      <div style={styles.myWorkContainer(isMobile)}>
        <div style={styles.myWorkBorder(isMobile)}>
          <Image         
             src="/foofest-project.png"
             alt='profil' 
             
             width={1000}
             height={1000}
          />
          <h3 >{MyWorkData.project1.title}</h3>
        </div>
        <div style={styles.myWorkBorder(isMobile)}>
          <Image         
             src="/cgc-project.png"
             alt='profil'
             
             width={1000}
             height={1000}
          />
          <h3 >{MyWorkData.project2.title}</h3>
        </div>
        <div style={styles.myWorkBorder(isMobile)}>
          <Image         
             src="/ca-project.png"
             alt='profil'
             
             width={1000}
             height={1000}
          />
          <h3 >{MyWorkData.project3.title}</h3>
        </div>
        <div style={styles.myWorkBorder(isMobile)}>
          <Image         
             src="/charlietango-project.png"
             alt='profil'
             
             width={1000}
             height={1000}
          />
          <h3 >{MyWorkData.project4.title}</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MyWork