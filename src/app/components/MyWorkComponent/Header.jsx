"use client"

import { MyWorkHeader } from "@/app/data/MyWorkData"
import React from 'react'
import styled from "styled-components"

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Container = styled.div({
    display: 'grid',
    textAlign: 'start',
    gap: '10px',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '8rem',
    },
});

const Title = styled.div({
    fontSize: '15px',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '20px',
      margin: 'auto',
    },
});

const Header = styled.div({
    fontSize: '35px',
    marginTop: '-15px',
    background: 'linear-gradient(90deg, #330707, #ff0000)',
    webkitBackGroundClip: 'text',
    webkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '50px',
      margin: 'auto',
    },
});

const Content = styled.div({
  fontSize: '15px',
  display: 'grid',
  gap: '0rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const Aboutpage = () => {

  return (
    <Container>
      <Title>{MyWorkHeader.title}</Title>
      <Header>{MyWorkHeader.header}</Header>
      <div>
        <Content>
          <div>
            {MyWorkHeader.content1}
          </div>
          <div>
            {MyWorkHeader.content2}
          </div>
          <div>
            {MyWorkHeader.content3}
          </div>
        </Content>
      </div>
    </Container>
  )
}
 
export default Aboutpage