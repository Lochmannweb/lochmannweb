
import React from 'react';
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular'
import Spline from '@splinetool/react-spline/next';
import { useForm, ValidationError } from '@formspree/react';


const Container = styled.div({
    padding: '30px',
    display: 'grid',
    gap: '10px',
    background: "url('/star-bg.png') no-repeat center center",
    backgroundSize: 'cover',
});

const Header = styled.div({

});

const Form = styled.div({
  marginBottom: '1rem',
});

const SplineContainer = styled.div({
    width: '60%',
    height: '60vh',
    marginTop: '-11rem',
    marginBottom: '-7rem',
    marginLeft: '0rem',
    position: 'abosulte',
    // filter: 'drop-shadow(13px 1px 22px darkgrey)',
  });

const SplineObject = () => { 
    return (
      <SplineContainer> 
          <Spline scene="https://prod.spline.design/pdTEeKrLctH22kH8/scene.splinecode"/>
      </SplineContainer>
    );
  };

const Label = styled.div({
  fontSize: '10px',
  marginLeft: '5px',
});

function App() {
  const [state, handleSubmit] = useForm("mldrldzl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <>
    <SplineObject />
    <Container>
        <Header>
            <h1 className='text-3xl'>{ContactFormularData.title} <span>{ContactFormularData.span}</span> {ContactFormularData.title2} </h1>
        </Header>
        <form onSubmit={handleSubmit}>
          <Form>
            <Label htmlFor="text">Full name</Label>
            <input 
              className='bg-input w-full text-sm p-1 border-zinc-700 border-2' 
              name="Text" 
              id="text" 
              type="text" 
              placeholder='Write your name here'>
            </input>
            <ValidationError prefix="Text" field="text" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="tel">Phone number</Label>
            <input className='bg-input w-full text-sm p-1 border-zinc-700 border-2' name="Tel" id="tel" type="tel" placeholder='Write your phone number here'></input>
            <ValidationError prefix="Tel" field="tel" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="email">Mail adress</Label>
            <input className='bg-input w-full text-sm p-1 border-zinc-700 border-2' name="Email" id="email" type="email" placeholder='Write your mail adress here'></input>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Form>

          <Form>
            <Label htmlFor="message">Message</Label>
            <input className='bg-input w-full text-sm p-1 h-20 border-zinc-700 border-2' name="Message" id="message" type="message" placeholder='Write your message here'></input>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </Form>

          <button className='border-zinc-700 border-2 m-auto p-2' type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
    </Container>
    </>
  );
}

export default App;

{/* <FormControl action="https://formspree.io/f/{form_id}" method="post" defaultValue="" onSubmit={handleSubmit} required>
<Form >
  <Label htmlFor="email">Full name</Label>
  <StyledInput name="Email" id="email" type="email" placeholder='Write your name here' />
  <ValidationError prefix="Email" field="email" errors={state.errors} />
</Form>
<Form>
  <Label>Phone number</Label>
  <StyledInput id="email" type="email" name="email" placeholder='Write your name here' />
</Form>
<Form>
  <Label>Mail adress</Label>
  <StyledInput placeholder='Write your name here' />
</Form>
<Form>
  <Label>Message</Label>
  <StyledInput placeholder='Write your name here' />
</Form>
<Button type="submit" disabled={state.submitting}>
  Submit
</Button>
</FormControl> */}
