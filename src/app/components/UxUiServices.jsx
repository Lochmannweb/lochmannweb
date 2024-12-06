"use client"

// import { AboutData } from "@/app/data/AboutData"
// import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { ServicesData } from '@/app/data/ServicesData'
import Image from 'next/image';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Title = styled.div({
  backgroundColor: 'white',
  color: 'black',
  margin: 'auto',
  fontSize: '25px',
  padding: '1rem',
  textAlign: 'center',
  marginBottom: '1rem',
  fontFamily: '"Keania One", sans-serif',
  [`@media (min-width: ${breakpoints.md})`]: {
   fontSize: '40px',
   marginTop: '0rem',
   width: '40%',
   padding: '2rem',
  },
});

const Container = styled.div({
  margin: 'auto',
  // fontFamily: '"Keania One", sans-serif',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3rem',
      width: '40%',
      borderRadius: '20px',
      padding: '1rem',
      gap: '2rem',
    },
});

const ImageContainer = styled.div({
  margin: '1rem',
  marginBottom: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    height: '30vh',
  },
});

const Content = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    marginTop: '2rem',
    padding: '1rem',
  },
});

const ContentTitle = styled.div({
  fontSize: '30px',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
});

const ContentSubheder = styled.div({
  fontSize: '15px',
  [`@media (min-width: ${breakpoints.md})`]: {
    marginBottom: '1rem',
    fontSize: '25px',
  },
});


const MyStory = () => {

  return (
    <>
    <Title>{ServicesData.UXUI.title}</Title>
    <Container>
      <Content>
        <ContentSubheder>{ServicesData.UXUI.content}</ContentSubheder>
        <li className='md:text-lg'>{ServicesData.UXUI.services1}</li>
        <li className='md:text-lg'>{ServicesData.UXUI.services2}</li>
        <li className='md:text-lg'>{ServicesData.UXUI.services3}</li>
        <li className='md:text-lg'>{ServicesData.UXUI.services4}</li>
      </Content>
      <ImageContainer>
        <Image className='m-auto' src="/uxuidesign.png" alt="img" srcset="" width={300} height={300} />
      </ImageContainer>
    </Container>
    </>
  )
}

export default MyStory
