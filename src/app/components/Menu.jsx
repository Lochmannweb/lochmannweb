'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Container = styled.div({
    display: 'flex', 
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: 'black',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    boxShadow: '0px 29px 46px #ffffff',
    zIndex: '50',
});

const OpenMenu = styled.div`
  transform: ${props => (props.menuOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease; 
  position: fixed;
  left: 0;
  bottom: 0px; 
  padding: 1rem;
  background-color: black; 
  width: 100%; 
  padding-bottom: 15px;
  box-shadow: 0px 29px 46px;
  z-index: 50;
`;

const Links = styled.div({
  display: 'grid',
  paddingBottom: '20px',
  gap: '10px',
});

const OpenMenuLogoAndIcon = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

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
      <nav>
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
      </nav>

      {/* Open Menu */}
      {menuOpen && ( // Render OpenMenu only when menuOpen is true
        <OpenMenu menuOpen={menuOpen}>
          <div>
            <div>
                <ul>
                  <Links>
                    <a className='text-sm' href="/" prefetch={false}>Home</a>
                    <a className='text-sm' href="/About" prefetch={false}>My jurney</a>
                    <a className='text-sm' href="/MyWork" prefetch={false}>Work / Experience</a>
                    <a className='text-sm' href="/Contact" prefetch={false}>Contact</a>
                    <a className='text-sm' href="/" prefetch={false}>Social Media</a>
                  </Links>
                </ul>
            </div>

            <OpenMenuLogoAndIcon>
                <div>
                  <a href="/" prefetch={false}>LOCHMANNWEB</a>
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
          </div>
        </OpenMenu>
      )}
    </>
  );
}

export default App;
