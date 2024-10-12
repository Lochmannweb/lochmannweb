import React from 'react'
import { MyWorkData } from '../data/MyWorkData'

const MyWork = () => {
  return (
    <div className='text-center grid gap-5 md:mb-56'>
      <div>
        <h1 >{MyWorkData.title}</h1>
        <hr className='md:w-56 m-auto' />
        <h2 className='text-xl md:text-3xl'>{MyWorkData.content}</h2>
      </div>

      <div className='grid md:grid-cols-3 md:gap-10 backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl md:mb-56'>
          <div>
            <h3 
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div>
            <h3 
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div>
            <h3 
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div>
            <h3 
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div>
            <h3 
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div>
            <h3 
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div>
            <h3 
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project1.title}
            </h3>
          </div>

          <div>
            <h3
            className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project2.title}
            </h3>
          </div>

          <div>
            <h3 className='backdrop-blur-md border-solid border-2 md:p-10 rounded-2xl'>
              {MyWorkData.project3.title}
            </h3>
          </div>
      </div>
    </div>
  )
}

export default MyWork