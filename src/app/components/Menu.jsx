'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const styles = {
  menuLukket: (isMobile, isTablet) => ({
    backgroundColor: 'black',
    height: isMobile ? '4rem' : isTablet ? '4rem' : '6rem',
  }),
  openMenu: (isMobile, isTablet) => ({
    position: 'fixed',
    width: isMobile ? '' : isTablet ? '' : '19.5%',
    marginLeft: 'auto',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'black',
    height: isMobile ? '' : isTablet ? '' : '10%',
    zIndex: '50',
    textAlign: 'center',
    paddingTop: '0.8rem',
    padding: '1rem', 
    display: isMobile ? 'grid' : isTablet ? 'grid' : 'grid',
    alignItems: isMobile ? '' : isTablet ? '' : 'center',
  }),
  desktopMenu: (isMobile, isTablet) => ({
    display: isMobile ? '' : isTablet ? '' : 'flex',
    flexDirection: 'row-reverse',
  }),
  menuList: (isMobile, isTablet) => ({
    display: isMobile ? 'grid' : isTablet ? 'grid' : 'flex',
    gap: isMobile ? '1.25rem' : isTablet ? '1.25rem' : '1rem', 
    textAlign: isMobile ? 'center' : isTablet ? 'center' : '',
    fontSize: isMobile ? '19px' : isTablet ? '19px' : '19px', 
    backgroundColor: 'var(--menu-bg)', 
  }),
  closeIcon: {
    cursor: 'pointer',
    fill: '#fff',
    width: '30px',
    height: '30px',
    marginLeft: 'auto',
  },
  container: (isMobile, isTablet) => ({
    paddingLeft: isMobile ? '1rem' : isTablet ? '1rem' : '1rem', 
    paddingRight: isMobile ? '1rem' : isTablet ? '1rem' : '1rem', 
    paddingTop: '1.2rem', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 600);
      setIsTablet(width >= 600 && width < 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* lukket  */}
      <nav style={styles.menuLukket(isMobile, isTablet)}>
        <div style={styles.container(isMobile, isTablet)}>
          <div>
            <a href="/" prefetch={false}>LOCHMANNWEB</a>
          </div>

          {!isMobile && !isTablet && (
            <div>
              <Image
                src="/w-logo.png"
                alt='profil'
                width={55}
                height={55} />
            </div>
          )}

          <div className='flex items-center'>
            <button
              className="grid gap-2 "
              onClick={toggleMenu}>
              <>
                <div className='decoration-white w-32 ml-auto'><hr /></div>
                <div className='decoration-white w-24 ml-auto'><hr /></div>
                <div className='decoration-white w-10 ml-auto'><hr /></div>
              </>
            </button>
          </div>
        </div>
      </nav>

      {/* Åben */}
      <nav style={styles.openMenu(isMobile, isTablet)} className={`${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div style={styles.desktopMenu(isMobile, isTablet)}>
          <svg 
            style={styles.closeIcon}
            xmlns="http://www.w3.org/2000/svg"  
            fill='#fff'
            viewBox="0 0 50 50" 
            width="30px" 
            height="30px"
            onClick={toggleMenu}>
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
          </svg>

          <ul>
            <li style={styles.menuList(isMobile, isTablet)}>
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
