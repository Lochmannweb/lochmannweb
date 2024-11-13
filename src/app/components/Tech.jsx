

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { TechData } from '../data/TechData';
// import SplineTech from '@/app/components/SplineTech'

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

const Container = styled.div({
    padding: '20px',
    display: 'grid',
    gap: '10px',
    marginTop: '-10rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        marginTop: '-4rem',
      },
});

const HeaderContainer = styled.div({
    paddingBottom: '3rem',
});

const Title = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '50px',
        marginBottom: '20px',
      },
});

const Header = styled.div({
    [`@media (min-width: ${breakpoints.md})`]: {
        fontSize: '20px',
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
    alignItems: 'center',
    fontSize: '',
    [`@media (min-width: ${breakpoints.md})`]: {
        borderWidth: 'thin',
        padding: '3rem',
        borderLeft: 'none',
        borderRight: 'none',
        columnGap: '10x',
        gap: '50px',
      },
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
    {/* <SplineTech /> */}
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
