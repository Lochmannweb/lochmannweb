
import React from 'react';
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular'
import { useForm, ValidationError } from '@formspree/react';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};


const Container = styled.div({
    display: 'grid',
    gap: '10px',
    filter: 'drop-shadow(0 3mm 4mm #000)',
    borderRadius: '10px',
    // marginTop: '10rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      borderRadius: '25px',
      // paddingTop: '4rem',
      paddingLeft: '3rem',
      paddingRight: '3rem',
      // marginTop: '-5rem',
      width: '100%',
      margin: 'auto',
    }
});

const Header = styled.div({
  fontSize: '18px',
  textAlign: 'start',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
    textAlign: 'center',
  },
});

const Subheader = styled.div({
  color: '#aaa',
  fontSize: '12px',
  paddingBottom: '1rem',
  marginTop: '-1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    textAlign: 'center',
    fontSize: '12px',
  },
});

const Form = styled.div({
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
  },
});

const Button = styled.div({
  right: '1.2rem',
  display: 'flex',
  padding: '0.3rem',
  borderRadius: '25px',
  background: '#fff',
  margin: 'auto',
  justifyContent: 'center',
  width: '10rem',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '5rem', 
  marginTop: '2rem',
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
           <Subheader>{ContactFormularData.title2}</Subheader>
           <form onSubmit={handleSubmit}>
             <Form>
               <Label htmlFor="text">{ContactFormularData.companyName}</Label>
               <BorderInput>
                  <input 
                    className='w-full bg-input rounded-md text-xs p-2' 
                    name="Text" 
                    id="text" 
                    type="text" 
                    placeholder='If the website exist'>
                  </input>
               </BorderInput>
               <ValidationError prefix="Text" field="text" errors={state.errors} />
             </Form>
   
             <Form> 
               <Label htmlFor="text">{ContactFormularData.fullName}</Label>
               <BorderInput><input className='w-full rounded-md bg-input text-xs p-2' name="Text" id="text" type="text" placeholder='John James'></input></BorderInput>
               <ValidationError prefix="Text" field="text" errors={state.errors} />
             </Form>
   
             <Form> 
               <Label htmlFor="tel">{ContactFormularData.phonenr}</Label>
               <BorderInput><input className='w-full bg-input rounded-md text-xs p-2' name="Tel" id="tel" type="tel" placeholder='+xx xx xx xx xx'></input></BorderInput>
               <ValidationError prefix="Tel" field="tel" errors={state.errors} />
             </Form>
   
             <Form>
               <Label htmlFor="email">{ContactFormularData.mailadress}</Label>
               <BorderInput><input className='w-full bg-input rounded-md text-xs p-2' name="Email" id="email" type="email" placeholder='example@example.com'></input></BorderInput>
               <ValidationError prefix="Email" field="email" errors={state.errors} />
             </Form>
   
             <Form>
               <Label htmlFor="message">{ContactFormularData.message}</Label>
               <BorderInput><input className='w-full bg-input rounded-md text-xs p-2 h-20' name="Message" id="message" type="message" placeholder=''></input></BorderInput>
               <ValidationError prefix="Message" field="message" errors={state.errors} />
             </Form>
           </form>
       </Container>
       <Button><button type="submit" disabled={state.submitting}>{ContactFormularData.button}</button></Button>
    </BoxContainer>
    </>
  );
}

export default App;
