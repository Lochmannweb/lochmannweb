"use client"

import React from 'react'
import styled from '@emotion/styled'; 
import MyStory from '../components/About/MyStory';
import Expertise from '../components/About/Expertise';

const Container = styled.div({
})

const Aboutpage = () => {


  return (
    <>
      <Container>
          <MyStory />
          <Expertise />
      </Container>
    </>
  )
}

export default Aboutpage