"use client"

import React from 'react';
import { CustomerInformationsData } from '../data/CustomerInformationsData';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
    padding: '2rem',
    paddingBottom: '1.5rem',
    position: 'relative',
    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'flex',
      justifyContent: 'center',
      gap: '9rem',
      width: '50%',
      margin: 'auto',
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
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container> 
        <div>
          <Title>{CustomerInformationsData.contact.title}</Title>
          {(!!isTablet && 
            <LinksContainer>
             <a className='font-mono' href='/Contact'>{CustomerInformationsData.contact.content2}</a>
             <a className='font-mono' href='/Contact'>{CustomerInformationsData.contact.content}</a>
            </LinksContainer>
          )}
        </div>
  
        <div>
          <Title>{CustomerInformationsData.about.title}</Title>
          {(!!isTablet && 
            <LinksContainer>
               <a className='font-mono' href='/About'>{CustomerInformationsData.about.content}</a>
               <a className='font-mono' href='/About'>{CustomerInformationsData.about.content2}</a>
               <a className='font-mono' href='/MyWork'>{CustomerInformationsData.about.content3}</a>
               <a className='font-mono' href='/MyWork'>{CustomerInformationsData.about.content4}</a>
            </LinksContainer>
          )}
        </div>
  
        <div>
          <Title>{CustomerInformationsData.Ressourcer.title}</Title>
          {(!!isTablet && 
            <LinksContainer>
              <a className='font-mono' href='/' >{CustomerInformationsData.Ressourcer.content2}</a>
              <a className='font-mono' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content3}</a>
              <a className='font-mono' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content4}</a>
              <a className='font-mono' href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content}</a>
            </LinksContainer>
          )}
        </div>
  
        <div>
          <Title>{CustomerInformationsData.Services.title}</Title>
          {(!!isTablet && 
            <LinksContainer>
              <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content}</a>
              <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content2}</a>
              <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content3}</a>
              <a className='font-mono' href='/Services'>{CustomerInformationsData.Services.content4}</a>
            </LinksContainer>
          )}
        </div>

        <div className='flex gap-3'>
          <img src="/logo.png" alt="logo" width={40} height={40} />
          <p><strong>LOCHMANNWEB</strong></p>
        </div>
      </Container>
    </>
  );
}

export default CustomerInformation;
