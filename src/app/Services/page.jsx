// "use client"

// import React, { useEffect, useState } from 'react'
// import { ServicesData } from '../data/ServicesData'

// const getClasses = (isMobile) => ({
//     container: {
//         display: 'grid',
//         gap: isMobile ? '1.5rem' : '2rem',
//         padding: isMobile ? '2rem' : '8rem',
//     },
//     title: {
//         fontSize: isMobile ? '1.8rem' : '3rem',
//     },
//     emner: {
//         fontSize: isMobile ? '15px' : '20px',
//         paddingBottom: isMobile ? '' : '0.5rem',
//     },
//     content: {
//         fontSize: isMobile ? '10px' : '15px',
//     },
//   });

// const Services = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//       // Check if window exists (only on the client side)
//       const handleResize = () => {
//         setIsMobile(window.innerWidth < 599);
//       };
  
//       handleResize(); // Set initial value
//       window.addEventListener("resize", handleResize);
  
//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []);
  
//     const classes = getClasses(isMobile);

//   return (
//     <div style={classes.container}>
//         <div>
//             <h1 style={classes.title}>{ServicesData.title}</h1>
//         </div>

//         <div>
//             <h2 style={classes.emner}>{ServicesData.websiteDevelopment.title}</h2>
//             <li style={classes.content}>{ServicesData.websiteDevelopment.content1}</li>
//             <li style={classes.content}>{ServicesData.websiteDevelopment.content2}</li>
//             <li style={classes.content}>{ServicesData.websiteDevelopment.content3}</li>
//         </div>

//         <div>
//             <h2 style={classes.emner}>{ServicesData.redesign.title}</h2>
//             <li style={classes.content}>{ServicesData.redesign.content1}</li>
//             <li style={classes.content}>{ServicesData.redesign.content2}</li>
//         </div>

//         <div>
//             <h2 style={classes.emner}>{ServicesData.UXUIDesign.title}</h2>
//             <li style={classes.content}>{ServicesData.UXUIDesign.content1}</li>
//             <li style={classes.content}>{ServicesData.UXUIDesign.content2}</li>
//         </div>

//         <div>
//             <h2 style={classes.emner}>{ServicesData.SEOAndSpeedOptimization.title}</h2>
//             <li style={classes.content}>{ServicesData.SEOAndSpeedOptimization.content1}</li>
//             <li style={classes.content}>{ServicesData.SEOAndSpeedOptimization.content2}</li>
//         </div>

//         <div>
//             <h2 style={classes.emner}>{ServicesData.SupportAndMaintenance.title}</h2>
//             <li style={classes.content}>{ServicesData.SupportAndMaintenance.content1}</li>
//             <li style={classes.content}>{ServicesData.SupportAndMaintenance.content2}</li>
//         </div>
//     </div>
//   )
// }

// export default Services