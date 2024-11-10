"use client"

import React from 'react'
import About from '../components/About'
import styled from '@emotion/styled'; 

const Container = styled.div({
    display: '',
    gap: '0.5rem',
    padding: '',
    marginTop: '',
    marginBottom: '',
})

const Aboutpage = () => {


  return (
    <>
      <Container>
          <About />
      </Container>
    </>
  )
}

export default Aboutpage