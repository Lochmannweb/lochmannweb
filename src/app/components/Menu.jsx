
'use client'
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
{/* lukket mobil menu */}
<nav className='sm:hidden'>
  <div className='flex justify-between p-5'>
    <div className='flex items-center'>
      <a href="/" prefetch={false}>LochmannWeb</a>
    </div>

    <div className='flex items-center'>
      <button
      className='sm:hidden'
      onClick={toggleMenu}>
        <svg 
          xmlns="http://www.w3.org/2000/svg"  
          fill='#fff'
          viewBox="0 0 50 50" 
          width="30px" 
          height="30px">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
        </svg>
      </button>
    </div>
  </div>
</nav>

{/* Åben mobil menu */}
<div className={`fixed inset-0 bg-black transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 sm:hidden`}>
  <div className='flex justify-end p-5'>
    <button
    className=''
    onClick={toggleMenu}>
        <svg 
        xmlns="http://www.w3.org/2000/svg"  
        fill='#fff'
        viewBox="0 0 50 50" 
        width="30px" 
        height="30px">
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
        </svg>
    </button>
  </div>

  <ul>
    <li className='grid justify-center text-center' onClick={toggleMenu}>
      <a href="/" prefetch={false}>Home</a>
      <a href="/About" prefetch={false}>About</a>
      <a href="/MyWork" prefetch={false}>My Work</a>
      <a href="/Expertise" prefetch={false}>Expertise</a>
    </li>
  </ul>
</div>

{/* Desktop menu */}
      <section className=''> 
      <nav className='py-5 px-10'>
        <div className='sm:flex hidden justify-between gap-3'>
          <div>
            <a href="/" className=''>LochmannWeb</a>
          </div>
  
          <div className='flex gap-5'>
            <a href="/About">About</a>
            <a href="/MyWork">My Work</a>
            <a href="/Expertise">Expertise</a>
          </div>
  
          <div>
            <a href="Contact" prefetch={false}>Contact</a>
          </div>
        </div>
      </nav>
      </section>
    </>
  );
}

export default App;