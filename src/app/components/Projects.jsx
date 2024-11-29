import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import ScrollContainerImages from '@/app/components/ScrollContainerImages'

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Title = styled.div({
  textAlign: 'center',
  fontSize: '30px',
  marginTop: '5rem',
  fontWeight: 'bold',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '60px',
    textAlign: 'center',
    marginBottom: '3rem',
    marginTop: '5rem',
  },
});

const Container = styled.div({
  margin: '2rem auto', // Centrer Container
  filter: 'drop-shadow(0 3mm 4mm #000)',
  background: '#090909',
  borderRadius: '25px',
  padding: '2rem',
  width: '80%', 
  overflow: 'hidden', // Sørg for, at intet går ud over Container
  position: 'relative', // Holder scroll-indhold indenfor Container
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '60%',
  },
});

const ProjectContent = styled.div({
  padding: '0.5rem',
  color: 'white',
});

const ScrollWorkTitle = styled.div({
  marginTop: '1rem',
  fontSize: '20px',
  color: '#ffffff',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '25px',
    marginTop: '2rem',
  },
});

const ScrollWorkContent = styled.div({
  color: '#aaa',
  fontSize: '14px',
  marginTop: '0.5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '16px',
  },
});

const ScrollWorkButton = styled.div({
  background: '#59372A',
  margin: 'auto',
  width: '50%',
  padding: '0.5rem',
  borderRadius: '15px',
  textAlign: 'center',
  filter: 'drop-shadow(0 3mm 4mm #000)',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '12%',
    padding: '1rem',
    borderRadius: '15px',
    marginTop: '2rem',
  },
});

const HighlightedText = styled.span({
  color: '#A96F59',
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
      <div>
        <Title>{subheaderText}</Title>
        <Container>
          <ScrollContainerImages />
          <ProjectContent>
            <ScrollWorkTitle>{RecentWorkData.header}</ScrollWorkTitle>
            <ScrollWorkContent>{RecentWorkData.content}</ScrollWorkContent>
          </ProjectContent>
        </Container>
        <ScrollWorkButton>
          <a href="/MyWork">{RecentWorkData.button}</a>
        </ScrollWorkButton>
      </div>
    </>
  );
}

export default LatestProjects;
