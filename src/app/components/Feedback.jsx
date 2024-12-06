import React from 'react'
import styled from '@emotion/styled';
import { FeedbackData } from '../data/FeedBackData';
import "@fontsource/keania-one";

const breakpoints = {
    md: '768px', 
    lg: '1024px',
  };

  const Container = styled.div({
    padding: '2rem',
    background: 'white',
    textAlign: 'center',
    [`@media (min-width: ${breakpoints.lg})`]: {
      padding: '5rem',
      marginLeft: '24rem',
      marginRight: '24rem',
      marginTop: '10rem',
    },
  });

  const Title = styled.div({
    color: 'white',
    fontSize: '25px',
    color: 'black',
    fontFamily: '"Keania One", sans-serif',
    [`@media (min-width: ${breakpoints.md})`]: {
      fontSize: '40px',
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
    display: 'grid',
    gap: '3rem',
    marginTop: '3rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10rem',
    },
  });
  
  const FeedBackContent = styled.div({
    display: 'grid',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

  const FeedBackContentTtitle = styled.div({
    fontFamily: '"Keania One", sans-serif',
    [`@media (min-width: ${breakpoints.md})`]: {
    },
  });

function Feedback() {

  return (
    <>
      <Container>
        <div className='md:pl-52 md:pr-52'>
          <Title>{FeedbackData.Title}</Title>
          <Subheader>{FeedbackData.Subheader}</Subheader>
        </div>
        <Content>
          <FeedBackContent>
            <img className='m-auto' src="/settings.svg" alt="svg" width={50} />
            <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Tech.title}</FeedBackContentTtitle> 
            <p className='text-sm mt-2'>{FeedbackData.Tech.feedback}</p>
          </FeedBackContent>

          <FeedBackContent>
            <img className='m-auto' src="/chat_1.svg" alt="svg" width={50} />
            <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Feedback.title}</FeedBackContentTtitle>
            <p className='text-sm mt-2'>{FeedbackData.Feedback.feedback}</p>
          </FeedBackContent>

          <FeedBackContent>
            <img className='m-auto' src="/lowest-price.svg" alt="svg" width={50} />
            <FeedBackContentTtitle className=' md:text-xl md:mt-5'>{FeedbackData.Offer.title}</FeedBackContentTtitle>
            <p className='text-sm mt-2'>{FeedbackData.Offer.feedback}</p>
          </FeedBackContent>
        </Content>
      </Container>
    </>
  )
}

export default Feedback