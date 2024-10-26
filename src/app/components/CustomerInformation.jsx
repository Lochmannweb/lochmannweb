"use client"

import React from 'react'
import { CustomerInformationsData } from '../data/CustomerInformationsData';

// const getClasses = (isMobile) => ({
//   container: {
//     display: isMobile ? 'grid' : 'flex',
//     gap: isMobile ? '1rem' : '5rem',
//     backgroundColor: 'rgba(0, 0, 0, 0.49)',
//     padding: '0.9rem',
//     paddingLeft: isMobile ? '2rem' : '22rem',
//   },
//   hr: {
//     width: isMobile ? '4rem' : '15rem',
//   },
//   title: {
//     fontSize: '15px',
//     marginBottom: '5px',
//   },
//   subheader: {
//     fontSize: '11px',
//   },
//   contentLinks: {
//     display: 'grid',
//   },
//   a: {
//     color: 'black',
//   },
// });

const CustomerInformation = () => {

  return (
    <div > 
      <div >
        <h1 >{CustomerInformationsData.contact.title}</h1>
        <hr  />
        <a href='/Contact'>{CustomerInformationsData.contact.content}</a>
        <a href='/Contact'>{CustomerInformationsData.contact.content2}</a>
      </div>

      <div >
        <h1 >{CustomerInformationsData.about.title}</h1>
        <hr  />
        <a href='/About' >{CustomerInformationsData.about.content}</a>
        <a href='/About' >{CustomerInformationsData.about.content2}</a>
        <a href='/MyWork' >{CustomerInformationsData.about.content3}</a>
        <a href='/MyWork' >{CustomerInformationsData.about.content4}</a>
      </div>

      <div >
        <h1 >{CustomerInformationsData.Ressourcer.title}</h1>
        <hr  />
        <a href='/' >{CustomerInformationsData.Ressourcer.content2}</a>
        <a href='/Ressourcer' >{CustomerInformationsData.Ressourcer.content3}</a>
        <a href='/Ressourcer' >{CustomerInformationsData.Ressourcer.content4}</a>
        <a href='/Ressourcer' >{CustomerInformationsData.Ressourcer.content}</a>
      </div>

      <div >
        <h1 >{CustomerInformationsData.Services.title}</h1>
        <hr  />
        <a href='/Services' >{CustomerInformationsData.Services.content}</a>
        <a href='/Services' >{CustomerInformationsData.Services.content2}</a>
        <a href='/Services' >{CustomerInformationsData.Services.content3}</a>
        <a href='/Services' >{CustomerInformationsData.Services.content4}</a>
      </div>
    </div>
  )
}

export default CustomerInformation
