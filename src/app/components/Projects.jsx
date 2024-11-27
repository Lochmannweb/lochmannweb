
import React from 'react'
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

  const Title = styled.div({
    textAlign: 'center',
    fontSize: '30px',      
    [`@media (min-width: ${breakpoints.md})`]: {
      },
  });

const Container = styled.div({
  margin: '2rem',
  filter: 'drop-shadow(0 3mm 4mm #000)',
  background: '#090909',
  borderRadius: '25px',
  padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        display: 'grid',
        gap: '20px',
    },
});

const ScrollContainerTop = styled.div({
  display: 'flex',
  gap: '20px',
    [`@media (min-width: ${breakpoints.md})`]: {
       
    },
});

function LatestProjects() {
  return (
    <>
     <Title>My Recent Work</Title>
      <Container>
        <ScrollContainerTop>
            <img src="/cgc-desktop.png" alt="cgc" width={500} height={500} />
            {/* <img src="/foofest-desktop.png" alt="cgc" width={500} height={500} /> */}
        </ScrollContainerTop>
        <h1>Overskrift</h1>
        <p>Rubrik</p>
      </Container>
    </>
  )
}

export default LatestProjects