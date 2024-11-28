

import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import AbstractHeader from './AbstractHeader';
import Designemner from '../components/Designemner'

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'grid',
  padding: '30px',
  position: 'absolute',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingTop: '13rem',
    paddingLeft: '20rem',
    textAlign: 'start',
    width: '100%',
    gap: '20px',
  },
});

const HeaderTitle = styled.div({
  fontFamily: 'fantasy',
  marginBottom: '1rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '80px',
    lineHeight: '5rem',
    paddingRight: '20rem',
  },
});

export default function Header() {

  return (
    <>
    <AbstractHeader />
    <Container>
        <HeaderTitle className="text-4xl">
          {ForsideData.subheader} <br /> {ForsideData.subheader3}
        </HeaderTitle>
        <Designemner />
    </Container>
    </>
  );
}








// import React from "react";
// import { ForsideData } from "../data/ForsideData";
// import styled from '@emotion/styled';
// import AbstractHeader from './AbstractHeader';

// const breakpoints = {
//   md: '768px', 
//   lg: '1024px', 
// };

// const Container = styled.div({
//   display: 'grid',
//   padding: '30px',
//   position: 'absolute',
//   [`@media (min-width: ${breakpoints.md})`]: {
//     paddingTop: '13rem',
//     textAlign: 'center',
//     width: '100%',
//   },
// });

// const Title = styled.div({
//   fontSize: '15px',
//   color: '#CA8669',
//   [`@media (min-width: ${breakpoints.md})`]: {
//     fontSize: '15px',
//   },
// });

// const HeaderTitle = styled.div({
//   fontFamily: 'fantasy',
//   [`@media (min-width: ${breakpoints.md})`]: {
//     fontSize: '80px',
//     lineHeight: '5rem',
//   },
// });

// export default function Header() {

//   return (
//     <>
//     <AbstractHeader />
//     <Container>
//         <Title>{ForsideData.title1}</Title>
//         <HeaderTitle className="text-4xl">
//           {ForsideData.subheader} <br /> {ForsideData.subheader3}
//         </HeaderTitle>
//     </Container>
//     </>
//   );
// }
