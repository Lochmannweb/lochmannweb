"use client"

import { MyWorkHeader } from "@/app/data/MyWorkData"
import React from 'react'
import styled from "styled-components"

const Container = styled.div({
    display: 'grid',
    textAlign: 'start',

    gap: '10px',
});

const Title = styled.div({
    fontSize: '15px',
});

const Header = styled.div({
    fontSize: '35px',
    marginTop: '-15px',
    background: 'linear-gradient(90deg, #330707, #ff0000)',
    webkitBackGroundClip: 'text',
    webkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const Content = styled.div({
  fontSize: '15px',
  display: 'grid',
  gap: '1rem',
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