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
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '13rem',
    paddingLeft: '20rem',
    textAlign: 'start',
    width: '100%',
    gap: '20px',
  },
});

const HeaderTitle = styled.div({
  fontFamily: 'fantasy',
  fontSize: '40px',
  marginTop: '-3rem',
  marginBottom: '3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '80px',
    lineHeight: '5rem',
    paddingRight: '10rem',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '80px',
    lineHeight: '5rem',
    paddingRight: '55rem',
    },
});

const HighlightedText = styled.span({
  color: '#A96F59', 
});

export default function Header() {
  const highlightWords = ["website", "happen"]; // Erstat med de ord, du vil farve
  const subheaderText = ForsideData.subheader.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[.,!?]/g, ""); // Fjern tegnsætning, hvis nødvendigt
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
        <Designemner />
    </Container>
    </>
  );
}
