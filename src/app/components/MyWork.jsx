"use client"

import React, { useEffect, useState } from 'react'
import { MyWorkData } from '../data/MyWorkData'
import Image from 'next/image';


const getClasses = (isMobile) => ({
  container: {
    display: 'grid',
    gap: '5px',
    marginBottom: isMobile ? '5px' : '10rem',
    textAlign: 'center',
  },
  title: {
    fontSize: isMobile ? '10px' : '15px',
  },
  hr: {
    width: isMobile ? '20%' : '20%',
    margin: 'auto',
  },
  textContent: {
    fontSize: isMobile ? '20px' : '50px',
    marginBottom: isMobile ? '5px' : '50px',
  },
  myWorkContainer: {
    padding: isMobile ? '5px' : '10px',
    // borderRadius: isMobile ? '10px' : '25px',
    // borderWidth: 'thin',
    // borderColor: 'white',
    // backdropFilter: 'blur(20%)',
    padding: isMobile ? '1rem' : '3rem',
  },
  myWork: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '1rem' : '5rem',
    backdropFilter: 'blur(0%)',
  },
  projects: {
    height: '1rem',
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
    <div style={classes.container}>
      <div>
        <h1 style={classes.title}>{MyWorkData.title}</h1>
        <hr style={classes.hr} />
        <h2 style={classes.textContent}>{MyWorkData.content}</h2>
      </div>

      <div style={classes.myWorkContainer} >
        <div style={classes.myWork}>

          <div style={classes.projects}>
            <Image         
               src="/foofest-project.png"
               alt='profil'
               width={isMobile ? 50 : 300}
               height={isMobile ? 50 : 300}
               style={classes.imageContainer}
            />
            <h3 className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div style={classes.projects}>
            <Image         
               src="/cgc-project.png"
               alt='profil'
               width={isMobile ? 50 : 300}
               height={isMobile ? 50 : 300}
               style={classes.imageContainer}
            />
            <h3 className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div style={classes.projects}>
            <Image         
               src="/ca-project.png"
               alt='profil'
               width={isMobile ? 50 : 300}
               height={isMobile ? 50 : 300}
               style={classes.imageContainer}
            />
            <h3 className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div style={classes.projects}>
            <Image         
               src="/charlietango-project.png"
               alt='profil'
               width={isMobile ? 50 : 300}
               height={isMobile ? 50 : 300}
               style={classes.imageContainer}
            />
            <h3 className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>
      </div>
      </div>
    </div>
  )
}

export default MyWork