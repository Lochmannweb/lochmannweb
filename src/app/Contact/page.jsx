'use client';

import React, { useEffect, useState } from 'react';
import ContactLeftTitle from '../components/Contact/ContactLeftTitle';
import ContactOplysninger from '../components/Contact/ContactOplysninger';
import ContactFormular from '../components/Contact/ContactFormular';

const styles = {
  container: (isMobile, isTablet) => ({
    display: isMobile ? 'grid' : isTablet ? 'grid' : 'flex',
    justifyContent: isMobile ? '' : isTablet ? '' : 'center',
    gap: isMobile ? '' : isTablet ? '' : '3rem',
  }),
  hidden: (isMobile, isTablet)  => ({
    display: isMobile ? 'none' : isTablet ? 'none' : '',
  }),
};

function ContactForm() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 600);
      setIsTablet(width >= 600 && width < 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section style={styles.container(isMobile, isTablet) }>
        <div>
          <ContactLeftTitle />
          <div style={styles.hidden(isMobile, isTablet)}>
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
