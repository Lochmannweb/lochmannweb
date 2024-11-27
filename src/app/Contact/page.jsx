'use client';

import React from 'react';
import Contact from '../components/Contact'
import styled from '@emotion/styled'; 

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
    display: 'grid',
    padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      paddingTop: '12rem',
    },
  });


function ContactForm() {

  return (
    <>
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default ContactForm;
