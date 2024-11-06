"use client"

import React, { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import StepByStepHomePage from './components/Home/StepByStepHomePage'
import MyWork from './components/MyWork'
import FAQ from './components/FAQ'
import Tech from './components/Tech'
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'grid',
  paddingTop: '50px',
  paddingBottom: '50px',
  gap: '50px',
});

const MyWorkContainer = styled.div({
  marginTop: '-18rem',
});

const Page = () => {

  return (
    <Container> 
      <Header />
      <Tech />
      <MyWorkContainer><MyWork /></MyWorkContainer>
    </Container> 
  )
}

export default Page