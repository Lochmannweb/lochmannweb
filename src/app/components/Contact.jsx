'use client'

import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ContactFormularData } from '../data/ContactFormular'
import Image from 'next/image';

const getClasses = (isMobile) => ({
  title: {
    fontSize: isMobile ? '40px' : '50px',
    lineHeight: isMobile ? '3rem' : '5rem',
    marginBottom: '20px',
  },
  container: {
    gap: '8px',
    padding: isMobile ? '0rem' : '5rem',
    textAlign: 'center',
    paddingTop: isMobile ? '5rem' : '10rem',
  },
  formContainer: {
    padding: isMobile ? '2rem' : '3rem',
    backdropFilter: 'blur(20px)',
    borderColor: 'white',
    borderWidth: 'thin',
    borderRadius: '25px',
    display: isMobile ? 'grid' : 'flex',
    justifyContent: 'start',
    gap: '5rem',
  },
  form: {
    display: 'grid',
    width: '50%',
  },
  input: {
    marginBottom: isMobile ? '20px' : '10px',
    backgroundColor: '#000',
    borderColor: 'grey', 
    borderWidth: 'thin',
    width: isMobile ? '16rem' : '35rem',
  },
  formTitle: {
    fontSize: '13px',
    marginLeft: '8px',
  },
  button: {
    backgroundColor: '#000',
    borderColor: 'grey', 
    borderWidth: 'thin',
    width: isMobile ? '40%' : '20%',
    marginLeft: 'auto',
    marginTop: '10px',
  },
  contactContainer: {

  },
  contactSoMe: {
    alignContent: 'center',
    display: 'grid',
    gap: '1rem',
    paddingLeft: '3rem',
  },
});

function ContactForm() {
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

  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section>
      <h1 style={classes.title}>{ContactFormularData.title}</h1>

      <div style={classes.formContainer}>
        <form onSubmit={handleSubmit} style={classes.form}>
     
          <label htmlFor="fullname" style={classes.formTitle}>
            {ContactFormularData.fullname}
          </label>
          <input
            id="fullname"
            type="text" 
            name="text"
            style={classes.input}
          />
          <ValidationError 
            prefix="text" 
            field="text"
            errors={state.errors}
          />
     
          <label htmlFor="phonenr" style={classes.formTitle}>
            {ContactFormularData.phonenr}
          </label>
          <input
            id="phonenr"
            type="tel" 
            name="tel"
            style={classes.input}
          />
          <ValidationError 
            prefix="tel" 
            field="tel"
            errors={state.errors}
          />
     
          <label htmlFor="email" style={classes.formTitle}>
            {ContactFormularData.mailadress}
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            style={classes.input}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
     
          <label htmlFor="message" style={classes.formTitle}>
            <p>{ContactFormularData.message}</p>
          </label>
          <textarea
            id="message"
            name="message"
            style={classes.input}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
     
          <button type="submit" disabled={state.submitting} style={classes.button}>
            {ContactFormularData.button}
          </button>
        </form>
     
        <div style={classes.contactSoMe}>
          <div style={classes.contactContainer}>
            <Image />
            <p>{ContactFormularData.mynr}</p>
          </div>
      
          <div style={classes.contactContainer}>
            <Image />
            <p>{ContactFormularData.mymail}</p>
          </div>
      
          <div style={classes.contactContainer}>
            <Image />
            <p>{ContactFormularData.city}</p>
          </div>
      
          <div style={classes.contactContainer}>
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
