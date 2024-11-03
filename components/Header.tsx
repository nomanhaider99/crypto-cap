'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import Button from './button'
import { TbWorld } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex justify-between items-center py-5'>
      <div>
        <Logo />
      </div>
      <div className='hidden sm:flex gap-4 items-center text-zinc-300 text-xs font-light'>
        <Link href={"/"}><h4 className='cursor-pointer hover:text-seagreen transition-all'>Home</h4></Link>
        <Link href={"/learn"}><h4 className='cursor-pointer hover:text-seagreen transition-all'>Learn</h4></Link>
        <Link href={"/market"}><h4 className='cursor-pointer hover:text-seagreen transition-all'>Market</h4></Link>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='text-white flex items-center gap-1 text-xs'><TbWorld /> EN <IoIosArrowDown /></div>
        <Button text='Login' />
      </div>
      <div className='sm:hidden block' onClick={toggleMenu}>
        {isOpen ? <IoClose size={25} color='#fff' /> : <FiMenu size={25} color='#fff' />}
      </div>

      {/* Hamburger Menu */}
      <div className={`fixed top-0 right-0 w-full h-full bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg z-50`}>
        <div className='flex flex-col items-end p-5'>
          <IoClose size={25} color='#000' className='cursor-pointer' onClick={toggleMenu} />
        </div>
        <div className='flex flex-col items-start bg-white h-full w-full p-5'>
          <Link href={"/"}><h4 className='cursor-pointer hover:text-seagreen transition-all'>Home</h4></Link>
          <Link href={"/learn"}><h4 className='cursor-pointer hover:text-seagreen transition-all'>Learn</h4></Link>
          <Link href={"/market"}><h4 className='cursor-pointer hover:text-seagreen transition-all'>Market</h4></Link>
          <div className='mt-5'>
            <div className='text-black flex items-center gap-1 text-xs'><TbWorld /> EN <IoIosArrowDown /></div>
            <Button text='Login' className='my-2 py-2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
