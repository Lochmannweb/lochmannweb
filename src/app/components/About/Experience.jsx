"use client"

import { ExperienceData } from "@/app/data/AboutData"
import Image from "next/image"
import React, { useEffect, useState } from 'react'

const getClasses = (isMobile) => ({
  container: {
    display: isMobile ? '' : 'grid',
    gap: isMobile ? '' : '30px',
    },
  experienceContainer: {
    padding: isMobile ? '' : '0.5rem',
    borderRadius: isMobile ? '10px' : '25px',
    borderWidth: 'thin',
    borderColor: 'white',
    backdropFilter: "blur(20px)", 
  },
  title: {
    fontSize: isMobile ? '' : isMobile ? '8px' : '20px',
    textAlign: isMobile ? '' : 'center',
    display: isMobile ? '' : 'flex',
    justifyContent: isMobile ? '' : 'center',
    alignItems: isMobile ? '' : 'center',
  },
  yearsExperience: {
    fontSize: isMobile ? '' : '40px',
  },
  experience: {
    padding: isMobile ? '' : '3rem',
    paddingLeft: isMobile ? '' : '10rem',
    paddingRight: isMobile ? '' : '10rem',
    borderRadius: isMobile ? '10px' : '25px',
    borderWidth: 'thin',
    borderColor: 'white',
    backdropFilter: "blur(20px)", 
    display: isMobile ? '' : 'grid',
    gap: isMobile ? '' : '5rem',
    gridTemplateColumns: isMobile ? '' : '1fr 1fr',
    justifyContent: isMobile ? '' : 'space-between',
  },
  ec: {
    display: isMobile ? '' : 'flex',
    alignItems: isMobile ? '' : 'center',
  },
});

const About = () => {
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
    <section style={classes.container}>
        <div style={classes.experienceContainer}>
            <h1 style={classes.title}> <span style={classes.yearsExperience}>{ExperienceData.year}</span> {ExperienceData.title}</h1> 
        </div>

        <div style={classes.experience}>
            <div>
                <div style={classes.ec}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={classes.imageContainer}/>
                    <h1>{ExperienceData.experience.React}</h1>
                </div>
                <hr />
                <p>{ExperienceData.experience.ReactContent}</p>
            </div>

            <div>
                <div style={classes.ec}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={classes.imageContainer}/>
                    <h1>{ExperienceData.experience.Database}</h1>
                </div>
                <hr />
                <p>{ExperienceData.experience.DatabaseContent}</p>
            </div>

            <div>
                <div style={classes.ec}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={classes.imageContainer}/>
                    <h1>{ExperienceData.experience.React}</h1>
                </div>
                <hr />
                <p>{ExperienceData.experience.ReactContent}</p>
            </div>

            <div>
                <div style={classes.ec}>
                    <Image         
                    src="/pf-about.png"
                    alt='profil'
                    width={100}
                    height={100}
                    style={classes.imageContainer}/>
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
