import React from 'react'
import Logo from './Logo'
import { RiInstagramFill } from 'react-icons/ri'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full py-10 border-t-[0.5px] border-zinc-200/20 mt-10 flex flex-wrap justify-between items-start gap-8 sm:gap-0'>
      <div className='w-full md:w-[40%] flex flex-col'>
        <Logo />
        <div className='flex gap-2 my-5'>
          <RiInstagramFill size={20} color='#fff' />
          <FaFacebook size={20} color='#fff' />
          <FaTwitter size={20} color='#fff' />
          <FaYoutube size={20} color='#fff' />
        </div>
        <div className='text-xs font-light text-white'>
          2021 CoinMarketCap. All rights reserved
        </div>
      </div>
      <div className='w-full md:w-[20%] flex flex-col gap-4'>
        <div className='text-sm font-medium text-white'>About Us</div>
        <div className='flex flex-col text-xs text-zinc-400 gap-1'>
          <h4>About</h4>
          <h4>Careers</h4>
          <h4>Blog</h4>
          <h4>Legal & privacy</h4>
        </div>
      </div>
      <div className='w-full md:w-[20%] flex flex-col gap-4'>
        <div className='text-sm font-medium text-white'>Services</div>
        <div className='flex flex-col text-xs text-zinc-400 gap-1'>
          <h4>Applications</h4>
          <h4>Buy Crypto</h4>
          <h4>Affiliate</h4>
          <h4>Institutional Services</h4>
        </div>
      </div>
      <div className='w-full md:w-[20%] flex flex-col gap-4'>
        <div className='text-sm font-medium text-white'>Learn</div>
        <div className='flex flex-col text-xs text-zinc-400 gap-1'>
          <h4>What is Cryptocurrency?</h4>
          <h4>Crypto Basic</h4>
          <h4>Tips & Tutorials</h4>
          <h4>Market Update</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
