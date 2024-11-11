"use client"

import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';

const AboutContainer = styled.div({
    display: 'grid',
    // borderWidth: 'thin',
    // borderStyle: 'solid',
    // borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', // Border gradient
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    gap: '1rem',
    // margin: '1rem',
    // backdropFilter: 'blur(20px)',
  });

const Title = styled.div({
    fontSize: '30px',
    background: 'linear-gradient(90deg, #330707, #ff0000)',
    webkitBackGroundClip: 'text',
    webkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
});

const Header = styled.div({
    fontSize: '15px',
});

const Content = styled.div({
    fontSize: '15px',
    display: 'grid',
    gap: '1rem',
});


const About = () => {

  return (
    <AboutContainer>
        <Title>{AboutData.title} <br /> {AboutData.subheder}</Title>        
        <Header>{AboutData.aboutResume}</Header>
        <div>
          <Content><strong>{AboutData.journey.title}</strong></Content>
          <Content>
            <div>
              {AboutData.journey.content1}
            </div>
            <div>
              {AboutData.journey.content2}
            </div>
            <div>
              {AboutData.journey.content3}
            </div>
            <div>
              {AboutData.journey.content4}
            </div>
          </Content>
        </div>

        <div>
        <Content><strong>{AboutData.firstStep.title}</strong></Content>
          <Content>
            <div>
              {AboutData.firstStep.content1}
            </div>
            <div>
              {AboutData.firstStep.content2}
            </div>
            <div>
              {AboutData.firstStep.content3}
            </div>
          </Content>
        </div>

        <div>
        <Content><strong>{AboutData.internship.title}</strong></Content>
          <Content>
            <div>
              {AboutData.internship.content1}
            </div>
          </Content>
        </div>

        <div>
        <Content><strong>{AboutData.now.title}</strong></Content>
          <Content>
            <div>
              {AboutData.now.content1}
            </div>
          </Content>
        </div>
    </AboutContainer>
  )
}

export default About
