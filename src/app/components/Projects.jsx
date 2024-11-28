
import React from 'react'
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

  const Title = styled.div({
    textAlign: 'center',
    fontSize: '30px',   
    marginTop: '5rem',   
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '40px',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: '3rem',
      marginTop: '5rem',
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
        width: '70rem',
        margin: 'auto',
    },
});

const ScrollContainerTop = styled.div({
  display: 'flex',
  gap: '20px',
    [`@media (min-width: ${breakpoints.md})`]: {
       
    },
});

const Button = styled.div({
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
    marginTop: '0.5rem',
  }
});

function LatestProjects() {
  return (
    <>
    <div>
      <Title>My Recent Work</Title>
        <Container>
            <div>
              <ScrollContainerTop>
                  <img src="/cgc-desktop.png" alt="cgc" width={500} height={500} />
                  {/* <img src="/foofest-desktop.png" alt="cgc" width={500} height={500} /> */}
              </ScrollContainerTop>
              <h1>Overskrift</h1>
              <p>Rubrik</p>
            </div>
        </Container>
      <Button>See All Projects</Button>
    </div> 
    </>
  )
}

export default LatestProjects