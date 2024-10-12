import React from 'react'
import { faqData } from '../data/faqData'

function FAQ() {
  return (
    <div className='grid m-auto mb-56'>
        <h1>{faqData.faqtitle}</h1>

        <div>
            <p>{faqData.faq1}</p>
        </div>

        <div>
           <p>{faqData.faq2}</p>
        </div>

        <div>
            <p>{faqData.faq3}</p>
        </div>
    </div>
  )
}

export default FAQ