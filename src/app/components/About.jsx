import { AboutData } from "@/app/data/AboutData"
import Image from "next/image"
import React from 'react'

const About = () => {
  return (
    <section className="grid w-80 md:flex md:justify-center md:gap-3 backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl md:mb-56">
      <div>
        <Image         
        src="/pf-about.png"
        alt='profil'
        width={200}
        height={200}
        className='mt-10 mb-10' />
      </div>

      <div className="text-start">
        <h1 className="text-xs">{AboutData.title}</h1>        
        <h2 className="text-2xl ">{AboutData.subheader}</h2>
        <h3 className="text-md ">{AboutData.content}</h3>
      </div>
    </section>
  )
}

export default About




// Dynmatisk hjemmeside

// 'use client'

// import supabaseClient from '@/app/lib/supabaseClient';
// import React, { useEffect, useState } from 'react'


// const About = () => {
//   const [about, setAbout] = useState([]);

//   useEffect(() => {
//     const fetchAbout = async () => {
//       try {
//         const {data, error} = await supabaseClient
//         .from('LochmannWeb')
//         .select('about')
//         .order('id', { ascending: true });

//         if(error) {
//           throw error;
//         }

//         setAbout(data);
//       } catch (error) {
//         console.error('Something went wrong with about:', error.message);
//       }
//     };
//     fetchAbout();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {about.map((item, index) => (
//           <li key={index}>
//             <h1>{item.about}</h1>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default About