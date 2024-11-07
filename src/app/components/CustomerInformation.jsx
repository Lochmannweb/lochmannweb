"use client"

import React from 'react';
import { CustomerInformationsData } from '../data/CustomerInformationsData';
import styled from '@emotion/styled';

const Container = styled.div({
    backgroundColor: 'black',
    padding: '2rem',
    paddingBottom: '4rem',
    bottom: '1rem',
    position: 'relative',
  });

const Title = styled.div({
    fontSize: '15px',
  });
const LinksContainer = styled.div ({
    lineHeight: '1.2rem',
    display: 'grid',
    marginTop: '10px',
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
           <A href='/Contact'>{CustomerInformationsData.contact.content2}</A>
           <A href='/Contact'>{CustomerInformationsData.contact.content}</A>
        </LinksContainer>
      </div>

      <div>
        <Title>{CustomerInformationsData.about.title}</Title>
        <LinksContainer>
           <A href='/About'>{CustomerInformationsData.about.content}</A>
           <A href='/About'>{CustomerInformationsData.about.content2}</A>
           <A href='/MyWork'>{CustomerInformationsData.about.content3}</A>
           <A href='/MyWork'>{CustomerInformationsData.about.content4}</A>
        </LinksContainer>
      </div>

      <div>
        <Title>{CustomerInformationsData.Ressourcer.title}</Title>
        <LinksContainer>
          <A href='/' >{CustomerInformationsData.Ressourcer.content2}</A>
          <A href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content3}</A>
          <A href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content4}</A>
          <A href='/Ressourcer'>{CustomerInformationsData.Ressourcer.content}</A>
        </LinksContainer>
      </div>

      <div>
        <Title>{CustomerInformationsData.Services.title}</Title>
        <LinksContainer>
          <A href='/Services'>{CustomerInformationsData.Services.content}</A>
          <A href='/Services'>{CustomerInformationsData.Services.content2}</A>
          <A href='/Services'>{CustomerInformationsData.Services.content3}</A>
          <A href='/Services'>{CustomerInformationsData.Services.content4}</A>
        </LinksContainer>
      </div>
    </Container>
  );
}

export default CustomerInformation;
