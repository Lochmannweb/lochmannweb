"use client";

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import SplineHeader from './SplineHHeader';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Container = styled.div({
  display: 'grid',
  padding: '30px',
  position: 'absolute',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '15rem',
  },
});

// const SplineContainer = styled.div({
//   width: '100%',
//   height: '100vh',
//   marginTop: '-3rem',
//   [`@media (min-width: ${breakpoints.md})`]: {
//   },
// });

const Logo = styled.div({
  display: 'none',
});

// const SplineObject = () => { 
//   return (
//     <>
//       <SplineContainer>
//         <Spline className="Logo" scene="https://prod.spline.design/Uv9lybWz39z64b-w/scene.splinecode" />
//       </SplineContainer>
//     </>
//   );
// };

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
  // fontWeight: 'bold',
  // background: 'linear-gradient(#fff, #ff0000)',
  // webkitBackgroundClip: 'text',
  // webkitTextFillColor: 'transparent',
  // backgroundClip: 'text',
  // textFillColor: 'transparent',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '25px',
  },
});

const HeaderTitle = styled.div({
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
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const texts = [
    "Unique",
    "Thinking",
  ];

  return (
    <>
    <SplineHeader />
    <Container>
      <div>
        <Title>{ForsideData.title1}</Title>
        <HeaderTitle className="text-4xl">{ForsideData.subheader} <br /> <span> {texts[index]} </span>{ForsideData.subheader2}</HeaderTitle>
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
