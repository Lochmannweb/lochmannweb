"use client"

import React from 'react';
import { CustomerInformationsData } from '../data/CustomerInformationsData';
import styled from '@emotion/styled';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Container = styled.div({
    backgroundColor: '#2524244f',
    padding: '2rem',
    paddingBottom: '1.5rem',
    position: 'relative',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'center',
      gap: '9rem',
    },
  });

const Title = styled.div({
    fontSize: '15px',
      fontFamily: 'fantasy',
  });

const LinksContainer = styled.div ({
    lineHeight: '1.2rem',
    display: 'grid',
    marginBottom: '10px',
    color: 'grey',
  });

const A = styled.div({
    fontSize: '12px',
  });


const CustomerInformation = () => {

  return (
    <Container> 
      <div>
        <Title>{CustomerInformationsData.contact.title}</Title>
        <LinksContainer>
           <a className='font-mono' href='/Contact'>{CustomerInformationsData.contact.content2}</a>
           <a className='font-mono' href='/Contact'>{CustomerInformationsData.contact.content}</a>
        </LinksContainer>
      </div>

      <div>
        <Title>{CustomerInformationsData.about.title}</Title>
        <LinksContainer>
           <a className='font-mono' href='/About'>{CustomerInformationsData.about.content}</a>
           <a className='font-mono' href='/About'>{CustomerInformationsData.about.content2}</a>
           <a className='font-mono' href='/MyWork'>{CustomerInformationsData.about.content3}</a>
           <a className='font-mono' href='/MyWork'>{CustomerInformationsData.about.content4}</a>
        </LinksContainer>
      </div>

      <div>
        <Title>{CustomerInformationsData.Ressourcer.title}</Title>
        <LinksContainer>
          <a className='font-mono' href='/' >{CustomerInformationsData.Ressourcer.content2}</a>
          <a className='font-mono' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content3}</a>
          <a className='font-mono' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content4}</a>
          <a className='font-mono' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content}</a>
        </LinksContainer>
      </div>

      <div>
        <Title>{CustomerInformationsData.Services.title}</Title>
        <LinksContainer>
          <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content}</a>
          <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content2}</a>
          <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content3}</a>
          <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content4}</a>
        </LinksContainer>
      </div>
    </Container>
  );
}

export default CustomerInformation;
