"use client"

import React from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
  display: 'grid',
  marginTop: '18rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '16rem',
      },
});

const HeaderContent = styled.div({
  backgroundColor: 'white',
  margin: 'auto',
  alignContent: 'start',
  padding: '2rem',
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
  textAlign: 'start',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
  textAlign: 'start',
    fontWeight: 'bold',
  },
});

const Subheader = styled.div({
  color: 'black',
  textAlign: 'start',
  [`@media (min-width: ${breakpoints.md})`]: {
  textAlign: 'center',
  },
})

const Expertise = styled.div({
  display: 'grid',
  gap: '2rem',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '2rem',
    display: 'flex',
    gap: '5rem',
    margin: 'auto',
  },
})

const ExpertiseContent = styled.div({
  alignItems: 'center',
  display: 'flex',
  gap: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    gap: '1rem',
  },
})

const Button = styled.div({
  padding: '0.3rem',
  borderRadius: '20px',
  textAlign: 'center',
  width: '40%',
  borderColor: 'white',
  borderWidth: 'thin',
  fontSize: '13px',
  marginTop: '1rem',
  margin: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '10%',
    padding: '0.3rem',
    borderRadius: '15px',
    marginTop: '1rem',
    fontSize: '15px',
    margin: 'auto',
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
          <img src="/spline.png" alt="png" width={60}  />
          <p>{TechData.Ani.title}</p>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="js-icon.svg" alt="svg" width={50} />
          <p>{TechData.Js.title}</p>
        </ExpertiseContent>

        <ExpertiseContent>
          <img src="/tailwind-css.svg" alt="svg" width={60} />
          <p>{TechData.TW.title}</p>
        </ExpertiseContent>
      </Expertise>
      <Button><a href="/About">See All Services</a></Button>
    </Container>
    </>
  );
}

export default App;
