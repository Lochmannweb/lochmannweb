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
      paddingTop: '10rem',
    },
  });

const Header = styled.div({
  fontSize: '30px',
  paddingBottom: '20px',
});


function ContactForm() {

  return (
    <>
      <Container>
        <div>
          <Header>{ContactPageHeader.title}</Header>
          <ContactFormular />
        </div>
      </Container>
    </>
  );
}

export default ContactForm;
