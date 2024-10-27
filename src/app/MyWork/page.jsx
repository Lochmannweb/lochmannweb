"use client"

import React, { useEffect, useState } from 'react'
import Header from '../components/MyWorkComponent/Header';
import Contact from '../components/Contact';
import StepByStep from '../components/MyWorkComponent/StepByStep';
import MyWork from '../components/MyWorkComponent/MyWork';

const Aboutpage = () => {

  return (
      <div>
        <Header />  
        <StepByStep />
        <MyWork />
        <Contact />
      </div>
  )
}

export default Aboutpage