import React from 'react'
import Button from './button'
import { started } from '@/data/started'

const Started = () => {
  return (
    <div className='w-full flex sm:flex-row flex-col gap-5 sm:gap-0 justify-between items-center pt-16 pb-10'>
      <div className='flex flex-col '>
        <h1 className='text-3xl font-medium text-white'>How To Get Started</h1>
        <p className='text-zinc-300 my-2 text-sm font-light mb-5'>Simple and easy way to start your investment <br /> in cryptocurrency</p>
        <Button
            text='Get Started'
            className='py-4 sm:w-[10vw] w-full pl-7'
         />
      </div>
      <div className='flex flex-col gap-2'>
        {
          started.map((item, index) => (
            <div key={index} className='flex items-center gap-4 px-4 bg-white/10 py-5 rounded-xl'>
              <div className='p-2 flex justify-center items-center bg-white/20 rounded-full'>
                {item.icon}
              </div>
              <div className='flex flex-col'>
                <h2 className='text-lg text-white font-medium'>{item.title}</h2>
                <p className='text-sm font-light text-zinc-400 w-[80%]'>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Started