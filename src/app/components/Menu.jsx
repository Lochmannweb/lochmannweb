'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
// import { borderRadius, margin } from 'polished';

const breakpoints = {
  md: '768px', // tablet
  lg: '1024px', // desktop
};

const Nav = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Container = styled.div({
  display: 'flex', 
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: 'black',
  position: 'fixed',
  bottom: '0', // Default position for mobile
  width: '100%',
  zIndex: '50',
  [`@media (min-width: ${breakpoints.md})`]: {
    top: '0', 
    width: '80%',
    bottom: '', // Disable bottom position
    height: '5.5rem',
    alignItems: 'center',
    padding: '3rem',
    backgroundColor: '#2524244f',
    borderRadius: '50px',
    marginTop: '2rem',
  },
});

const OpenMenu = styled.div({
  transform: props => (props.menuOpen ? 'translateX(0)' : 'translateX(100%)'),
  transition: 'transform 0.3s ease',
  position: 'fixed',
  left: 0,
  bottom: 0,
  padding: '1rem',
  backgroundColor: 'black', 
  width: '100%',
  paddingBottom: '15px',
  zIndex: 50,
  [`@media (min-width: ${breakpoints.md})`]: {
    top: '0',
    gap: '1rem',
    bottom: '',
    right: '11rem',
    backgroundColor: '#0b0b0b',
    width: '35%',
    height: '6rem',
    borderRadius: '50px',
    left: 'inherit',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: '2rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    top: '0',
    gap: '1rem',
    bottom: '',
    right: '14rem',
    backgroundColor: '#0b0b0b',
    width: '35%',
    height: '6rem',
    borderRadius: '50px',
    left: 'inherit',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: '2rem',
  },
});


const Links = styled.div({
  display: 'grid',
  paddingBottom: '20px',
  gap: '10px',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    paddingTop: '1rem',
    gap: '20px',
  },
});

const OpenMenuLogoAndIcon = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const LinksContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

// const Container = styled.div({
//   display: 'flex', 
//   justifyContent: 'space-between',
//   padding: '1rem',
//   backgroundColor: 'black',
//   position: 'fixed',
//   bottom: '0', // Default position for mobile
//   width: '100%',
//   boxShadow: '0px 29px 46px',
//   zIndex: '50',
//   [`@media (min-width: ${breakpoints.md})`]: {
//     top: '0', 
//     bottom: '', // Disable bottom position
//     boxShadow: '0px -35px 46px', 
//     height: '5.5rem',
//     alignItems: 'center',
//     padding: '2rem',
//   },
// });

// const OpenMenu = styled.div({
//   transform: props => (props.menuOpen ? 'translateX(0)' : 'translateX(100%)'),
//   transition: 'transform 0.3s ease',
//   position: 'fixed',
//   left: 0,
//   bottom: 0,
//   padding: '1rem',
//   backgroundColor: 'black', 
//   width: '100%',
//   paddingBottom: '15px',
//   boxShadow: '0px 29px 46px',
//   zIndex: 50,
//   [`@media (min-width: ${breakpoints.md})`]: {
//     top: '0',
//     gap: '1rem',
//     bottom: '',
//     right: '0',
//     boxShadow: 'none',
//     width: '40%',
//     height: '5.5rem',
//     left: 'inherit',
//     display: 'flex',
//     justifyContent: 'end',
//     alignItems: 'center',
//   },
// });


// const Links = styled.div({
//   display: 'grid',
//   paddingBottom: '20px',
//   gap: '10px',
//   [`@media (min-width: ${breakpoints.md})`]: {
//     display: 'flex',
//     paddingTop: '1rem',
//   },
// });

// const OpenMenuLogoAndIcon = styled.div({
//   display: 'flex',
//   justifyContent: 'space-between',
// });

// const LinksContainer = styled.div({
//   display: 'flex',
//   justifyContent: 'space-between',
// });

function App() {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log('Menu state changed to:', !menuOpen); 
  };

  return (
    <>
      {/* Navigation Bar */}
      <Nav>
        <Container>
          <div>
            <a href="/" prefetch={false}>LOCHMANNWEB</a>
          </div>

          {!isMobile && (
            <div>
              <Image
                src="/w-logo.png"
                alt="profile"
                width={55}
                height={55}
              />
            </div>
          )}

          <div>
            <button className="grid gap-2" onClick={toggleMenu}>
              <div className="decoration-white w-32 ml-auto"><hr /></div>
              <div className="decoration-white w-24 ml-auto"><hr /></div>
              <div className="decoration-white w-10 ml-auto"><hr /></div>
            </button>
          </div>
        </Container>
      </Nav>

      {/* Open Menu */}
      {menuOpen && (
        <OpenMenu menuOpen={menuOpen}>
            <LinksContainer>
                <ul>
                  <Links>
                    <a className='text-sm md:text-lg' href="/About" prefetch={false}>My journey</a>
                    <a className='text-sm md:text-lg' href="/MyWork" prefetch={false}>Work / Experience</a>
                    <a className='text-sm md:text-lg' href="/Contact" prefetch={false}>Contact</a>
                    <a className='text-sm md:text-lg' href="/" prefetch={false}>Social Media</a>
                    <a className='text-sm md:text-lg' href="/" prefetch={false}>Home</a>
                  </Links>
                </ul>
            </LinksContainer>

            <OpenMenuLogoAndIcon>
                <div>
                  <a className='md:hidden' href="/" prefetch={false}>LOCHMANNWEB</a>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill='white'
                    height={25}
                    width={25}
                    onClick={toggleMenu}
                  >
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                  </svg>
                </div>
            </OpenMenuLogoAndIcon>
        </OpenMenu>
      )}
    </>
  );
}

export default App;
