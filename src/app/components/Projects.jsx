import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  overflow: 'hidden', 
  position: 'relative', 
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '100%',
  padding: '15rem',
  },
});

const Title = styled.div({
  fontSize: '25px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px',
    marginTop: '-15rem',
    marginBottom: '5rem',
  },
});

const ImageGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    marginBottom: '5rem',
  },
});

const Button = styled.div({
  borderWidth: 'thin',
  borderColor: 'white',
  margin: 'auto',
  width: '60%',
  padding: '0.3rem',
  borderRadius: '25px',
  textAlign: 'center',
  marginTop: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '12%',
    padding: '0.3rem',
    borderRadius: '15px',
  },
});


function LatestProjects() {
  return (
    <>
      <Container>
        <Title>{RecentWorkData.title}</Title>
        <ImageGrid>
          <img src="/foofest-desktop.png" alt="png" width={500} />
          <img src="/foofest-desktop.png" alt="png" width={500} />
          <img src="/foofest-desktop.png" alt="png" width={500} />
          <img src="/foofest-desktop.png" alt="png" width={500} />
        </ImageGrid>
        <Button>
          <a href="/MyWork">{RecentWorkData.button}</a>
        </Button>
      </Container>
    </>
  );
}

export default LatestProjects;
