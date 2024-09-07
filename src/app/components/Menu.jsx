
'use client'
import React from 'react';
import About from '@/app/About/page';
import MyWork from '@/app/MyWork';
import Expertise from '@/app/Expertise';

function App() {
  const path = location.pathname;

  const UrlStruktur = () => {
    switch (path) {
      case '/about':
        return <About />;
      case '/my-work':
        return <MyWork />;
      case '/expertise':
        return <Expertise />;
    }
  };

  return (
    <div>
      <nav className='flex justify-evenly py-5 px-10'>
        <a href="/" className=''>lochmann</a>

        <div className='flex gap-5'>
        <a href="/about">about</a>
        <a href="/my-work">my work</a>
        <a href="/expertise">expertise</a>
        </div>

        <a href="mailto:linemoller1907@mail.com?subject=Subject Her&body=Din besked her." className=''>contact</a>
        {/* <a href="tel:+45427584" className=''>Call</a> */}
      </nav>
      {UrlStruktur()}
    </div>
  );
}

export default App;


// 'use client'

// import React, { useEffect, useState } from 'react';
// import supabaseClient from '@/app/lib/supabaseClient';

// import About from '@/app/About/page';
// import MyWork from '@/app/MyWork';
// import Expertise from '@/app/Expertise';

// const MyComponent = () => {
//   const [menu, setMenu] = useState([]);

//   const path = window.location.pathname;

// const UrlStruktur = () => {
//   switch (path) {
//     case '/about':
//       return <About />;
//     case '/my-work':
//       return <MyWork />;
//     case '/expertise':
//       return <Expertise />;
//   }
// };

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const { data, error } = await supabaseClient
//           .from('LochmannWeb')
//           .select('menu');
         

//         if (error) {
//           throw error;
//         }

//         setMenu(data); // Opdaterer komponentens state med de hentede titler
//       } catch (error) {
//         console.error('Error fetching menu:', error.message);
//       }
//     };

//     fetchMenu();
//   }, []);

//   console.log(menu);

//   return (
//     <div>
//       <ul>
//         {menu.map((item, index) => (
//           <li key={index}>
//             <nav>
//               <a href="/">{item.menu.slice(0, 1)[0].menu}</a>
//             </nav>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default MyComponent;