import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'grid',
  padding: '21rem',
  position: 'absolute',
  paddingTop: '4rem',
  // margin: 'auto',
  // textAlign: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '14rem',
    // paddingLeft: '15rem',
    // paddingRight: '65rem',
    // textAlign: 'start',
  },
});

const HeaderTitle = styled.div({
  fontSize: '40px',
  margin: 'auto',
  marginTop: '-3rem',
  // textAlign: 'start',
  // lineHeight: '2.5rem',
  // textAlign: 'center',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '55px',
    // lineHeight: '5rem',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '59px',
    lineHeight: '4.5rem',
    },
});

const Content = styled.div({
  fontSize: '15px',
  // textAlign: 'start',
  // margin: 'auto',
  marginBottom: '3rem',
  textAlign: 'center',
  color: '#aaa',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '15px',
    marginBottom: '3rem',
    },
});

const HighlightedText = styled.span({
  color: '#fff', 
});

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const highlightWords = ["next", "level"]; 
  const subheaderText = ForsideData.subheader.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[.,!?]/g, ""); 
    return highlightWords.includes(cleanWord) ? (
      <HighlightedText key={index}>{word}</HighlightedText>
    ) : (
      word
    );
  }).reduce((prev, curr) => [prev, ' ', curr]);

  return (
    <>
    {/* {(!isMobile && 
      <img className="md:-mt-12" src="/Header-bg.png" alt="bg"  />
    )} */}

    {(!isTablet && 
      <img className="md:-mt-12" src="/Header-bg.png" alt="bg" width={2000} />
    )}
    
    <Container>
        <HeaderTitle>{subheaderText}</HeaderTitle>
        <Content>{ForsideData.content}</Content>
    </Container>
    </>
  );
}
