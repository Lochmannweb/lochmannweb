"use client"

// import { AboutData } from "@/app/data/AboutData"
// import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { ServicesData } from '@/app/data/ServicesData'
import Image from 'next/image';

const breakpoints = {
  md: '768px', 
  lg: '1024px',
};

const Title = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
   fontSize: '40px',
   textAlign: 'center',
   marginTop: '10rem',
  },
});

const Container = styled.div({
  background: '#090909',
  margin: 'auto',
  filter: 'drop-shadow(0 3mm 4mm #000)',
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
  background: '#060606',
  filter: 'drop-shadow(0 3mm 4mm #000)',
  margin: '1rem',
  alignContent: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '50%',
    height: '30vh',
    padding: '2 rem',
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
  },
});


const MyStory = () => {

  return (
    <>
    <Title>{ServicesData.title}</Title>
    <Container>
      <Content>
        <ContentTitle>{ServicesData.UXUI.title}</ContentTitle>
        <ContentSubheder>{ServicesData.UXUI.content}</ContentSubheder>
        <li className='text-xs'>{ServicesData.UXUI.services1}</li>
        <li className='text-xs'>{ServicesData.UXUI.services2}</li>
        <li className='text-xs'>{ServicesData.UXUI.services3}</li>
        <li className='text-xs'>{ServicesData.UXUI.services4}</li>
      </Content>
      <ImageContainer>
        <Image className='m-auto' src="/uxuidesign.png" alt="img" srcset="" width={300} height={300} />
      </ImageContainer>
    </Container>
    </>
  )
}

export default MyStory
