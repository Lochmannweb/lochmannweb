
'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const getClasses = (isMobile) => ({
  lukketMenu: {
    backgroundColor: '#0000008e',
    zIndex: '50',
    height: '6rem',
    justifyContent: 'center',
  },
  container: {
    paddingLeft: isMobile ? '1rem' : '3rem',
    paddingRight: isMobile ? '1rem' : '3rem',
    paddingTop: '1.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  åbenMenu: {
    position: 'fixed',
    width: '40%',
    marginLeft: 'auto',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'black', 
    height: isMobile ? '3rem' : '6rem', 
    zIndex: '50', 
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: '0.8rem',
  },
  logo: {
    textTransform: 'uppercase',
  },
  image: {
    display: isMobile ? 'none' : '',
  },
});

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

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

  const classes = getClasses(isMobile);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
{/* lukket  */}
<nav style={classes.lukketMenu}>
  <div style={classes.container}>
    <div>
      <a style={classes.logo} href="/" prefetch={false}>LochmannWeb</a>
    </div>

    <div>
      <Image         
        src="/white-circle-lw.png"
        alt='profil'
        style={classes.image}
        width={55}
        height={55} /> 
    </div>

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
<nav style={classes.åbenMenu} className={`${menuOpen ? 'translate-x-30' : 'translate-x-full'}`}>
  <div className='flex justify-end p-5'>
    <div className='flex'>
      <ul>
        <li className='grid md:flex md:justify-end md:pr-10 text-center gap-5 text-xl bg-menu-bg'>
          <a href="/" prefetch={false}>Home</a>
          <a href="/About" prefetch={false}>About</a>
          <a href="/MyWork" prefetch={false}>My Work</a>
          <a href="/Contact" prefetch={false}>Contact</a>
        </li>
      </ul>

      <svg 
        xmlns="http://www.w3.org/2000/svg"  
        fill='#fff'
        viewBox="0 0 50 50" 
        width="30px" 
        height="30px"
        onClick={toggleMenu}>
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
      </svg>
    </div>
  </div>
</nav>
    </>
  );
}

export default App;