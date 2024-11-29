"use client"

import { StepByStep } from "@/app/data/MyWorkData"
import React from 'react'
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
    display: 'grid',
    gap: '1rem',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
        width: '60%',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        marginTop: '5rem'
    },
});

const StepByStepContainer = styled.div({
    display: 'grid',
    justifyContent: 'center',
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: '#090909',
    borderRadius: '25px',
    textAlign: 'center',
    padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        padding: '2rem',
      },
});

const Icon = styled.div({
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: 'black',
    borderWidth: 'thin',
    borderColor: '#59372A',
    padding: '1rem',
    width: '25%',
    height: '8vh',
    margin: 'auto',
    borderRadius: '10px',
    marginBottom: '1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        width: '15%',
        height: '8vh',
      },
  });

const Title = styled.div({
    fontSize: '25px',
    fontFamily: 'emoji',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '25px',
      },
});

const Content = styled.div({
    fontSize: '12px',
    color: '#aaa',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '15px',
      },
  });

const Button = styled.div({
    borderRadius: '50px',
    backgroundColor: '#59372A',
    width: '50%',
    padding: '0.3rem',
    margin: 'auto',
    marginTop: '3rem',
    marginBottom: '3rem',
    textAlign: 'center',
    filter: 'drop-shadow(0 3mm 4mm #000)',
    [`@media (min-width: ${breakpoints.md})`]: {
        width: '13%',
        padding: '0.5rem',
        fontSize: '20px',
      },
  });

const Aboutpage = () => {

  return (
    <>
    <Container>
        <StepByStepContainer> 
            <Icon>
                <img src="/phone.svg" alt="phone" />
            </Icon>
            <Title>{StepByStep.contact.title}</Title>
            <Content>{StepByStep.contact.content}</Content>
        </StepByStepContainer>

        <StepByStepContainer> 
            <Icon>
                <img src="/pen.svg" alt="pen" />
            </Icon>
            <Title>{StepByStep.tilbudKontrakt.title}</Title>
            <Content>{StepByStep.tilbudKontrakt.content}</Content>
        </StepByStepContainer>

        <StepByStepContainer> 
            <Icon>
                <img src="/wireframe.svg" alt="wf" />
            </Icon>
            <Title>{StepByStep.planlægning.title}</Title>
            <Content>{StepByStep.planlægning.content}</Content>
        </StepByStepContainer>

        <StepByStepContainer> 
            <Icon>
                <img src="/code.svg" alt="code" />
            </Icon>
            <Title>{StepByStep.udvikling.title}</Title>
            <Content>{StepByStep.udvikling.content}</Content>
        </StepByStepContainer>

        <StepByStepContainer> 
            <Icon>
                <img src="/settings.svg" alt="user" />
            </Icon>
            <Title>{StepByStep.testAfWebsite.title}</Title>
            <Content>{StepByStep.testAfWebsite.content}</Content>
        </StepByStepContainer>

        <StepByStepContainer> 
            <Icon>
                <img src="/settings.svg" alt="user" />
            </Icon>
            <Title>{StepByStep.vedligeholdelse.title}</Title>
            <Content>{StepByStep.vedligeholdelse.content}</Content>
        </StepByStepContainer>
    </Container>  
     <Button><a href="/Contact">{StepByStep.button}</a></Button>
    </>
  )
}

export default Aboutpage