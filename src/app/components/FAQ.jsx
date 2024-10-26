"use client"

import React, { useEffect, useState } from 'react'
import { faqData } from '../data/faqData'

// const getClasses = (isMobile) => ({
//   title: {
//     fontSize: isMobile ? '25px' : '40px',
//     lineHeight: isMobile ? '3rem' : '5rem',
//     marginBottom: '20px',
//     textAlign: 'center',
//   },
//   faq: {
//     padding: isMobile ? '0.5rem' : '1rem',
//     paddingLeft: '1.8rem',
//     backdropFilter: 'blur(20px)',
//     borderColor: 'white',
//     borderWidth: 'thin',
//     borderRadius: '25px',
//     marginBottom: '1rem',
//   },
// });

function FAQ() {

  return (
    <div>
        <h1 >{faqData.faqtitle}</h1>

        <div>
            <p >{faqData.faq1}</p>
        </div>

        <div>
           <p >{faqData.faq2}</p>
        </div>

        <div>
            <p >{faqData.faq3}</p>
        </div>
    </div>
  )
}

export default FAQ