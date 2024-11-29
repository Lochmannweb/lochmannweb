"use client"

// import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  background: '#090909',
  margin: 'auto',
  filter: 'drop-shadow(0 3mm 4mm #000)',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10rem',
      width: '40%',
      borderRadius: '20px',
      padding: '1rem',
      gap: '2rem',
    },
});

const ImageContainer = styled.div({
  background: '#060606',
  filter: 'drop-shadow(0 3mm 4mm #000)',
  margin: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {

  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    marginTop: '3rem',

  },
});

const MyStory = () => {

  return (
    <Container>
      <ImageContainer>
        <Image src="" alt="" srcset="" width={300} height={300} />
      </ImageContainer>

      <Content>
        <h1>Overskrift</h1>
        <p>Tekst</p>
      </Content>
    </Container>
  )
}

export default MyStory
