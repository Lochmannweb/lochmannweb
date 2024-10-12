'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactFormularData } from '../data/ContactFormular'
import Image from 'next/image';

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section className=' border-2 border-solid rounded-3xl md:p-10 md:mb-56'>
      <h1>{ContactFormularData.title}</h1>

  <div className='grid md:flex md:justify-start md:gap-48'>
    <form 
      onSubmit={handleSubmit}
      className='grid'>

      <label htmlFor="fullname">
        {ContactFormularData.fullname}
      </label>
      <input
        id="fullname"
        type="text" 
        name="text"
        className=''
      />
      <ValidationError 
        prefix="text" 
        field="text"
        errors={state.errors}
      />

      <label htmlFor="phonenr">
        {ContactFormularData.phonenr}
      </label>
      <input
        id="phonenr"
        type="tel" 
        name="tel"
      />
      <ValidationError 
        prefix="tel" 
        field="tel"
        errors={state.errors}
      />

      <label htmlFor="email">
        {ContactFormularData.mailadress}
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">
        <p>{ContactFormularData.message}</p>
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        {ContactFormularData.button}
      </button>
    </form>

    <div>
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
    </section>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
