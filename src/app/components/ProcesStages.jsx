"use client"

import React, { useEffect, useState } from 'react'
import { ProcesStagesData } from '../data/ProcesStagesData'

const getClasses = (isMobile) => ({
  container: {
    display: 'grid',
    gap: '5px',
    marginBottom: isMobile ? '5px' : '10rem',
    textAlign: 'center',
    backdropFilter: 'blur(20px)',
  },
  title: {
    fontSize: isMobile ? '10px' : '15px',
  },
  hr: {
    width: isMobile ? '20%' : '20%',
    margin: 'auto',
  },
  content: {
    fontSize: isMobile ? '28px' : '50px',
    paddingLeft: isMobile ? '30px' : '20rem',
    paddingRight: isMobile ? '30px' : '20rem',
    marginBottom: isMobile ? '5px' : '50px',
    lineHeight: isMobile ? '' : '3rem',
  },
  stagesContainer: {
    display: isMobile ? 'grid' : 'flex',
    justifyContent: isMobile ? '' : 'center',
    borderWidth: 'thin',
    borderRadius: isMobile ? '15px' : '25px',
    padding: isMobile ? '1rem' : '2rem',
    gap: isMobile ? '10px' : '20px',
    width: isMobile ? "20rem" : "70rem",
    margin: 'auto',
  },
  stages: {
    borderWidth: 'thin',
    borderRadius: isMobile ? '10px' : '25px',
    width: isMobile ? '18rem' : '20rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    display: 'grid',
    gap: '1rem',
  },
  numbers: {
    borderRadius: '50%',
    borderWidth: 'thin',
    width: '3rem',
    height: '3rem',
    margin: 'auto',
    textAlign: 'center',
    fontSize: isMobile ? '28px' : '28px',
  },
  ProcesStagesTitle: {
    fontSize: isMobile ? '15px' : '25px',
  },
});

const ProcesStage = () => {

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
        <h1 style={classes.title}>{ProcesStagesData.title}</h1>
        <hr style={classes.hr} />
        <h2 style={classes.content}>{ProcesStagesData.content}</h2>
      </div>

      <div style={classes.stagesContainer}>
        <div style={classes.stages} className='bg-stagesProces'>
          <h1 style={classes.numbers}>{ProcesStagesData.project1.number}</h1>
          <h3 style={classes.ProcesStagesTitle}>{ProcesStagesData.project1.title}</h3>
        </div>

        <div style={classes.stages} className='bg-stagesProces'>
          <h1 style={classes.numbers}>{ProcesStagesData.project2.number}</h1>
          <h3 style={classes.ProcesStagesTitle}>{ProcesStagesData.project2.title}</h3>
        </div>

        <div style={classes.stages} className='bg-stagesProces'>
          <h1 style={classes.numbers}>{ProcesStagesData.project3.number}</h1>
          <h3 style={classes.ProcesStagesTitle}>{ProcesStagesData.project3.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProcesStage