"use client"

import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const AboutContainer = styled.div({
    display: 'grid',
    // borderWidth: 'thin',
    // borderStyle: 'solid',
    // borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', // Border gradient
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '10rem',
    paddingBottom: '5rem',
    gap: '1rem',
    // margin: '1rem',
    // backdropFilter: 'blur(20px)',
  });

const Title = styled.div({
    fontSize: '30px',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '50px',
    },
});

const Header = styled.div({
    fontSize: '15px',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '25px',
      paddingBottom: '3rem',
    },
});

const ContentContainer = styled.div({
    fontSize: '15px',
    display: 'grid',
    gap: '1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      paddingBottom: '3rem',
      width: '80%',
    },
});

const Content = styled.div({
  fontSize: '15px',
  [`@media (min-width: ${breakpoints.md})`]: {
  },
});


const About = () => {

  return (
    <AboutContainer>
        <Title>{AboutData.title} <br /> {AboutData.subheder}</Title>        
        <Header>{AboutData.aboutResume}</Header>
        <div>
          <Content><strong className="md:text-lg">{AboutData.journey.title}</strong></Content>
          <ContentContainer>
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
          </ContentContainer>
        </div>

        <div>
        <Content><strong className="md:text-lg">{AboutData.firstStep.title}</strong></Content>
          <ContentContainer>
            <div>
              {AboutData.firstStep.content1}
            </div>
            <div>
              {AboutData.firstStep.content2}
            </div>
            <div>
              {AboutData.firstStep.content3}
            </div>
          </ContentContainer>
        </div>

        <div>
        <Content><strong className="md:text-lg">{AboutData.internship.title}</strong></Content>
          <ContentContainer>
            <div>
              {AboutData.internship.content1}
            </div>
          </ContentContainer>
        </div>

        <div>
        <Content><strong className="md:text-lg">{AboutData.now.title}</strong></Content>
          <ContentContainer>
            <div>
              {AboutData.now.content1}
            </div>
          </ContentContainer>
        </div>
    </AboutContainer>
  )
}

export default About
