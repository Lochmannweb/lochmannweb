
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
      margin: 'auto',
    },
});

const Header = styled.div({
  fontFamily: '',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  },
});

const Subheader = styled.div({
  color: '#A96F59',
  paddingBottom: '3rem',
  marginTop: '-1rem',
});

const Form = styled.div({
  marginBottom: '2rem',
});

const Button = styled.div({
  right: '1.2rem',
  display: 'flex',
});

const Label = styled.div({
  fontSize: '10px',
  marginLeft: '5px',
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
        <Header>{ContactFormularData.title}</Header>
        <Subheader className='m-auto'>{ContactFormularData.title2}</Subheader>
        <form onSubmit={handleSubmit}>
          <Form>
            <Label htmlFor="text">{ContactFormularData.companyName}</Label>
            <input 
              className='w-full text-xs p-2 bg-input border-2' 
              name="Text" 
              id="text" 
              type="text" 
              placeholder='Hvis hjemmesiden allerede eksisterer'>
            </input>
            <ValidationError prefix="Text" field="text" errors={state.errors} />
          </Form>

          <Form> 
            <Label htmlFor="text">{ContactFormularData.fullName}</Label>
            <input className='w-full text-xs p-2 bg-input border-2' name="Text" id="text" type="text" placeholder=''></input>
            <ValidationError prefix="Text" field="text" errors={state.errors} />
          </Form>

          <Form> 
            <Label htmlFor="tel">{ContactFormularData.phonenr}</Label>
            <input className='w-full text-xs p-2 bg-input border-2' name="Tel" id="tel" type="tel" placeholder=''></input>
            <ValidationError prefix="Tel" field="tel" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="email">{ContactFormularData.mailadress}</Label>
            <input className='w-full text-xs p-2 bg-input border-2' name="Email" id="email" type="email" placeholder=''></input>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="message">{ContactFormularData.message}</Label>
            <input className='w-full text-xs p-2 bg-input border-2 h-20' name="Message" id="message" type="message" placeholder=''></input>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </Form>

          <Button>
            <button className='p-2 w-32 border-2 m-auto' type="submit" disabled={state.submitting}>
              {ContactFormularData.button}
            </button>
          </Button>
        </form>
    </Container>
    </>
  );
}

export default App;
