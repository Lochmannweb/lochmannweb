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
  borderRadius: '12px',
  border: '1px solid grey',
  overflow: 'hidden',
  [`@media (min-width: ${breakpoints.md})`]: {
    maxWidth: '200%', // Larger on tablet
    maxHeight: '200%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    maxWidth: '200%', // Even larger on desktop
    maxHeight: '200%',
  },
});

function App() {

  return (
    <Container>
      <div>
        <h1 className='text-3xl'>{MyWorkDesignData.title}</h1>
      </div>
      <ImageContainer>
        <Images>
          <Image className='rounded-lg' src="/foofest.png" layout="responsive" width={200} height={200} alt="Foofest image" />
        </Images>
        <Images>
          <Image className='rounded-lg' src="/cgc.png" layout="responsive" width={200} height={200} alt="CGC image" />
        </Images>
      </ImageContainer>
    </Container>
  );
}

export default App;
