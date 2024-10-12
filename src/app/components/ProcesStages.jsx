import React from 'react'
import { ProcesStagesData } from '../data/ProcesStagesData'

const ProcesStage = () => {
  return (
    <div className='text-center grid gap-5 mb-56'>
      <div>
        <h1 className='text-xs md:text-base'>{ProcesStagesData.title}</h1>
        <hr className='md:w-56 m-auto' />
        <h2 className='text-xl md:text-3xl md:px-44'>{ProcesStagesData.content}</h2>
      </div>

      <div className='md:flex md:justify-center md:gap-5 border-2 border-solid rounded-xl p-10'>
        <div className='border-2 border-solid rounded-xl p-10'>
          <h3>{ProcesStagesData.project1.title}</h3>
        </div>

        <div className='border-2 border-solid rounded-xl p-10'>
          <h3>{ProcesStagesData.project2.title}</h3>
        </div>

        <div className='border-2 border-solid rounded-xl p-10'>
          <h3>{ProcesStagesData.project3.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProcesStage