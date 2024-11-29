"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import MyStory from '../components/About/MyStory';
import UxUiServices from '../components/UxUiServices';
import CodeServices from '../components/CodeServices';

const Container = styled.div({
  margin: '2rem',
  display: 'grid',
  gap: '10px',
})

const Aboutpage = () => {


  return (
    <>
      <Container>
          <MyStory />
          <UxUiServices />
          <CodeServices />
      </Container>
    </>
  )
}

export default Aboutpage