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
  marginTop: '15rem',
  padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      marginTop: '0rem',
      },
});

const Title = styled.div({
  fontSize: '25px',
  fontWeight: 'bold',
  lineHeight: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    textAlign: 'start',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
});

const Content = styled.div({
  position: 'absolute',
  right: '0',
  [`@media (min-width: ${breakpoints.md})`]: {
    alignContent: 'center',
    padding: '15rem',
  },
})

const Subheader = styled.div({
  color: '#aaa',
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
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '18%',
    padding: '0.3rem',
    borderRadius: '15px',
    marginTop: '1rem',
    fontSize: '15px',
  }
});

const HighlightedText = styled.span({
  color: '#fff', 
});

function App() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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
      {(!isTablet && 
      <div>
        <img src="/expertise.png" alt="png" width={2000} />
      </div>
      )}
      <Content>
        <Title>
          {subheaderText}
        </Title>
        <Subheader>{TechData.subheader} <br /> {TechData.subheader2}</Subheader>
        <Button><a href="/About">See All Services</a></Button>
      </Content>
    </Container>
    </>
  );
}

export default App;
