"use client"

import React from 'react'
import Header from '../components/MyWorkComponent/Header';
import StepByStep from '../components/MyWorkComponent/StepByStep';
import styled from '@emotion/styled';

const Container = styled.div({
  paddingTop: '5rem',
  paddingBottom: '5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

const Aboutpage = () => {

  return (
    <>
    <img src="/followproces-bg.png" alt="png" width={2000} />
      <Container>
        <Header />  
        <StepByStep />
      </Container>
    </>
  )
}

export default Aboutpage