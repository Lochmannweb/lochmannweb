

import React from 'react'
import styled from '@emotion/styled';
import { ContactFormularData } from '../data/ContactFormular';

const breakpoints = {
    md: '768px', // tablet
    lg: '1024px', // desktop
  };

  const Container = styled.div({
    color: 'white',
    margin: '2rem',
    filter: 'drop-shadow(0 3mm 4mm #000)',
    background: '#090909',
    borderRadius: '10px',
    padding: '1rem',
    [`@media (min-width: ${breakpoints.md})`]: {
        display: 'grid',
        margin: 'auto',
        width: '70rem',
    },
  });


function ContactBox() {
  return (
    <>
     <Container>
        <div>
            <div>
                <h1><strong>{ContactFormularData.title}</strong></h1>
                <p>{ContactFormularData.title2}</p>
            </div>
            <div>
                <p>Let&apos;s Talk</p>
            </div>
        </div>
     </Container>
    </>
  )
}

export default ContactBox

{/* <div>
<h1>{ContactFormularData.title}</h1>
<p>{ContactFormularData.title2}</p>
</div>

// {/* <div>
//  <img src="/contact-knap-sort.png" alt="knap" width={50} height={50}>
//  {}
//  </img>
// </div> */}