import React from "react";
import { ForsideData } from "../data/ForsideData";
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import "@fontsource/keania-one";

const breakpoints = {
  md: '768px', 
  lg: '1024px', 
};

const Container = styled.div({
  display: 'grid',
  position: 'absolute',
  paddingTop: '4rem',
  textAlign: 'start',
  padding: '2rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    paddingLeft: '23rem',
    paddingTop: '12rem',
  },
});

const HeaderTitle = styled.div({
  fontFamily: '"Keania One", sans-serif',
  fontSize: '40px',
  margin: 'auto',
  marginTop: '-3rem',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '55px',
    },
  [`@media (min-width: ${breakpoints.lg})`]: {
    fontSize: '59px',
    lineHeight: '4.5rem',
    },
});

const Content = styled.div({
  fontSize: '15px',
  marginBottom: '3rem',
  textAlign: 'start',
  color: '#aaa',
  [`@media (min-width: ${breakpoints.md})`]: {
    fontSize: '15px',
    marginBottom: '3rem',
    textAlign: 'center',
    },
});

export default function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {/* {(!isMobile && 
      <img className="md:-mt-12" src="/Header-bg.png" alt="bg"  />
    )} */}

    {(!isTablet && 
      <img className="-mt-12 md:-mt-12" src="/Header-bg.png" alt="bg" width={2000} /> 
    )}
    <Container>
        <HeaderTitle>{ ForsideData.subheader}</HeaderTitle>
        <Content>{ForsideData.content}</Content>
    </Container>
    </>
  );
}
