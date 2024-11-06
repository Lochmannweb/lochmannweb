'use client';

import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { TechData } from '../data/TechData';
import Spline from '@splinetool/react-spline';


const Container = styled.div({
    padding: '30px',
    display: 'grid',
    gap: '10px',
});

const Header = styled.div({

});

const TopicContainer = styled.div({
    display: 'grid',
    gap: '10px',
});

const Topic = styled.div({
    display: 'flex',
    gap: '20px',
    borderWidth: 'thin',
    borderColor: 'purple',
    borderRadius: '15px',
    padding: '10px',
    alignItems: 'center',
});

const SplineContainer = styled.div({
    width: '100%',
    height: '100vh',
    marginTop: '-16.5rem',
    marginLeft: '-15rem',
    position: 'abosulte',
    filter: 'drop-shadow(-24px -1px 26px grey)',
  });

const SplineObject = () => { 
    return (
        <SplineContainer>
            <Spline scene="https://prod.spline.design/rO1O43-jPFqvU09W/scene.splinecode" />
        </SplineContainer>
    );
  };

function App() {
  const theme = useTheme();

  return (
    <>
    <Container>
        <Header>
            <h1 className='text-3xl'>{TechData.title}</h1>
            <h2 className='text-sm'>{TechData.subheader}</h2>
        </Header>
        <TopicContainer>
            <Topic><p>{TechData.UXUI.title}</p><p className='text-sm'>{TechData.UXUI.content}</p></Topic>
            <Topic><p>{TechData.AIML.title}</p><p className='text-sm'>{TechData.AIML.content}</p></Topic>
            <Topic><p>{TechData.Security.title}</p><p className='text-sm'>{TechData.Security.content}</p></Topic>
            <Topic ><p>{TechData.CICD.title}</p><p className='text-sm'>{TechData.CICD.content}</p></Topic>
        </TopicContainer>
        <SplineObject />
    </Container>
    </>
  );
}

export default App;
