"use client";

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import SplineHeader from './SplineHHeader';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'grid',
  padding: '30px',
  position: 'absolute',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '15rem',
    paddingLeft: '16rem',
  },
});

const Logo = styled.div({
  display: 'none',
});


const GetStartedButton = styled.div({
  borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
  borderWidth: 'thin',
  padding: '10px',
  width: '40%',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '90px',
  [`@media (min-width: ${breakpoints.md})`]: {
    width: '10%',
  },
});

const GetStartedButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Title = styled.div({
  fontSize: '15px',
  fontFamily: 'monospace',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
  },
});

const HeaderTitle = styled.div({
  fontFamily: 'fantasy',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '80px',
    lineHeight: '5rem',
  },
});

export default function Header() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const texts = [
    "Static",
    "Dynamic",
  ];

  const texts2 = [
    "Unique",
    "Responsive",
  ];

  return (
    <>
    <SplineHeader />
    <Container>
      <div>
        <Title>{ForsideData.title1}</Title>
        <HeaderTitle className="text-4xl">
          {ForsideData.subheader} <span> {texts[index]} </span> & <br /> 
          {ForsideData.subheader2} <span>{texts2[index]}</span> {ForsideData.subheader3}
        </HeaderTitle>
      </div>
    </Container>
    {/* <GetStartedButtonContainer >
      <GetStartedButton href="/Contact">
          {ForsideData.button}
      </GetStartedButton>
    </GetStartedButtonContainer> */}
    </>
  );
}
