'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
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
  width: '100%',
  zIndex: '50',
  bottom: '0',
  [`@media (min-width: ${breakpoints.md})`]: {
    top: '0', 
    bottom: '', 
    height: '6rem',
    alignItems: 'center',
    padding: '3rem',
    backgroundColor: '#060606',
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
    right: '16rem',
    backgroundColor: '#0b0b0b',
    width: '35%',
    height: '3.5rem',
    borderRadius: '50px',
    left: 'inherit',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: '2.5rem',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    top: '0',
    gap: '1rem',
    bottom: '',
    right: '19rem',
    backgroundColor: '#0b0b0b',
    width: '35%',
    height: '3.5rem',
    borderRadius: '50px',
    left: 'inherit',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: '2.5rem',
  },
});


const Links = styled.div({
  display: 'grid',
  paddingBottom: '20px',
  gap: '10px',
  [`@media (min-width: ${breakpoints.md})`]: {
    display: 'flex',
    paddingTop: '1rem',
    gap: '30px',
    alignItems: 'center',
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


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log('Menu state changed to:', !menuOpen); 
  };

  return (
    <>
   {/* Desktop version */}
    {(!isMobile &&
        <Nav>
          <Container>
            <div className='flex gap-2 items-center'>
            {(
              <div>
                <Image
                  src="/logo.png"
                  alt="profile"
                  width={25}
                  height={25}
                />
              </div>
            )}
              <a className='' href="/" prefetch={false}>LOCHMANNWEB</a>
            </div>
  
            <LinksContainer>
                <ul>
                  <Links>
                    <a className='text-sm md:text-md' href="/About" prefetch={false}>Journey & Expertise</a>
                    <a className='text-sm md:text-md' href="/MyWork" prefetch={false}>Proces & Projects</a>
                    <a href="/Contact" prefetch={false}><img src="/kontakt-knap.png" alt="knap" width={150} height={50} /></a>
                  </Links>
                </ul>
            </LinksContainer>
          </Container>
        </Nav>
      )}

    
    {/* Mobil version */}
      {(!!isTablet &&
        <Nav>
          <Container>
            <div className='flex gap-2 items-center'>
            {(
              <div>
                <Image
                  src="/logo.png"
                  alt="profile"
                  width={25}
                  height={25}
                />
              </div>
            )}
              <a className='font-mono' href="/" prefetch={false}>LOCHMANNWEB</a>
            </div>
  
            <div className='flex items-center'>
              <button className="grid gap-1" onClick={toggleMenu}>
                <div className="decoration-white w-16 ml-auto"><hr /></div>
                <div className="decoration-white w-10 ml-auto"><hr /></div>
                <div className="decoration-white w-5 ml-auto"><hr /></div>
              </button>
            </div>
          </Container>
        </Nav>
      )}

      {/* Open Menu */}
      {menuOpen && (
        <OpenMenu menuOpen={menuOpen}>
            <LinksContainer>
                <ul>
                  <Links>
                    {/* <a className='text-sm md:text-lg' href="/" prefetch={false}>Home</a> */}
                    <a className='text-sm md:text-lg' href="/About" prefetch={false}>Journey & Expertise</a>
                    <a className='text-sm md:text-lg' href="/MyWork" prefetch={false}>Proces & projects</a>
                    <a className='text-sm md:text-lg' href="/Contact" prefetch={false}>Contact</a>
                    {/* <a className='text-sm md:text-lg' href="https://www.instagram.com/lochmannweb?igsh=d2lubHY4NmRxOW5y" prefetch={false}>
                      <svg 
                      version="1.0" 
                      xmlns="http://www.w3.org/2000/svg"
                      width="20" 
                      height="20" 
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#fff" stroke="none">
                          <path d="M1218 5109 c-167 -20 -364 -85 -514 -170 -388 -223 -644 -611 -693 -1052 -15 -133 -15 -2521 0 -2654 71 -643 579 -1151 1222 -1222 133 -15 2521
                          -15 2654 0 643 71 1151 579 1222 1222 15 133 15 2521 0 2654 -71 643 -579 1151 -1222 1222 -118 13 -2554 13 -2669 0z m2773 -321 c208 -57 368 -148 508
                          -289 141 -140 232 -300 290 -508 l26 -96 0 -1335 0 -1335 -26 -96 c-58 -208-149 -368 -290 -508 -140 -141 -300 -232 -508 -290 l-96 -26 -1335 0 -1335 0
                          -96 26 c-208 58 -368 149 -508 290 -141 140 -232 300 -290 508 l-26 96 0 1335 0 1335 26 96 c58 208 149 368 289 508 166 166 385 276 615 310 33 5 645 8
                          1360 7 l1300 -1 96 -27z"/>
                          <path d="M3945 4453 c-244 -34 -410 -271 -351 -501 41 -163 145 -266 307 -308 275 -70 545 179 499 460 -25 157 -140 289 -290 334 -44 13 -125 20 -165 15z
                          m112 -319 c54 -34 63 -117 18 -164 -37 -38 -82 -47 -128 -25 -70 33 -85 125 -29 177 41 39 89 43 139 12z"/>
                          <path d="M2367 3945 c-553 -76 -1020 -492 -1161 -1037 -124 -477 15 -981 368 -1334 550 -550 1422 -550 1972 0 550 550 550 1422 0 1972 -316 315 -739 459
                          -1179 399z m353 -300 c240 -36 444 -139 615 -310 431 -430 431 -1120 0 -1550 -430 -431 -1120 -431 -1550 0 -431 430 -431 1120 0 1550 249 249 591 363 935
                          310z"/></g>
                      </svg>
                    </a> */}
                  </Links>
                </ul>
            </LinksContainer>

            <OpenMenuLogoAndIcon>
            <div className='flex gap-2 items-center'>
              {(
                <div>
                  <Image
                    src="/logo.png"
                    alt="profile"
                    width={25}
                    height={25}
                  />
                </div>
              )}
              <a className='font-mono' href="/" prefetch={false}>LOCHMANNWEB</a>
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
