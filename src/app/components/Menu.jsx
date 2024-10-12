
'use client'
import Image from 'next/image';
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
{/* lukket  */}
<nav className='bg-menu-bg z-50 w-full h-20'>
  <div className='flex justify-between p-5 '>
    <div className='flex items-center uppercase'>
      <a href="/" prefetch={false}>LochmannWeb</a>
    </div>

    <div>
      <Image         
      src="/white-circle-lw.png"
        alt='profil'
        width={50}
        height={50} /> 
    </div>

    <div className='flex items-center'>
    <button
      className="grid gap-2 "
      onClick={toggleMenu}>
        <>
          <div className='decoration-white w-32 '><hr /></div>
          <div className='decoration-white w-24 '><hr /></div>
          <div className='decoration-white w-10 '><hr /></div>
        </>
      </button>
    </div>
  </div>
</nav>

{/* Åben */}
<nav className={`fixed inset-0 bg-menu-bg md:h-20 h-50 transition-transform transform ${menuOpen ? 'translate-x-50' : 'translate-x-full'} z-50 `}>
  <div className='flex justify-end p-5'>
    <div className='flex'>
      <ul>
        <li className='grid md:flex md:justify-end md:pr-10 text-center gap-5 text-xl'>
          <a href="/" prefetch={false}>Home</a>
          <a href="/About" prefetch={false}>About</a>
          <a href="/MyWork" prefetch={false}>My Work</a>
          <a href="/Expertise" prefetch={false}>Expertise</a>
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