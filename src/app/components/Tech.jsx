'use client';

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { TechData } from '../data/TechData';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

const Container = styled.div({
    padding: '20px',
    display: 'grid',
    gap: '10px',
});

const HeaderContainer = styled.div({
});

const Title = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '45px',
        marginBottom: '15px',
      },
});

const Header = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '22px',
      },
});

const TopicContainer = styled.div({
    display: 'grid',
    gap: '10px',
});

const Topic = styled.div({
    display: 'flex',
    gap: '20px',
    borderImage: 'linear-gradient(130deg, #840000, #FFF, #000, #FFF, #840000) 1', 
    borderWidth: 'thin',
    padding: '10px',
    alignItems: 'center',
});

const TopicTitle = styled.div({
    fontSize: '',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '30px',
      },
});

const TopicContent = styled.div({
    fontSize: '',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '20px',
      },
});

function App() {
  const theme = useTheme();

  return (
    <>
    <Container>
        <HeaderContainer>
            <Title className='text-3xl'>{TechData.title}</Title>
            <Header className='text-sm'>{TechData.subheader}</Header>
        </HeaderContainer>
        <TopicContainer>
            <Topic><TopicTitle>{TechData.UXUI.title}</TopicTitle><TopicContent className='text-sm'>{TechData.UXUI.content}</TopicContent></Topic>
            <Topic><TopicTitle>{TechData.AIML.title}</TopicTitle><TopicContent className='text-sm'>{TechData.AIML.content}</TopicContent></Topic>
            <Topic><TopicTitle>{TechData.Security.title}</TopicTitle><TopicContent className='text-sm'>{TechData.Security.content}</TopicContent></Topic>
            <Topic ><TopicTitle>{TechData.CICD.title}</TopicTitle><TopicContent className='text-sm'>{TechData.CICD.content}</TopicContent></Topic>
        </TopicContainer>
        {/* <SplineObject /> */}
    </Container>
    </>
  );
}

export default App;
