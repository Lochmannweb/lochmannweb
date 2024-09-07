import React from 'react'
import { MyWorkData } from '../data/MyWorkData'

const MyWork = () => {
  return (
    <div>
        <h1>{MyWorkData.title}</h1>
        <h2>{MyWorkData.content}</h2>
        <div>
            <h3>{MyWorkData.project1}</h3>
            <h3>{MyWorkData.project2}</h3>
            <h3>{MyWorkData.project3}</h3>
        </div>
    </div>
  )
}

export default MyWork