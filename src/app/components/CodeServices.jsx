"use client"

import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';
import { ServicesData } from '@/app/data/ServicesData'

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
      marginTop: '5rem',
      marginBottom: '5rem',
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
    <Container>
      <ImageContainer>
        <img src="" alt="" srcset="" width={300} height={300} />
      </ImageContainer>
      <Content>
        <ContentTitle>{ServicesData.Kode.title}</ContentTitle>
        <ContentSubheder>{ServicesData.Kode.content}</ContentSubheder>
        <li className="text-xs">{ServicesData.Kode.services1}</li>
        <li className="text-xs">{ServicesData.Kode.services2}</li>
        <li className="text-xs">{ServicesData.Kode.services3}</li>
        <li className="text-xs">{ServicesData.Kode.services4}</li>
        <li className="text-xs">{ServicesData.Kode.services5}</li>
        <li className="text-xs">{ServicesData.Kode.services6}</li>
        <li className="text-xs">{ServicesData.Kode.services7}</li>
      </Content>
    </Container>
    </>
  )
}

export default MyStory
