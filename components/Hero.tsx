import React from 'react'
import Button from './button'
import { trends } from '@/data/trends'
import { BsGraphUpArrow } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='w-full flex flex-col gap-10 pt-32 pb-10 relative'>
        {/* Text-Area */}
        <div className='flex flex-col items-center z-10'>
            <h1 className='text-4xl text-white font-medium'>Start and Build Your Crypto Portfolio Here</h1>
            <div>
            <p className='text-sm leading-5 text-zinc-400 font-light'>Only at CryptoCap, you can build a good portfolio and learn <span className=''>best practices about cryptocurrency.</span></p>
            </div>
            <Button text='Get Started' className="px-8 py-2 mt-4" />
        </div>
        {/* Market-Trend-Area */}
        <div className='z-10 flex flex-col gap-2'>
            <div className='text-white font-medium'>Market Trend</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-4'>
                {
                    trends.map((trend, index) => (
                        <div key={index} className='p-4 py-6 shadow-lg w-full md:w-[20vw] bg-white/10 rounded-xl flex flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-2'>
                                    {trend.icon}
                                    <h2 className='text-white uppercase'>{trend.currencyName}</h2>
                                    <h4 className='text-zinc-700 bg-zinc-300 rounded text-xs px-2'>{trend.fullForm}</h4>
                                </div>
                            </div>
                            <div>
                            <div className='flex items-center justify-between px-2 gap-2'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-white text-lg'>{trend.rate}</h3>
                                        <h4 className='text-sm text-zinc-400'>{trend.percent}</h4>
                                    </div>
                                    <div>
                                        <BsGraphUpArrow
                                            size={45}
                                            color='#0fae96'
                                         />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* Purple-Shadow */}
        <div className='sm:w-[45vw] sm:h-[37vw] w-[80vw] h-[85vw] -mt-12 sm:ml-32 rounded-[40vw] bg-deeppurple border-none shadow-none blur-[4vw] absolute sm:-mt-32 z-0'></div>
    </div>
  )
}

export default Hero
