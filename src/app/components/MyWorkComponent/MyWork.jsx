'use client';

import React from 'react';
import styled from '@emotion/styled';
import { MyWorkDesignData } from '../../data/MyWorkData';
import Image from 'next/image';

const Container = styled.div({
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

const Header = styled.div({
  marginBottom: '20px',
});

function App() {

  return (
    <>
      <Container>
          <Header className='text-3xl'>{MyWorkDesignData.title2}</Header>
          <ImageContainer>
            <Images><Image className='rounded-lg' src="/foofest.png" width={200} height={200} alt="" /></Images>
            <Images><Image className='rounded-lg' src="/cgc.png" width={200} height={200} alt="" /></Images>
          </ImageContainer>
      </Container>
    </>
  );
}

export default App;
