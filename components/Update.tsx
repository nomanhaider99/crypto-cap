import { tabs } from '@/data/tabs'
import React from 'react'
import Button from './button'
import CoinTable from './CoinTable'

const Update = () => {
  return (
    <div className='w-full flex flex-col pt-16 relative gap-5'>
     {/* Text-Area */}
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-medium text-white'>Market Update</h1>
        <p className='text-zinc-300 text-xs font-light'>Cryptocurrency Categories</p>
      </div>
      {/* Tabs and search-bar */}
      <div className='w-full flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-4'>
        {/* Tabs */}
        <div className='flex flex-wrap gap-2 items-center'>
          {
            tabs.map((tab, index) => (
              <div key={index} className='px-2 py-2 bg-white/30 text-white text-xs font-light rounded cursor-pointer'>{tab.tabName}</div>
            ))
          }
        </div>
        {/* Search-Bar */}
        <div>
          <input type="text" className='sm:w-[25vw] w-[70vw] mx-0 py-2 bg-white/5 outline-none text-xs text-white font-light px-4 rounded' placeholder='Search Coin'/>
        </div>
      </div>
      {/* Table */}
      <div className='my-4'>
        <CoinTable />
      </div>
      {/* Button */}
      <div>
        <Button
            text='See All Coins'
            textOnly
         />
      </div>
    </div>
  )
}

export default Update