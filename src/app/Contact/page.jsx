'use client';

import React from 'react';
import ContactFormular from '../components/Contact/ContactFormular';
import styled from '@emotion/styled';
import { ContactPageHeader } from '../data/ContactFormular';

const Container = styled.div({
    display: 'grid',
    padding: '2rem',
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
