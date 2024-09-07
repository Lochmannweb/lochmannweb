import React from 'react'
import { ForsideData } from '../data/ForsideData'

const Header = () => {
  return (
    <div>
        <h1>{ForsideData.title}</h1>
        <h2>{ForsideData.header}</h2>
    </div>
  )
}

export default Header