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
  margin: 'auto',
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

const Title = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '30px',
  },
});

const Text = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '12px',
  },
});

const MyStory = () => {

  return (
    <Container> 
      <Content>
        <Title>About me</Title>
        <Text>
          I began my journey in 2023 as a student at KEA, where I am studying to become a Multimedia Designer with a focus on Frontend and a bit of Backend development. <br /> <br />
          Once I complete my education, I plan to take the next step by pursuing a Bachelor’s degree in Web Application Development, which will take 1.5 years. <br /> <br />
          Outside of my studies, I am passionate about exploring new trends in frontend technology, constantly seeking opportunities to grow and enhance my skills for the future.
        </Text>
      </Content>
      <ImageContainer>
        <Image src="" alt="" srcset="" width={300} height={300} />
      </ImageContainer>
    </Container>
  )
}

export default MyStory
