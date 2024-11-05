'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const styles = {
  menuLukket: (theme) => css({
    // Stil til lukket menu (kan være tom eller tilpasset)
  }),
  container: css({
    display: 'flex', // Sørg for at bruge flex
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: 'black',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  }),
  openMenu: css({
    // Åben menu stil
    transition: 'transform 0.3s ease',
  }),
  menuList: css({
    // Tilføj menu stil her
  }),
};

function App() {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log('Menu state changed to:', !menuOpen); // Log ændring af menu tilstand
  };

  return (
    <>
      {/* Lukket Menu */}
      <nav css={styles.menuLukket}>
        <div css={styles.container}>
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
        </div>
      </nav>

      {/* Åben Menu */}
      <nav
        css={[styles.openMenu, menuOpen ? css`transform: translateX(0);` : css`transform: translateX(100%);`]}
      >
        <div css={styles.desktopMenu}>
          <svg
            css={styles.closeIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            onClick={toggleMenu}
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>

          <ul>
            <li css={styles.menuList}>
              <a href="/" prefetch={false}>Home</a>
              <a href="/About" prefetch={false}>About</a>
              <a href="/MyWork" prefetch={false}>My Work</a>
              <a href="/Contact" prefetch={false}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
