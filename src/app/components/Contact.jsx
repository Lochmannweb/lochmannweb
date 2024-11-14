
import React from 'react';
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular'
// import Spline from '@splinetool/react-spline/next';
import { useForm, ValidationError } from '@formspree/react';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};


const Container = styled.div({
    padding: '20px',
    display: 'grid',
    gap: '10px',
    marginTop: '5rem',
    // background: "url('/star-bg.png') no-repeat center center",
    // backgroundSize: 'cover',
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

// const SplineContainer = styled.div({
//     width: '60%',
//     height: '60vh',
//     marginTop: '-11rem',
//     marginBottom: '-7rem',
//     marginLeft: '0rem',
//     position: 'abosulte',
//     // filter: 'drop-shadow(13px 1px 22px darkgrey)',
//   });

// const SplineObject = () => { 
//     return (
//       <SplineContainer> 
//           <Spline scene="https://prod.spline.design/pdTEeKrLctH22kH8/scene.splinecode"/>
//       </SplineContainer>
//     );
//   };

const Label = styled.div({
  fontSize: '10px',
  marginLeft: '5px',
  fontFamily: 'monospace',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '14px',
  },
});

// const Span = styled.div`
//   background: linear-gradient(#000, #ff0000);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   text-fill-color: transparent;
// `;

function App() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <>
    {/* <SplineObject /> */}
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
