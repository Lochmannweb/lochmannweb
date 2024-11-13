'use client';

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { MyWorkDesignData } from '../data/MyWorkData';
import Image from 'next/image';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Container = styled.div({
  padding: '20px',
  display: 'grid',
  gap: '10px',
});

const ImageContainer = styled.div({
  display: 'grid',
  gap: '15px',
  justifyContent: 'center',
  gridTemplateColumns: '1fr',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: '1fr 1fr', // Two columns on tablet
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns on desktop
  },
});

const Images = styled.div({

});

const Title = styled.div({
  fontSize: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '40px', 
    marginBottom: '10px',
  },
});

function App() {

  return (
    <Container>
      <div>
        <Title className='text-3xl'>{MyWorkDesignData.title}</Title>
      </div>
      <ImageContainer>
        <Images>
          <Image className='rounded-lg ' src="/cgc.png"  width={350} height={350} alt="Foofest image" />
        </Images>
        <Images>
        <Image className='rounded-lg' src="/foofest.png"  width={340} height={340} alt="Foofest image" />
        </Images>
      </ImageContainer>
    </Container>
  );
}

export default App;
