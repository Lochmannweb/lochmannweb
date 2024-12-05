import React from 'react';
import styled from '@emotion/styled';
import { RecentWorkData } from '../data/MyWorkData';
import ScrollContainerImages from '@/app/components/ScrollContainerImages'

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  padding: '15rem',
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
  textAlign: 'center',
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
