'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactFormularData } from '../data/ContactFormular'
import Image from 'next/image';

const classes = {
  background: {
    backgroundImage: 'url("/contact-bg.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  mainContainer: {
    main: "max-w-6xl mx-auto",
  },
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
  <>
  <section className='flex justify-center p-20'>
    <div className='text-center p-20 -ml-96i'>
      <Image />
      <h1 style={{ margin: "revert" }} className='text-7xl'>LET'S <br /> <span>ACHIEVE YOUR</span><br /> VISION</h1> 
    </div>

    <div>
  <div className='p-10'>
      <h1 className='text-5xl mb-8'>{ContactFormularData.title}</h1>

  <div>
    <form 
      onSubmit={handleSubmit}
      className='grid mt-0 gap-3'>

      <div>
        <label htmlFor="fullname" className='text-s'>
          {ContactFormularData.fullname}
        </label>
        <input
          id="fullname"
          type="text" 
          name="text"
          className='bg-menu-bg border w-96'
        />
        <ValidationError 
          prefix="text" 
          field="text"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="phonenr">
          {ContactFormularData.phonenr}
        </label>
        <input
          id="phonenr"
          type="tel" 
          name="tel"
          className='bg-menu-bg border'
        />
        <ValidationError 
          prefix="tel" 
          field="tel"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="email">
          {ContactFormularData.mailadress}
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='bg-menu-bg border'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="message">
          <p>{ContactFormularData.message}</p>
        </label>
        <textarea
          id="message"
          name="message"
          className='bg-menu-bg border'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <div>
        <button type="submit" className="bg-menu-bg border w-32 mt-5 " disabled={state.submitting}>
          {ContactFormularData.button}
        </button>
      </div>
    </form>

    <div className='py-10'>
      <div>
        <Image />
        <p>{ContactFormularData.mynr}</p>
      </div>

      <div>
        <Image />
        <p>{ContactFormularData.mymail}</p>
      </div>

      <div>
        <Image />
        <p>{ContactFormularData.city}</p>
      </div>

      <div>
        <Image />
        <p>{ContactFormularData.IG}</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  </section>
  </>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
