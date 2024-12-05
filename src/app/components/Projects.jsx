import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import ScrollContainerImages from '@/app/components/ScrollContainerImages'

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  padding: '2rem',
  width: '80%', 
  overflow: 'hidden', 
  position: 'relative', 
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '100%',
  },
});

const Title = styled.div({
  fontSize: '25px',
  fontWeight: 'bold',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    textAlign: 'center',
    marginBottom: '3rem',
    marginTop: '5rem',
  },
});

const Button = styled.div({
  borderWidth: 'thin',
  borderColor: 'white',
  width: '70%',
  padding: '0.3rem',
  borderRadius: '13px',
  textAlign: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '12%',
    padding: '0.3rem',
    borderRadius: '15px',
    marginTop: '2rem',
  },
});

const HighlightedText = styled.span({
  color: '#fff',
});

function LatestProjects() {
  const highlightWords = ['Recent'];
  const subheaderText = RecentWorkData.title
    .split(' ')
    .map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, '');
      return highlightWords.includes(cleanWord) ? (
        <HighlightedText key={index}>{word}</HighlightedText>
      ) : (
        word
      );
    })
    .reduce((prev, curr) => [prev, ' ', curr]);

  return (
    <>
      <Container>
        <Title>{subheaderText}</Title>
        <Button>
          <a href="/MyWork">{RecentWorkData.button}</a>
        </Button>
      </Container>
    </>
  );
}

export default LatestProjects;
