"use client"

import { StepByStep } from "@/app/data/MyWorkData"
import React from 'react'
import styled from '@emotion/styled';
import "@fontsource/keania-one";

const breakpoints = {
    md: '768px', 
    lg: '1024px', 
  };

const Container = styled.div({
    display: 'grid',
    gap: '2rem',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
        gap: '4rem',
    },
});

const Title = styled.div({
    fontSize: '18px',
    backgroundColor: 'white',
    fontFamily: 'emoji',
    color: 'black',
    padding: '1rem',
    textAlign: 'center',
    margin: 'auto',
    width: '80%',
    fontFamily: '"Keania One", sans-serif',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '30px',
        width: '45%',
        padding: '2rem',
      },
});

const Content = styled.div({
    fontSize: '10px',
    borderColor: 'white',
    borderWidth: 'thin',
    color: '#aaa',
    padding: '2rem',
    textAlign: 'center',
    margin: 'auto',
    width: '90%',
    marginTop: '-1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '15px',
        width: '50%',
        padding: '4rem',
        marginTop: '-2rem',
      },
  });

const Button = styled.div({
    borderRadius: '50px',
    borderColor: 'white',
    borderWidth: 'thin',
    width: '50%',
    padding: '0.3rem',
    margin: 'auto',
    marginTop: '3rem',
    marginBottom: '3rem',
    textAlign: 'center',
    fontFamily: '"Keania One", sans-serif',
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
        <div> 
            <Title>{StepByStep.contact.title}</Title>
            <Content>{StepByStep.contact.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.tilbudKontrakt.title}</Title>
            <Content>{StepByStep.tilbudKontrakt.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.planlægning.title}</Title>
            <Content>{StepByStep.planlægning.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.udvikling.title}</Title>
            <Content>{StepByStep.udvikling.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.testAfWebsite.title}</Title>
            <Content>{StepByStep.testAfWebsite.content}</Content>
        </div>

        <div> 
            <Title>{StepByStep.vedligeholdelse.title}</Title>
            <Content>{StepByStep.vedligeholdelse.content}</Content>
        </div>
    </Container>  
     <Button><a href="/Contact">{StepByStep.button}</a></Button>
    </>
  )
}

export default Aboutpage