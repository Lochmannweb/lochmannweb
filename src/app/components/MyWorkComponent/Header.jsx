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
    marginBottom: '3rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginTop: '8rem',
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
  fontSize: '12px',
  display: 'grid',
  gap: '0rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: '26rem',
    paddingRight: '26rem',
    fontSize: '15px',
    marginTop: '-1rem',
  },
});

const Aboutpage = () => {

  return (
    <Container>
      <Header>{MyWorkHeader.header}</Header>
      <Content>
        {MyWorkHeader.content1}
        {MyWorkHeader.content2}
        {MyWorkHeader.content3}
      </Content>
    </Container>
  )
}
 
export default Aboutpage