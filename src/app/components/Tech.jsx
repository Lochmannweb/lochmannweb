"use client"

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { TechData } from '../data/TechData';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

const Container = styled.div({
  padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      margin: 'auto',
      },
});

const Title = styled.div({
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '5rem',
  },
});

const TechContainer = styled.div({
  display: 'grid',
  gap: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    marginTop: '1rem',
  },
});

const Tech = styled.div({
  filter: 'drop-shadow(0 3mm 4mm #000)',
  background: '#090909',
  display: 'flex',
  gap: '20px',
  padding: '0.5rem',
  borderRadius: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '1rem',
    width: '36rem',
    alignContent: 'center',
  },
});

const TexhIcon = styled.div({
  filter: 'drop-shadow(0 3mm 4mm #000)',
  background: '#090909',
  borderRadius: '15px',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '5rem',
    textAlign: 'center',
  },
});

const TexhTopic = styled.div({
  background: 'black',
  borderRadius: '15px',
  padding: '1rem',
  width: '13rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '29rem',
  },
});

const Button = styled.div({
  background: '#59372A',
  margin: 'auto',
  padding: '0.5rem',
  borderRadius: '20px',
  textAlign: 'center',
  marginTop: '-3rem',
  width: '50%',
  filter: 'drop-shadow(0 3mm 4mm #000)',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '12%',
    padding: '1rem',
    borderRadius: '15px',
    marginTop: '-3rem',
  }
});

function App() {

  return (
    <>
    <Container>
      <Title>
        {TechData.title}
      </Title>
      <TechContainer>
        <Tech>
          <TexhIcon>
            {TechData.Js.title}
          </TexhIcon>
          <TexhTopic>
            {TechData.Js.content}
          </TexhTopic>
        </Tech>

        <Tech>
          <TexhIcon>
            {TechData.TW.title}
          </TexhIcon>
          <TexhTopic>
            {TechData.TW.content}
          </TexhTopic>
        </Tech>

        <Tech>
          <TexhIcon>
            {TechData.Ani.title}
          </TexhIcon>
          <TexhTopic>
            {TechData.Ani.content}
          </TexhTopic>
        </Tech>

        <Tech>
          <TexhIcon>
            {TechData.Kode.title}
          </TexhIcon>
          <TexhTopic>
            {TechData.Kode.content}
          </TexhTopic>
        </Tech>
      </TechContainer>
    </Container>
    <Button>See All Services</Button>
    </>
  );
}

export default App;
