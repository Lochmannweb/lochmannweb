import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import AbstractHeader from './AbstractHeader';
import Designemner from '../components/Designemner'

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'grid',
  padding: '30px',
  position: 'absolute',
  paddingTop: '4rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '18rem',
    paddingLeft: '22rem',
    paddingRight: '22rem',
    textAlign: 'start',
    width: '100%',
    gap: '20px',
  },
});

const HeaderTitle = styled.div({
  fontFamily: 'fantasy',
  fontSize: '40px',
  marginTop: '-3rem',
  textAlign: 'center',
  lineHeight: '2.5rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '80px',
    lineHeight: '5rem',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '80px',
    lineHeight: '5rem',
    },
});

const Content = styled.div({
  fontSize: '15px',
  textAlign: 'center',
  marginBottom: '3rem',
  color: '#aaa',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '20px',
    marginBottom: '3rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    },
});

const HighlightedText = styled.span({
  color: '#A96F59', 
});

export default function Header() {
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
    <AbstractHeader />
    <Container>
        <HeaderTitle>
          {subheaderText}
        </HeaderTitle>
        <Content>{ForsideData.content}</Content>
        <Designemner />
    </Container>
    </>
  );
}
