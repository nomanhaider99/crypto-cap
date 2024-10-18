import { features } from '@/data/features'
import React from 'react'
import Button from './button'
import { FaArrowRight } from 'react-icons/fa'

const Features = () => {
  return (
    <div className='w-full flex flex-col pt-16 relative gap-5'>
        {/* Text-Area */}
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-medium text-white'>CryptoCap Amazing Features</h1>
            <p className='text-zinc-300 text-xs font-light'>Exclusive sensational features to prepare your best investment in cryptocurrency.</p>
        </div>
        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4 mt-5'>
          {
            features.map((feature, index) => (
              <div key={index} className='bg-white/5 sm:h-[20vw]  w-full rounded-xl p-4 py-6 flex flex-col justify-between gap-2 shadow-lg'>
                  <div className=''>
                    <div className='p-2 h-14 w-14 flex justify-center items-center bg-white/70 rounded-full'>
                      {feature.logo}
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <h1 className='text-white font-medium'>{feature.feature}</h1>
                    <p className='text-xs font-light mt-2 text-zinc-400'>{feature.description}</p>
                  </div>
                  <div>
                    <Button text='See Explained' textOnly icon={<FaArrowRight /> as any} />
                  </div>
              </div>
            ))
          }
        </div>
        {/* Question */}
        <div className='w-full flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-0 sm:px-10 px-5 rounded-xl border-[0.5px] border-zinc-100/15 mt-5 p-4'>
            <div className='flex flex-col'>
              <h2 className='text-white font-medium'>New In Cryptocurrency?</h2>
              <p className='text-zinc-400 text-xs font-light w-[60%]'>We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.</p>
            </div>
            <div>
              <Button
                text='Learn & Explore Now'
               />
            </div>
        </div>
        {/* Light-Purple-Shadow */}
        <div className='sm:w-[17vw] sm:h-[18vw] w-[40vw] h-[45vw] -mt-12 sm:ml-24 rounded-[40vw] bg-purple-200 border-none shadow-none blur-[26vw] sm:blur-[10vw] absolute sm:-mt-2 z-0'></div>
    </div>
  )
}

export default Features