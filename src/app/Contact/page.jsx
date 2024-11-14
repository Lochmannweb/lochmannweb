'use client';

import React from 'react';
import ContactFormular from '../components/Contact/ContactFormular';
import styled from '@emotion/styled';
import { ContactPageHeader } from '../data/ContactFormular';  

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Container = styled.div({
    display: 'grid',
    padding: '2rem',
    [`@media (min-width: ${breakpoints.md})`]: {
      paddingTop: '12rem',
    },
  });

const Header = styled.div({
  fontSize: '30px',
  paddingBottom: '20px',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    alignItems: 'center',
    padding: '0rem',
    fontSize: '4rem',
    fontFamily: 'fantasy',
  },
});

const Grid = styled.div({
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
});


function ContactForm() {

  return (
    <>
      <Container>
        <Grid>
          <Header>{ContactPageHeader.title}</Header>
          <ContactFormular />
        </Grid>
      </Container>
    </>
  );
}

export default ContactForm;
