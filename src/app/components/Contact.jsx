import React from 'react'
import { ContactData } from '../data/Contact'

const Contact = () => {
  return (
    <>
    {/* <h1>{ContactData.title}</h1> */}
    <div className='md:flex md:justify-between md:py-5 md:px-10'>
        <div>
            <h2>{ContactData.adress}</h2>
            <h2>{ContactData.mail}</h2>
            <h2>{ContactData.phone}</h2>
        </div>
        <div>
            <h2>{ContactData.support.overførsel}</h2>
        </div>
        <div>
            <h2>{ContactData.scrum}</h2>
        </div>
    </div>
    </>
  )
}

export default Contact