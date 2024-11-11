'use client';

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { MyWorkDesignData } from '../data/MyWorkData';
import Image from 'next/image';

const Container = styled.div({
    padding: '20px',
    display: 'grid',
    gap: '10px',
});

const ImageContainer = styled.div({
    display: 'grid',
    gap: '15px',
    justifyContent: 'center',
});

const Images = styled.div({
  borderRadius: '12px',
  borderColor: 'grey',
  borderWidth: 'medium',
});

function App() {
  const theme = useTheme();

  return (
    <>
    <Container>
        <div>
            <h1 className='text-3xl'>{MyWorkDesignData.title}</h1>
        </div>
        <ImageContainer>
          <Images><Image className='rounded-lg' src="/foofest.png" width={200} height={200} alt="" /></Images>
          <Images><Image className='rounded-lg' src="/cgc.png" width={200} height={200} alt="" /></Images>
        </ImageContainer>
    </Container>
    </>
  );
}

export default App;
