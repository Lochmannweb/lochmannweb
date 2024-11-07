"use client"

import React from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import MyWork from './components/MyWork'
import Tech from './components/Tech'
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'grid',
  paddingTop: '50px',
  paddingBottom: '50px',
  gap: '50px',
});

const MyWorkContainer = styled.div({
  marginTop: '0rem',
});

const Page = () => {

  return (
    <Container> 
      <Header />
      <Tech />
      <MyWorkContainer><MyWork /></MyWorkContainer>
      <Contact />
    </Container> 
  )
}

export default Page