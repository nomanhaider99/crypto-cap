import Image from 'next/image'
import React from 'react'
import FirstImage from '@/public/images/1.png'
import Button from './button'
import { learn } from '@/data/learn'

const basics = learn.filter((item) => item.learnType === 'crypto basic');
const tips = learn.filter((item) => item.learnType !== 'crypto basic');


const Learn = () => {
  return (
    <div className='w-full flex flex-col pt-20 pb-10'>
       <div className='flex flex-col items-center'>
         {/* Text-Area */}
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='text-2xl font-medium text-white'>Learn About Cryptocurrency</h1>
          <p className='text-zinc-300 text-xs font-light'>Learn all about cryptocurrency to start investing</p>
        </div>
          {/* Images */}
          <div className='flex flex-col mt-5'>
            <div className='flex flex-col gap-2'>
              {/* Upper Images */}
              <div className='flex md:flex-row flex-col w-full gap-1'>
                <div className='w-full md:w-1/2'>
                  <Image
                      src={FirstImage}
                      alt=''
                      height={650}
                      width={800}
                      className='rounded-xl w-full h-auto'
                  />
                </div>
                <div className='w-full md:w-1/2 flex sm:flex-row flex-col gap-2'>
                    {
                      basics.map((item, index) => (
                        <div key={index} className='flex flex-col p-2 rounded-xl bg-deeppurple/30'>
                          <div className=''>
                            <Image
                                src={item.image}
                                alt=''
                                height={200}
                                width={300}
                                className='rounded-xl'
                            />
                          </div>
                          <div className='flex flex-col gap-4 py-4 px-4'>
                            <h2 className='bg-white/30 text-center py-1 md:w-[8vw] w-full text-zinc-300 text-xs rounded'>{item.learnType}</h2>
                            <h1 className='text-white text-sm font-medium'>{item.title}</h1>
                            <p className='text-xs text-zinc-400 font-light'>{item.description}</p>
                          </div>
                        </div>
                      ))
                    }
                </div>
              </div>
              {/* Lower Images */}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:flex-row flex-col gap-4'>
              {
                    tips.map((item, index) => (
                      <div key={index} className='flex w-full md:w-[22.1vw] flex-col p-2 rounded-xl bg-deeppurple/30'>
                        <div className=''>
                          <Image
                              src={item.image}
                              alt=''
                              height={200}
                              width={300}
                              className='rounded-xl'
                           />
                        </div>
                        <div className='flex flex-col gap-4 py-4 px-4'>
                          <h2 className='bg-white/30 text-center py-1 w-full md:w-[8vw] text-zinc-300 text-xs rounded'>{item.learnType}</h2>
                          <h1 className='text-white text-sm font-medium'>{item.title}</h1>
                          <p className='text-xs text-zinc-400 font-light'>{item.description}</p>
                        </div>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
       </div>
        {/* Buttons */}
        <div className='ml-10 mt-4'>
          <Button
              text='See All Articles'
              textOnly
           />
        </div>
    </div>
  )
}

export default Learn
