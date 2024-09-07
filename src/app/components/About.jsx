import { AboutData } from "@/app/data/AboutData"
import React from 'react'

const About = () => {

  return (
    <div>
      {AboutData.Title}
    </div>
  )
}

export default About


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