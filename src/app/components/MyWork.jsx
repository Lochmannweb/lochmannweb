"use client"

import React, { useEffect, useState } from 'react'
import { MyWorkData } from '../data/MyWorkData'
import Image from 'next/image';


// const getClasses = (isMobile) => ({
//   container: {
//     display: 'grid',
//     gap: '5px',
//     marginBottom: isMobile ? '5px' : '10rem',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: isMobile ? '10px' : '15px',
//   },
//   hr: {
//     width: isMobile ? '20%' : '20%',
//     margin: 'auto',
//   },
//   textContent: {
//     fontSize: isMobile ? '20px' : '50px',
//     marginBottom: isMobile ? '5px' : '50px',
//   },
//   myWorkContainer: {
//     padding: isMobile ? '5px' : '10px',
//     padding: isMobile ? '1rem' : '3rem',
//     borderRadius: isMobile ? '10px' : '25px',
//     borderWidth: 'thin',
//     borderColor: 'white',
//     backdropFilter: 'blur(20px)',
//   },
//   myWork: {
//     display: 'grid',
//     gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
//     gap: isMobile ? '1rem' : '5rem',
//     backdropFilter: 'blur(0%)',
//   },
//   projects: {
//     borderRadius: isMobile ? '10px' : '25px',
//     borderWidth: 'thin',
//     borderColor: 'white',
//     backgroundColor: 'black',
//     textAlign: 'start',
//     gap: '10px',
//   },
//   image: {
//     borderTopLeftRadius: isMobile ? '10px' : '25px',
//     borderTopRightRadius: isMobile ? '10px' : '25px',
//     marginBottom: '5px',
//   },
//   titleProjcet: {
//     fontSize: '',
//     padding: '1rem',
//   },
// });

const MyWork = () => {

  return (
    <div>
      <div>
        <h1 >{MyWorkData.title}</h1>
        <hr  />
        <h2 >{MyWorkData.content}</h2>
      </div>

      <div  >
        <div >

          <div >
            <Image         
               src="/foofest-project.png"
               alt='profil' 
               
               width={1000}
               height={1000}
            />
            <h3 >{MyWorkData.project1.title}</h3>
          </div>

          <div>
            <Image         
               src="/cgc-project.png"
               alt='profil'
               
               width={1000}
               height={1000}
            />
            <h3 >{MyWorkData.project2.title}</h3>
          </div>

          <div >
            <Image         
               src="/ca-project.png"
               alt='profil'
               
               width={1000}
               height={1000}
            />
            <h3 >{MyWorkData.project3.title}</h3>
          </div>

          <div >
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