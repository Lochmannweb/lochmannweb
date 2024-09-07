import React from 'react'
import { ErfaringData } from '../data/ErfaringData';

const Erfaring = () => {
  return (
    <div>
      <h1>{ErfaringData.title}</h1>
      <div>
        <h2>{ErfaringData.manager}</h2>
        <h2>{ErfaringData.intership}</h2>
        <h2>{ErfaringData.uddannelse}</h2>
      </div>
    </div>
  )
}

export default Erfaring
