'use client'

import React, { useEffect, useState } from 'react';
import ContactLeftTitle from '../components/Contact/ContactLeftTitle'
import ContactOplysninger from '../components/Contact/ContactOplysninger'
import ContactFormular from '../components/Contact/ContactFormular'

const styles = {
  container: (isMobile) => ({
    display: isMobile ? 'grid' : 'flex',
    justifyContent: isMobile ? '' : 'center',
    gap: isMobile ? '' : '3rem',
  }),
  hidden: (isMobile) => ({
    display: isMobile ? 'none' : '',
  }),
};

function ContactForm() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window exists (only on the client side)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 599);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
  <>
  <section style={styles.container(isMobile)}>
    <div>
      <ContactLeftTitle />
      <div style={styles.hidden(isMobile)}>
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
