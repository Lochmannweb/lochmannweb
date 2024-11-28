import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';

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
      fontSize: '40px',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: '3rem',
      marginTop: '5rem',
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
    width: '20%',
    height: '4rem',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
      marginBottom: '1rem',
  },
  });

  const FeddbackTitle = styled.div({
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: '5px',
    [`@media (min-width: ${breakpoints.md})`]: {
  },
  });

  const FeddbackContent = styled.div({
    fontSize: '13px',
    [`@media (min-width: ${breakpoints.md})`]: {
  },
  });

function Feedback() {
  return (
    <>
      <Container>
        <Title>{FeedbackData.Title}</Title>
          <FeedBackContainer>
              <FeedBack>
                  <IMG src="" alt="" />
                  <FeddbackTitle>{FeedbackData.Tech.title}</FeddbackTitle>
                  <FeddbackContent>{FeedbackData.Tech.feedback}</FeddbackContent>
              </FeedBack>
  
              <FeedBack>
                  <IMG src="" alt="" />
                  <FeddbackTitle>{FeedbackData.Feedback.title}</FeddbackTitle>
                  <FeddbackContent>{FeedbackData.Feedback.feedback}</FeddbackContent>
              </FeedBack>
  
              <FeedBack>
                  <IMG src="" alt="" />
                  <FeddbackTitle>{FeedbackData.Offer.title}</FeddbackTitle>
                  <FeddbackContent>{FeedbackData.Offer.feedback}</FeddbackContent>
              </FeedBack>
          </FeedBackContainer>
      </Container>
    </>
  )
}

export default Feedback