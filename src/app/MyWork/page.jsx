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
      <Container>
        <Header />  
        <StepByStep />
      </Container>
    </>
  )
}

export default Aboutpage