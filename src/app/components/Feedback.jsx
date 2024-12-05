import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const breakpoints = {
    md: '768px', 
    lg: '1024px',
  };

  const Container = styled.div({
    padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      gap: '5rem',
      paddingLeft: '15rem',
      paddingRight: '9rem',
    },
  });

  const Title = styled.div({
    color: 'white',
    fontSize: '25px',
    fontWeight: 'bold',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginTop: '5rem',
    },
  });

  const Subheader = styled.div({
    color: 'white',
    fontSize: '15px',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '18px',
      marginBottom: '3rem', 
    },
  });

  const Content = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
      alignContent: 'center',
    },
  });

  const HighlightedText = styled.span({
    color: '#fff', 
  });

function Feedback() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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
        <Content>
          <Title>{subheaderText}</Title>
          <Subheader>{FeedbackData.Subheader}</Subheader>
        </Content>
        {(!isTablet &&
        <div>
          <img src="/feedback.png" alt="png" width={2000} />
        </div>
        )}
      </Container>
    </>
  )
}

export default Feedback