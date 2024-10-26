"use client"

import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'

const container = {
  display: "grid",
  justifyContent: "center",
  backdropFilter: "blur(20px)", //md
  gap: '45px',
  border: "solid",
  borderWidth: "thin",
  width: "2rem",
  padding:  "0.5rem",
  borderRadius: '10px',
  marginBottom: '1rem',
  margin: 'auto',
}

// const getClasses = (isMobile) => ({

//   imageContainer: {
//     marginTop: isMobile ? '2px' : '8px',
//     marginBottom: isMobile ? '2px' : '8px',
//   },
//   aboutTextContainer: {
//     textAlign: 'start',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: isMobile ? '8px' : '10px',
//   },
//   subHeader: {
//     fontSize: isMobile ? '25px' : '40px',
//   },
//   content: {
//     fontSize: isMobile ? '15px' : '20px',
//   },
// });

const About = () => {

  return (
    <section >
      <div>
        <Image         
        src="/pf-about.png"
        alt='profil'
        width={100}
        height={100}
       />
      </div>

      <div style={container}>
        <h1>{AboutData.title}</h1>        
        <h2>{AboutData.subheader}</h2>
        <h3>{AboutData.content}</h3>
      </div>
    </section>
  )
}

export default About
