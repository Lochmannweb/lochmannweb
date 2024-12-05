import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const breakpoints = {
    md: '768px', 
    lg: '1024px',
  };

  const Container = styled.div({
    padding: '5rem',
    background: 'white',
    textAlign: 'center',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

  const Title = styled.div({
    color: 'white',
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'black',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginTop: '0rem',
    },
  });

  const Subheader = styled.div({
    color: 'white',
    fontSize: '15px',
    color: 'black',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '18px',
      marginBottom: '3rem', 
    },
  });

  const Content = styled.div({
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10rem',
    },
  });
  
  const FeedBackContent = styled.div({
    
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

function Feedback() {

  return (
    <>
      <Container>
        <Title>{FeedbackData.Title}</Title>
        <Subheader>{FeedbackData.Subheader}</Subheader>
        <Content>
          <FeedBackContent>
            <img className='m-auto' src="/settings.svg" alt="svg" width={50} />
            <h1 className='font-bold md:text-xl md:mt-5'>{FeedbackData.Tech.title}</h1> 
            <p>{FeedbackData.Tech.feedback}</p>
          </FeedBackContent>

          <FeedBackContent>
            <img className='m-auto' src="/chat_1.svg" alt="svg" width={50} />
            <h1 className='font-bold md:text-xl md:mt-5'>{FeedbackData.Feedback.title}</h1>
            <p>{FeedbackData.Feedback.feedback}</p>
          </FeedBackContent>

          <FeedBackContent>
            <img className='m-auto' src="/lowest-price.svg" alt="svg" width={50} />
            <h1 className='font-bold md:text-xl md:mt-5'>{FeedbackData.Offer.title}</h1>
            <p>{FeedbackData.Offer.feedback}</p>
          </FeedBackContent>
        </Content>
      </Container>
    </>
  )
}

export default Feedback