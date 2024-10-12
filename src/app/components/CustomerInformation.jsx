import React from 'react'
import { CustomerInformationsData } from '../data/CustomerInformationsData';

const CustomerInformation = () => {
  return (
    <div className='grid md:grid-cols-4 gap-5 bg-menu-bg md:p-10 md:px-56'> 
      <div>
        <h1>{CustomerInformationsData.contact.title}</h1>
        <hr className='w-44' />
        <h2>{CustomerInformationsData.contact.content}</h2>
        <h2>{CustomerInformationsData.contact.content2}</h2>
      </div>

      <div>
        <h1>{CustomerInformationsData.about.title}</h1>
        <hr className='w-44' />
        <h2>{CustomerInformationsData.about.content}</h2>
        <h2>{CustomerInformationsData.about.content2}</h2>
        <h2>{CustomerInformationsData.about.content3}</h2>
        <h2>{CustomerInformationsData.about.content4}</h2>
      </div>

      <div>
        <h1>{CustomerInformationsData.Ressourcer.title}</h1>
        <hr className='w-44' />
        <h2>{CustomerInformationsData.Ressourcer.content}</h2>
        <h2>{CustomerInformationsData.Ressourcer.content2}</h2>
        <h2>{CustomerInformationsData.Ressourcer.content3}</h2>
        <h2>{CustomerInformationsData.Ressourcer.content4}</h2>
      </div>

      <div>
        <h1>{CustomerInformationsData.Services.title}</h1>
        <hr className='w-52' />
        <h2>{CustomerInformationsData.Services.content}</h2>
        <h2>{CustomerInformationsData.Services.content2}</h2>
        <h2>{CustomerInformationsData.Services.content3}</h2>
        <h2>{CustomerInformationsData.Services.content4}</h2>
      </div>
    </div>
  )
}

export default CustomerInformation
