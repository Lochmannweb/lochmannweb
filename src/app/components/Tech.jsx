

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { TechData } from '../data/TechData';
import SplineTech from '@/app/components/SplineTech'

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

const Container = styled.div({
    padding: '20px',
    display: 'grid',
    gap: '10px',
    marginTop: '-10rem',
    backgroundImage: 'url(/star-bg.png)',
    [`@media (min-width: ${breakpoints.md})`]: {
        marginTop: '-4rem',
        paddingTop: '10rem',
        paddingBottom: '10rem',
        paddingLeft: '16rem',
        paddingRight: '16rem',
        gridTemplateColumns: '1fr 1fr',
        borderTopLeftRadius: '10rem',
        borderTopRightRadius: '10rem',
        boxShadow: '0px -41px 82px -59px #292929',
      },
});

const HeaderContainer = styled.div({
    paddingBottom: '3rem',
});

const Title = styled.div({
  fontFamily: 'fantasy',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '40px',
        marginBottom: '20px',
      },
});

const Header = styled.div({
  fontFamily: 'monospace',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '18px',
      },
});

const TopicContainer = styled.div({
    display: 'grid',
    gap: '10px',
    [`@media (min-width: ${breakpoints.md})`]: {
        gridTemplateColumns: '1fr 1fr',
      },
});

const Topic = styled.div({
    display: 'flex',
    gap: '20px',
    padding: '10px',
    alignItems: '',
    fontSize: '',
    [`@media (min-width: ${breakpoints.md})`]: {
        padding: '1rem',
        gap: '20px',
      },
});

const TopicTitle = styled.div({
    fontSize: '',
    fontFamily: 'monospace',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '20px',
      },
});

const TopicContent = styled.div({
    fontSize: '',
    fontFamily: 'monospace',
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '15px',
      },
});

function App() {
  const theme = useTheme();

  return (
    <>
    <Container>
      <div>
        <SplineTech />
      </div>
      <div>
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
      </div>
    </Container>
    </>
  );
}

export default App;
