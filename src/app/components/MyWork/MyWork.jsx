"use client"

import React, { useEffect, useState } from 'react'
import { MyWorkPageData } from '@/app/data/MyWorkData'
import Image from 'next/image';


const getClasses = (isMobile) => ({
  bg: {
    backgroundColor: '#0000008e',
    marginLeft: '-23rem',
    marginRight: '-23rem',
  },
  container: {
    display: 'grid',
    gap: '5rem',
    marginTop: isMobile ? '5px' : '10rem',
    marginBottom: isMobile ? '5px' : '10rem',
    textAlign: 'center',
    paddingBottom: '5rem',
    paddingLeft: '23rem',
    paddingRight: '23rem',
  },
  title: {
    fontSize: isMobile ? '10px' : '20px',
    fontFamily: 'fantasy',
    paddingTop: '5rem',
  },
  header: {
    fontSize: isMobile ? '20px' : '50px',
    fontFamily: 'auto',
  },
  subheader: {
    paddingLeft: '16rem',
    paddingRight: '16rem',
  },
  myWorkContainer: {
    padding: isMobile ? '5px' : '10px',
    padding: isMobile ? '1rem' : '3rem',
  },
  myWork: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '1rem' : '5rem',
    backdropFilter: 'blur(0%)',
  },
  projects: {
    borderRadius: isMobile ? '10px' : '25px',
    borderWidth: 'thin',
    borderColor: 'white',
    backgroundColor: 'black',
    textAlign: 'start',
    gap: '10px',
  },
  image: {
    borderTopLeftRadius: isMobile ? '10px' : '25px',
    borderTopRightRadius: isMobile ? '10px' : '25px',
    marginBottom: '5px',
  },
  titleProjcet: {
    fontSize: '',
    padding: '1rem',
  },
});

const MyWork = () => {
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
    <>
    <div style={classes.bg}>
        <div style={classes.container}>
          <div>
            <h1 style={classes.title}>{MyWorkPageData.title}</h1>
            <h2 style={classes.header}>{MyWorkPageData.header}</h2>
            <h3 style={classes.subheader}>{MyWorkPageData.subheader}</h3>
          </div>
    
          <div style={classes.myWorkContainer} >
            <div style={classes.myWork}>
    
              <div style={classes.projects}>
                <Image         
                   src="/foofest-project.png"
                   alt='profil' 
                   style={classes.image}
                   width={1000}
                   height={1000}
                />
                <h3 style={classes.titleProjcet}>{MyWorkPageData.project1.title}</h3>
              </div>
    
              <div style={classes.projects}>
                <Image         
                   src="/cgc-project.png"
                   alt='profil'
                   style={classes.image}
                   width={1000}
                   height={1000}
                />
                <h3 style={classes.titleProjcet}>{MyWorkPageData.project2.title}</h3>
              </div>
    
              <div style={classes.projects}>
                <Image         
                   src="/ca-project.png"
                   alt='profil'
                   style={classes.image}
                   width={1000}
                   height={1000}
                />
                <h3 style={classes.titleProjcet}>{MyWorkPageData.project3.title}</h3>
              </div>
    
              <div style={classes.projects}>
                <Image         
                   src="/charlietango-project.png"
                   alt='profil'
                   style={classes.image}
                   width={1000}
                   height={1000}
                />
                <h3 style={classes.titleProjcet}>{MyWorkPageData.project4.title}</h3>
              </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default MyWork