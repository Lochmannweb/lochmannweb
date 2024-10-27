"use client"

import { ExperienceData } from "@/app/data/AboutData"
import Image from "next/image"
import React, { useEffect, useState } from 'react'

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? '' : 'grid',
    gap: isMobile ? '' : isTablet ? '' : '30px',
    margin: isMobile ? '1rem' : isTablet ? '1rem' : '',
    }),
  experienceContainer: (isMobile, isTablet) => ({
    padding: isMobile ? '' : isTablet ? '' : '0.5rem',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1',
    borderWidth: 'thin',
    borderColor: 'white',
    backdropFilter: "blur(20px)", 
  }),
  title: (isMobile, isTablet) => ({
    fontSize: isMobile ? '' : isMobile ? '8px' : isTablet ? '' : '20px',
    textAlign: isMobile ? '' : isTablet ? '' : 'center',
    display: isMobile ? '' : 'flex',
    justifyContent: isMobile ? '' : isTablet ? '' : 'center',
    alignItems: isMobile ? '' : isTablet ? '' : 'center',
  }),
  yearsExperience: (isMobile, isTablet) => ({
    fontSize: isMobile ? '' : isTablet ? '' : '40px',
  }),
  experience:(isMobile, isTablet) => ( {
    padding: isMobile ? '' : isTablet ? '' : '3rem',
    paddingLeft: isMobile ? '' : isTablet ? '' : '10rem',
    paddingRight: isMobile ? '' : isTablet ? '' : '10rem',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1',
    borderWidth: 'thin',
    borderColor: 'white',
    backdropFilter: "blur(20px)", 
    display: isMobile ? '' : 'grid',
    gap: isMobile ? '' : isTablet ? '' : '5rem',
    gridTemplateColumns: isMobile ? '' : isTablet ? '' : '1fr 1fr',
    justifyContent: isMobile ? '' : 'space-between',
  }),
  ec: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? '' : 'flex',
    alignItems: isMobile ? '' : isTablet ? '' : 'center',
  }),
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 600);
      setIsTablet(width >= 600 && width < 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section style={styles.container(isMobile, isTablet)}>
        <div style={styles.experienceContainer(isMobile, isTablet)}>
            <h1 style={styles.title(isMobile, isTablet)}> <span style={styles.yearsExperience(isMobile, isTablet)}>{ExperienceData.year}</span> {ExperienceData.title}</h1> 
        </div>

        <div style={styles.experience(isMobile, isTablet)}>
            <div>
                <div style={styles.ec(isMobile, isTablet)}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={styles.imageContainer}/>
                    <h1>{ExperienceData.experience.React}</h1>
                </div>
                <hr />
                <p>{ExperienceData.experience.ReactContent}</p>
            </div>

            <div>
                <div style={styles.ec(isMobile, isTablet)}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={styles.imageContainer}/>
                    <h1>{ExperienceData.experience.Database}</h1>
                </div>
                <hr />
                <p>{ExperienceData.experience.DatabaseContent}</p>
            </div>

            <div>
                <div style={styles.ec(isMobile, isTablet)}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={styles.imageContainer}/>
                    <h1>{ExperienceData.experience.React}</h1>
                </div>
                <hr />
                <p>{ExperienceData.experience.ReactContent}</p>
            </div>

            <div>
                <div style={styles.ec(isMobile, isTablet)}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={styles.imageContainer}/>
                    <h1>{ExperienceData.experience.Database}</h1>
                </div>
                <hr />
                <p>{ExperienceData.experience.DatabaseContent}</p>
            </div>
        </div>
    </section>
  )
}

export default About
