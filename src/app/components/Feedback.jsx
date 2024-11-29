import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';
import Image from 'next/image';

const breakpoints = {
    md: '768px', 
    lg: '1024px',
  };

  const Container = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

  const Title = styled.div({
    color: 'white',
    textAlign: 'center',
    paddingTop: '3rem',
    fontSize: '30px',
    fontWeight: 'bold',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '60px',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '5rem',
    },
  });

  const Subheader = styled.div({
    color: 'white',
    textAlign: 'center',
    fontSize: '15px',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '18px',
      textAlign: 'center',
      marginBottom: '3rem',
      paddingLeft: '32rem',
      paddingRight: '32rem',
    },
  });

  const FeedBackContainer = styled.div({
    display: 'grid',
    borderRadius: '25px',
    padding: '2rem',
    gap: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      paddingLeft: '22rem',
      paddingRight: '22rem',
    },
  });

  const FeedBack = styled.div({
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: '#090909',
    borderRadius: '25px',
    padding: '1rem',
    textAlign: 'center',
    [`@media (min-width: ${breakpoints.md})`]: {
        padding: '2rem',
    },
  });

  const IMG = styled.div({
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: 'black',
    borderRadius: '15px',
    padding: '1rem',
    width: '25%',
    height: '4rem',
    margin: 'auto',
    marginBottom: '1.5rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginBottom: '1rem',
      width: '30%',
      height: '6rem',
  },
  });

  const FeddbackTitle = styled.div({
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: '5px',
    color: '#A96F59',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '25px',
  },
  });

  const FeddbackContent = styled.div({
    fontSize: '13px',
    [`@media (min-width: ${breakpoints.md})`]: {
  },
  });

  const HighlightedText = styled.span({
    color: '#A96F59', 
  });

function Feedback() {
  const highlightWords = ["choose", "me"]; 
  const subheaderText = FeedbackData.Title.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[.,!?]/g, ""); 
    return highlightWords.includes(cleanWord) ? (
      <HighlightedText key={index}>{word}</HighlightedText>
    ) : (
      word
    );
  }).reduce((prev, curr) => [prev, ' ', curr]);

  return (
    <>
      <Container>
        <Title>{subheaderText}</Title>
        <Subheader>{FeedbackData.Subheader}</Subheader>
          <FeedBackContainer>
              <FeedBack>
                  <IMG><img src="/project-management_1.svg" alt="tech" /></IMG>
                  <FeddbackTitle>{FeedbackData.Tech.title}</FeddbackTitle>
                  <FeddbackContent>{FeedbackData.Tech.feedback}</FeddbackContent>
              </FeedBack>
  
              <FeedBack>
              <IMG><img src="/chat_1.svg" alt="tech" /></IMG>
                  <FeddbackTitle>{FeedbackData.Feedback.title}</FeddbackTitle>
                  <FeddbackContent>{FeedbackData.Feedback.feedback}</FeddbackContent>
              </FeedBack>
  
              <FeedBack>
              <IMG><img src="/lowest-price.svg" alt="tech" /></IMG>
                  <FeddbackTitle>{FeedbackData.Offer.title}</FeddbackTitle>
                  <FeddbackContent>{FeedbackData.Offer.feedback}</FeddbackContent>
              </FeedBack>
          </FeedBackContainer>
      </Container>
    </>
  )
}

export default Feedback