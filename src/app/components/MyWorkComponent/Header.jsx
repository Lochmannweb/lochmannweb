"use client"

import { MyWorkHeader } from "@/app/data/MyWorkData"
import React from 'react'
import styled from "styled-components"

const Container = styled.div({
    display: 'grid',
    textAlign: 'start',
    // marginTop: '5rem',
    // paddingLeft: '18px',
    // paddingRight: '18px',
    // paddingTop: '18px',
    gap: '10px',
});

const Title = styled.div({
    fontSize: '15px',
});

const Header = styled.div({
    fontSize: '35px',
    marginTop: '-15px',
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