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
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const TechContainer = styled.div({
  display: 'grid',
  gap: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '1rem',
  },
});

const Tech = styled.div({
  filter: 'drop-shadow(0 3mm 4mm #000)',
  background: '#090909',
  display: 'flex',
  gap: '30px',
  padding: '1rem',
  borderRadius: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    padding: '1rem',
  },
});

const TexhIcon = styled.div({
  filter: 'drop-shadow(0 3mm 4mm #000)',
  background: '#090909',
  borderRadius: '15px',
  padding: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
    width: '5rem',
  },
});

const TexhTopic = styled.div({
  background: 'black',
  borderRadius: '15px',
  padding: '1rem',
  width: '13rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '17rem',
  },
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
            {TechData.Js.title}
          </TexhIcon>
          <TexhTopic>
            {TechData.Js.content}
          </TexhTopic>
        </Tech>

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
            {TechData.Js.title}
          </TexhIcon>
          <TexhTopic>
            {TechData.Js.content}
          </TexhTopic>
        </Tech>
      </TechContainer>
    </Container>
    <button>See All Services</button>
    </>
  );
}

export default App;
