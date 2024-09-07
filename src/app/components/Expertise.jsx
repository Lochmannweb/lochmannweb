import React from 'react'
import { ExpertiseData } from '../data/ExpertiseData';

const Expertise = () => {
  return (
    <div>
      <h1>{ExpertiseData.title}</h1>
      <h2>{ExpertiseData.content}</h2>
        <div>
        <h2>{ExpertiseData.expertise1}</h2>
        <h2>{ExpertiseData.expertise2}</h2>
        <h2>{ExpertiseData.expertise3}</h2>
        </div>
    </div>
  )
}

export default Expertise