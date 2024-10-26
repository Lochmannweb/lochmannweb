"use client"

import React, { useEffect, useState } from 'react'
import { ProcesStagesData } from '../data/ProcesStagesData'

const styles = {
  container: (isMobile) => ({
    display: isMobile ? '' : 'flow',
    gap: isMobile ? '1rem' : '3rem',
    margin: 'auto',
    borderWidth: 'thin',
    borderColor: 'white',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
    padding: isMobile ? '2rem' : '3rem',
    marginTop: isMobile ? '3rem' : '',
    backdropFilter: 'blur(20px)',
  }),
  title: (isMobile) => ({
    fontSize: isMobile ? '10px' : '20px',
  }), 
}

const ProcesStage = () => {
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
      <div>
        <h1 style={styles.title(isMobile)}>{ProcesStagesData.title}</h1>
        <hr />
        <h2>{ProcesStagesData.content}</h2>
      </div>

      <div>
        <div>
          <h1>{ProcesStagesData.project1.number}</h1>
          <h3>{ProcesStagesData.project1.title}</h3>
        </div>

        <div>
          <h1>{ProcesStagesData.project2.number}</h1>
          <h3 >{ProcesStagesData.project2.title}</h3>
        </div>

        <div>
          <h1 >{ProcesStagesData.project3.number}</h1>
          <h3 >{ProcesStagesData.project3.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProcesStage