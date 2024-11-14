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
    justifyContent: 'start',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    justifyContent: 'start',
  },
});

const Images = styled.div({

});

const Title = styled.div({
  fontSize: '20px',
  fontFamily: 'fantasy',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '50px', 
    marginBottom: '80px',
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
          <Image className='rounded-lg ' src="/cgc-desktop.png"  width={500} height={500} alt="Foofest image" />
        </Images>
        <Images className='flex flex-row-reverse'>
        <Image className='rounded-lg' src="/foofest-desktop.png"  width={500} height={500} alt="Foofest image" />
        </Images>
      </ImageContainer>
    </Container>
  );
}

export default App;
