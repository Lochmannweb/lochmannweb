'use client';

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { ContactFormularData } from '../data/ContactFormular'
import Spline from '@splinetool/react-spline/next';
import { FormControl } from '@mui/material';


const Container = styled.div({
    padding: '30px',
    display: 'grid',
    gap: '10px',
    background: "url('/star-bg.png') no-repeat center center",
    backgroundSize: 'cover',
});

const Header = styled.div({

});

const FormContainer = styled.div({
    display: 'grid',
    gap: '10px',
});

const FormInput = styled.div({
  display: 'grid',
  gap: '5px',
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
  
});

const StyledInput = styled.div({
  borderWidth: 'thin',
  borderRadius: '15px',
  height: '40px',
});

function App() {
  const theme = useTheme();

  return (
    <>
    <SplineObject />
    <Container>
        <Header>
            <h1 className='text-3xl'>{ContactFormularData.title} <span>{ContactFormularData.span}</span> {ContactFormularData.title2} </h1>
        </Header>
        <FormControl defaultValue="" required>
          <div>
            <Label>Full name</Label>
            <StyledInput placeholder='Write your name here' />
          </div>
          <div>
            <Label>Phone number</Label>
            <StyledInput placeholder='Write your name here' />
          </div>
          <div>
            <Label>Mail adress</Label>
            <StyledInput placeholder='Write your name here' />
          </div>
          <div>
            <Label>Message</Label>
            <StyledInput placeholder='Write your name here' />
          </div>
          {/* <div>
            <Button />
          </div> */}
        </FormControl>
    </Container>
    </>
  );
}

export default App;
