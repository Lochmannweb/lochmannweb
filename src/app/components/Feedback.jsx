import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
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
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

  const FeedBackContainer = styled.div({
    display: 'grid',
    borderRadius: '25px',
    padding: '2rem',
    gap: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
    },
  });

  const FeedBack = styled.div({
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: '#090909',
    borderRadius: '25px',
    padding: '1rem',
    textAlign: 'center',
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
                  <img src="" alt="" />
                  <h1 className='font-bold md:text-xl'>{FeedbackData.Tech.title}</h1>
                  <p className='md:text-sm'>{FeedbackData.Tech.feedback}</p>
              </FeedBack>
  
              <FeedBack>
                  <img src="" alt="" />
                  <h1 className='font-bold md:text-xl'>{FeedbackData.Feedback.title}</h1>
                  <p className='md:text-sm'>{FeedbackData.Feedback.feedback}</p>
              </FeedBack>
  
              <FeedBack>
                  <img src="" alt="" />
                  <h1 className='font-bold md:text-xl'>{FeedbackData.Offer.title}</h1>
                  <p className='md:text-sm'>{FeedbackData.Offer.feedback}</p>
              </FeedBack>
          </FeedBackContainer>
      </Container>
    </>
  )
}

export default Feedback