
import React from 'react';
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular'
import { useForm, ValidationError } from '@formspree/react';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};


const Container = styled.div({
    padding: '20px',
    display: 'grid',
    gap: '10px',
    [`@media (min-width: ${breakpoints.md})`]: {
      paddingRight: '16rem',
      paddingBottom: '5rem',
      marginLeft: 'auto',
    },
});

const Header = styled.div({
  fontFamily: 'fantasy',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '50px',
    paddingBottom: '3rem',
  },
});

const Form = styled.div({
  marginBottom: '1rem',
});

const Button = styled.div({
  right: '1.2rem',
  display: 'flex',
  fontFamily: 'fantasy',
});

const Label = styled.div({
  fontSize: '10px',
  marginLeft: '5px',
  fontFamily: 'monospace',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '14px',
  },
});

const ThankYouForJoining = styled.div({
  fontSize: '20px',
  fontFamily: 'fantasy',
  margin: 'auto',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    padding: '5rem',
  },
});

function App() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <ThankYouForJoining>I look forward to see your vision!</ThankYouForJoining>;
  }

  return (
    <>
    <Container>
        <Header className='text-3xl'>{ContactFormularData.title} <span>{ContactFormularData.span}</span> {ContactFormularData.title2} </Header>
        <form onSubmit={handleSubmit} className='w-96'>
          <Form>
            <Label htmlFor="text">Full name</Label>
            <input 
              className='bg-input w-full text-sm md:text-xl p-1 font-mono' 
              name="Text" 
              id="text" 
              type="text" 
              placeholder='Write your name here'>
            </input>
            <ValidationError prefix="Text" field="text" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="tel">Phone number</Label>
            <input className='bg-input w-full text-sm p-1 md:text-xl font-mono' name="Tel" id="tel" type="tel" placeholder='Write your phone number here'></input>
            <ValidationError prefix="Tel" field="tel" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="email">Mail adress</Label>
            <input className='bg-input w-full text-sm p-1 md:text-xl font-mono' name="Email" id="email" type="email" placeholder='Write your mail adress here'></input>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="message">Message</Label>
            <input className='bg-input w-full text-sm p-1 h-20 md:text-xl font-mono' name="Message" id="message" type="message" placeholder='Write your message here'></input>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </Form>

          <Button>
            <button className='' type="submit" disabled={state.submitting}>
              Submit
            </button>
          </Button>
        </form>
    </Container>
    </>
  );
}

export default App;
