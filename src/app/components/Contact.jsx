
import React from 'react';
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular'
import { useForm, ValidationError } from '@formspree/react';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p className='font-keania md:text-2xl m-auto md:r-44 md:mt-48'>Looking forward to work with you!</p>;
  }
  return (
    <form className='grid gap-4 md:mt-20' onSubmit={handleSubmit}>

      <div className='grid'>
        <label htmlFor="text" className='font-keania'>
          Firma navn
        </label>
        <input
          id="text"
          type="text" 
          name="text"
          className='bg-input text-white text-xs p-2'
          placeholder='If the website exist'
        />
        <ValidationError 
          prefix="Text" 
          field="text"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="text" className='font-keania'>
          Full name
        </label>
        <input
          id="text"
          type="text" 
          name="text"
          className='bg-input text-white text-xs p-2'
          placeholder='John James'
        />
        <ValidationError 
          prefix="Text" 
          field="text"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="tel" className='font-keania'>
          Phone number
        </label>
        <input
          id="tel"
          type="tel" 
          name="tel"
          className='bg-input text-white text-xs p-2'
          placeholder='+XX XX XX XX XX'
        />
        <ValidationError 
          prefix="Tel" 
          field="tel"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="email" className='font-keania'>
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='bg-input text-white text-xs p-2'
          placeholder='example@example.com'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className='grid'>
        <label htmlFor="message" className='font-keania'>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className='bg-input text-white text-xs p-2'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <div>
        <button type="submit" className='font-keania' disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;


// function Contactform() {
//   const [state, handleSubmit] = useForm("mldrldzl");
//   if (state.succeeded) {
//       return <ThankYouForJoining>I look forward to see your vision!</ThankYouForJoining>;
//   }

//   return (
//     <>
//        <Container>
//            <Header>{ContactFormularData.title}</Header>
//            <Subheader>{ContactFormularData.title2}</Subheader>
//            <form onSubmit={handleSubmit}>
//              <Form>
//                <Label><label htmlFor="text">{ContactFormularData.companyName}</label></Label>
//                <BorderInput><input className='w-full bg-input rounded-md text-xs p-2' name="text" id="text" type="text" placeholder='If the website exist'></input></BorderInput>
//                <ValidationError prefix="Text" field="text" errors={state.errors} />
//              </Form>
   
//              <Form> 
//              <Label><label htmlFor="text">{ContactFormularData.fullName}</label></Label>
//                <BorderInput><input className='w-full rounded-md bg-input text-xs p-2' name="text" id="text" type="text" placeholder='John James'></input></BorderInput>
//                <ValidationError prefix="Text" field="text" errors={state.errors} />
//              </Form>
   
//              <Form> 
//                <Label><label htmlFor="tel">{ContactFormularData.phonenr}</label></Label>
//                <BorderInput><input className='w-full bg-input rounded-md text-xs p-2' name="tel" id="tel" type="tel" placeholder='+xx xx xx xx xx'></input></BorderInput>
//                <ValidationError prefix="Tel" field="tel" errors={state.errors} />
//              </Form>
   
//              <Form>
//              <Label><label htmlFor="email">{ContactFormularData.mailadress}</label></Label>
//                <BorderInput><input className='w-full bg-input rounded-md text-xs p-2' name="email" id="email" type="email" placeholder='example@example.com'></input></BorderInput>
//                <ValidationError prefix="Email" field="email" errors={state.errors} />
//              </Form>
   
//              <Form>
//              <Label><label htmlFor="message">{ContactFormularData.message}</label></Label>
//                <BorderInput><textarea className='w-full bg-input rounded-md text-xs p-2 h-20' name="message" id="message"></textarea></BorderInput>
//                <ValidationError prefix="Message" field="message" errors={state.errors} />
//              </Form>
//            </form>
//        </Container>
//        <button className='flex p-1 items-center rounded-2xl border-2 m-auto mb-5 w-44 text-base justify-center font-keania' type="submit" disabled={state.submitting}>{ContactFormularData.button}</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <Contactform />
//   );
// }

// export default App;