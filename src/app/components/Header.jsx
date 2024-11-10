"use client";

import React, { useEffect, useState } from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import Spline from '@splinetool/react-spline';

const Container = styled.div({
  display: 'grid',
  padding: '30px',
  position: 'absolute',
});

const SplineContainer = styled.div({
  width: '100%',
  height: '100vh',
  marginTop: '-3rem',
  // position: 'abosulte',
});

const Logo = styled.div({
  display: 'none',
});

const SplineObject = () => { 
  return (
    <>
      <SplineContainer>
        <Spline className="Logo" scene="https://prod.spline.design/Uv9lybWz39z64b-w/scene.splinecode" />
      </SplineContainer>
    </>
  );
};

const GetStartedButton = styled.div({
  // background: '#000',
  // boxShadow: '1px 0px 20px -5px #ffff',
  borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
  borderWidth: 'thin',
  padding: '10px',
  width: '40%',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '90px',
  // borderRadius: '25px',
});

const GetStartedButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  background: linear-gradient(#000, #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;



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
    <SplineObject />
    <Container>
      <Title>{ForsideData.title1}</Title>
      <h2 className="text-4xl">
         {ForsideData.subheader}<span> {texts[index]} </span>{ForsideData.subheader2}
      </h2>
    </Container>
    <GetStartedButtonContainer >
      <GetStartedButton href="/Contact">
          {ForsideData.button}
      </GetStartedButton>
    </GetStartedButtonContainer>
    </>
  );
}
