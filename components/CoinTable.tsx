import React from 'react'
import Button from './button'
import { coins } from '@/data/coins'
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'

const CoinTable = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='w-full p-4 rounded-xl bg-deeppurple/30'>
        <thead>
          <tr className='text-white text-sm font-light py-4 border-b-[0.5px] border-zinc-200/60'>
            <td className='py-3 text-center'>NO</td>
            <td className='py-3 text-center'>NAME</td>
            <td className='py-3 text-center'>LAST PRICE</td>
            <td className='py-3 text-center'>CHANGE</td>
            <td className='py-3 text-center'>MARKET STATS</td>
            <td className='py-3 text-center'>TRADE</td>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.sNo}
              className='h-16 border-b-[0.5px] border-zinc-400/40 text-sm text-center'
            >
              <td className='text-white font-light align-middle'>{coin.sNo}</td>
              <td className='flex my-5 gap-2 items-center justify-center font-light align-middle'>
                {coin.icon}
                <h2 className='text-white'>{coin.coinName}</h2>
                <div className='text-zinc-400 hidden md:flex'>|</div>
                <h2 className='text-zinc-400 font-light hidden md:flex'>{coin.abbreviation}</h2>
              </td>
              <td className='text-white font-light align-middle'>{coin.lastPrice}</td>
              <td className='text-white font-light align-middle'>{coin.change}</td>
              <td className='translate-x-0 sm:translate-x-24'>
                {
                  coin.change > 0 ? (<BsGraphUpArrow
                    color='#0fae96'
                    size={25}
                />) : (<BsGraphDownArrow color='#FF0000' size={25} />)
                }
              </td>
              <td className='flex justify-center items-center'>
                <Button text='Trade' className='-translate-y-2'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinTable
