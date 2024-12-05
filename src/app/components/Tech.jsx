"use client"

import React from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
  display: 'grid',
  padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '15rem',
      },
});

const HeaderContent = styled.div({
  backgroundColor: 'white',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    padding: '4rem',
    marginTop: '-10rem',
  },
})

const Title = styled.div({
  fontSize: '25px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    fontWeight: 'bold',
  },
});

const Subheader = styled.div({
  color: 'black',
  textAlign: 'center',
})

const Expertise = styled.div({
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '2rem',
    display: 'flex',
    gap: '5rem',
  },
})

const ExpertiseContent = styled.div({
  alignItems: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    gap: '1rem',
  },
})

const Button = styled.div({
  padding: '0.3rem',
  borderRadius: '20px',
  textAlign: 'center',
  width: '50%',
  borderColor: 'white',
  borderWidth: 'thin',
  fontSize: '13px',
  marginTop: '1rem',
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '10%',
    padding: '0.3rem',
    borderRadius: '15px',
    marginTop: '1rem',
    fontSize: '15px',
  }
});

function App() {

  return (
    <>
    <Container>
      <HeaderContent>
        <Title>{TechData.title}</Title>
        <Subheader>
          <p>{TechData.subheader}</p>
          <p>{TechData.subheader2}</p>
        </Subheader>
      </HeaderContent>
      <Expertise>
        <ExpertiseContent>
          <img src="/react-icon.svg" alt="svg" width={60} />
          <p>{TechData.Kode.title}</p>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="/spline.png" alt="png" width={70}  />
          <p>{TechData.Ani.title}</p>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="js-icon.svg" alt="svg" width={50} />
          <p>{TechData.Js.title}</p>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="/tailwind-css.svg" alt="svg" width={70} />
          <p>{TechData.TW.title}</p>
        </ExpertiseContent>
      </Expertise>
      <Button><a href="/About">See All Services</a></Button>
    </Container>
    </>
  );
}

export default App;
