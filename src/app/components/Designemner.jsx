"use client"

import React from 'react'
import { Categories } from '../data/Categories';
import styled from '@emotion/styled';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

const Container = styled.div({
    gap: '1rem',
    display: 'grid',
    margin: 'auto',
    [`@media (min-width: ${breakpoints.md})`]: {
        display: 'flex',
        margin: '0',
    },
});

const Emner = styled.div({
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: '#090909',
    borderRadius: '15px',
    padding: '0.5rem',
    width: '10rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        padding: '0.7rem',
        width: '12rem',
        fontWeight: 'bold',
        fontSize: '15px',
        borderRadius: '15px',
    },
});

const Topic = styled.div({
  textAlign: 'center',
  backgroundColor: 'black',
  padding: '0.5rem',
  boxShaodw: 'inset 0 0 10px #fff',
  borderRadius: '10px',
  [`@media (min-width: ${breakpoints.md})`]: {
    borderRadius: '10px',
  },
});

function Designemner() {
  return (
    <>
      <Container>
        <Emner><Topic>{Categories.Shop}</Topic></Emner>
        <Emner><Topic>{Categories.Branding}</Topic></Emner>
        <Emner><Topic>{Categories.Redesign}</Topic></Emner>
        <Emner><Topic>{Categories.Designs}</Topic></Emner>
      </Container>
    </>
  )
}

export default Designemner