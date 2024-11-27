"use client"

import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Container = styled.div({

    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: '10rem',
    },
});

const ImageContainer = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {

  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '15%',
  },
});

const MyStory = () => {

  return (
    <Container>
      <ImageContainer>
        <img src="" alt="" srcset="" width={300} height={300} />
      </ImageContainer>

      <Content>
        <h1>Overskrift</h1>
        <p>Tekst</p>
      </Content>
    </Container>
  )
}

export default MyStory
