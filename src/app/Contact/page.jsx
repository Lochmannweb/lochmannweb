'use client';

import React, { useEffect, useState } from 'react';
import ContactLeftTitle from '../components/Contact/ContactLeftTitle';
import ContactOplysninger from '../components/Contact/ContactOplysninger';
import ContactFormular from '../components/Contact/ContactFormular';

const styles = {
  container: (screenType) => ({
    display: screenType === 'mobile' ? 'grid' : 'flex',
    justifyContent: screenType === 'mobile' ? '' : 'center',
    gap: screenType === 'mobile' ? '' : '3rem',
  }),
  hidden: (screenType) => ({
    display: screenType === 'mobile' ? 'none' : '',
  }),
};

function ContactForm() {
  const [screenType, setScreenType] = useState('mobile');

  useEffect(() => {
    // Check if window exists (only on the client side)
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScreenType('mobile');
      } else if (width < 1024) {
        setScreenType('tablet');
      } else {
        setScreenType('desktop');
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section style={styles.container(screenType)}>
        <div>
          <ContactLeftTitle />
          <div style={styles.hidden(screenType)}>
            <ContactOplysninger />
          </div>
        </div>
        <div>
          <ContactFormular />
        </div>
      </section>
    </>
  );
}

export default ContactForm;
