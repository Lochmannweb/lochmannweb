"use client"

// import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { AboutData } from '@/app/data/AboutData'
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Container = styled.div({
  margin: 'auto',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0rem',
    width: '80%',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    marginTop: '10rem',
    width: '40%',
  },
});

const ImageContainer = styled.div({
  margin: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {

  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '80%',
    marginTop: '3rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    width: '50%',
    marginTop: '3rem',
  },
});

const Title = styled.div({
  fontSize: '25px',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '40px',
  },
});

const Text = styled.div({
  fontSize: '10px',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '12px',
  },
});

const MyStory = () => {

  return (
    <Container> 
      <Content>
        <Title>{AboutData.title}</Title>
        <Text>
          {AboutData.subheder1} <br /> <br />
          {AboutData.subheder2} <br /> <br />
          {AboutData.subheder3} <br /> <br />
        </Text>
      </Content>
      <ImageContainer>
        <Image src="" alt="" srcset="" width={300} height={300} />
      </ImageContainer>
    </Container>
  )
}

export default MyStory
