
import React from 'react';
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular'
import { useForm, ValidationError } from '@formspree/react';
import { borderColor } from 'polished';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};


const Container = styled.div({
    padding: '20px',
    display: 'grid',
    gap: '10px',
    background: '#090909',
    filter: 'drop-shadow(0 3mm 4mm #000)',
    margin: 'auto',
    borderRadius: '10px',
    [`@media (min-width: ${breakpoints.md})`]: {
      borderRadius: '25px',
      paddingTop: '3rem',
      paddingLeft: '3rem',
      paddingRight: '3rem',
      marginTop: '-5rem',
      width: '40%',
    }
});

const Header = styled.div({
  fontSize: '30px',
  textAlign: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  },
});

const Subheader = styled.div({
  color: '#A96F59',
  textAlign: 'center',
  paddingBottom: '3rem',
  marginTop: '-1rem',
});

const Form = styled.div({
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '2rem',
  },
});

const Button = styled.div({
  right: '1.2rem',
  filter: 'drop-shadow(0 3mm 4mm #000)',
  display: 'flex',
  padding: '0.5rem',
  borderRadius: '25px',
  background: '#59372A',
  margin: 'auto',
  marginTop: '2rem',
  justifyContent: 'center',
  width: '10rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '10rem',
  },
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

const BoxContainer = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
  },
});

const BorderInput = styled.div({
  borderColor: '#59372A',
  borderWidth: 'thin',
  borderRadius: '13px',
});

function App() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <ThankYouForJoining>I look forward to see your vision!</ThankYouForJoining>;
  }

  return (
    <>
    <BoxContainer>
       <Container>
           <Header>{ContactFormularData.title}</Header>
           <Subheader className='m-auto'>{ContactFormularData.title2}</Subheader>
           <form onSubmit={handleSubmit}>
             <Form>
               <Label htmlFor="text">{ContactFormularData.companyName}</Label>
               <BorderInput>
                  <input 
                    className='w-full bg-input rounded-xl text-xs p-2' 
                    name="Text" 
                    id="text" 
                    type="text" 
                    placeholder='Hvis hjemmesiden allerede eksisterer'>
                  </input>
               </BorderInput>
               <ValidationError prefix="Text" field="text" errors={state.errors} />
             </Form>
   
             <Form> 
               <Label htmlFor="text">{ContactFormularData.fullName}</Label>
               <BorderInput><input className='w-full rounded-2xl bg-input text-xs p-2' name="Text" id="text" type="text" placeholder=''></input></BorderInput>
               <ValidationError prefix="Text" field="text" errors={state.errors} />
             </Form>
   
             <Form> 
               <Label htmlFor="tel">{ContactFormularData.phonenr}</Label>
               <BorderInput><input className='w-full bg-input rounded-2xl text-xs p-2' name="Tel" id="tel" type="tel" placeholder=''></input></BorderInput>
               <ValidationError prefix="Tel" field="tel" errors={state.errors} />
             </Form>
   
             <Form>
               <Label htmlFor="email">{ContactFormularData.mailadress}</Label>
               <BorderInput><input className='w-full bg-input rounded-2xl text-xs p-2' name="Email" id="email" type="email" placeholder=''></input></BorderInput>
               <ValidationError prefix="Email" field="email" errors={state.errors} />
             </Form>
   
             <Form>
               <Label htmlFor="message">{ContactFormularData.message}</Label>
               <BorderInput><input className='w-full bg-input rounded-2xl text-xs p-2 h-20' name="Message" id="message" type="message" placeholder=''></input></BorderInput>
               <ValidationError prefix="Message" field="message" errors={state.errors} />
             </Form>
           </form>
       </Container>
       <Button type="submit" disabled={state.submitting}>
         {ContactFormularData.button}
       </Button>
    </BoxContainer>
    </>
  );
}

export default App;
