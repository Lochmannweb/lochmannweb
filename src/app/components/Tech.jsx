"use client"

import React from 'react';
import styled from '@emotion/styled';
import { TechData } from '../data/TechData';
import Image from 'next/image';

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
  alignItems: 'center',
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
  width: '4rem',
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
  fontSize: '15px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    width: '29rem',
    padding: '1.5rem',
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

const HighlightedText = styled.span({
  color: '#A96F59', 
});

function App() {
  const highlightWords = ["Expertise"]; 
  const subheaderText = TechData.title.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[.,!?]/g, ""); 
    return highlightWords.includes(cleanWord) ? (
      <HighlightedText key={index}>{word}</HighlightedText>
    ) : (
      word
    );
  }).reduce((prev, curr) => [prev, ' ', curr]);

  return (
    <>
    <Container>
      <Title>
        {subheaderText}
      </Title>
      <TechContainer>
        <Tech>
          <TexhIcon>
          <img src="/js-icon.svg" alt="tw" />
          </TexhIcon>
          <TexhTopic>
            {TechData.Js.content}
          </TexhTopic>
        </Tech>

        <Tech>
          <TexhIcon>
            <img src="/tailwind-css.svg" alt="tw" />
          </TexhIcon>
          <TexhTopic>
            {TechData.TW.content}
          </TexhTopic>
        </Tech>

        <Tech>
          <TexhIcon>
          <img src="/spline-icon.png" alt="" />
          </TexhIcon>
          <TexhTopic>
            {TechData.Ani.content}
          </TexhTopic>
        </Tech>

        <Tech>
          <TexhIcon>
          <img src="/react-icon.svg" alt="react" />
          </TexhIcon>
          <TexhTopic>
            {TechData.Kode.content}
          </TexhTopic>
        </Tech>
      </TechContainer>
    </Container>
    <Button><a href="/About">See All Services</a></Button>
    </>
  );
}

export default App;
