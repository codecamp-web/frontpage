import React, { useState } from 'react'
import {IoMenu,IoClose} from 'react-icons/io5'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const changeNav = () =>{
    setNav(!nav)
  }

  return (
    <div className=' bg-black text-white h-24 font-serif '>
      <div className=' flex max-w-[1240px] w-full h-full mx-auto items-center justify-between p-5'>
        <div className='flex items-center'>
          <h1 className='text-3xl pb-2 pr-5 font-bold'>req
            <span className='bg-gradient-to-r from-indigo-800  to-pink-700
            bg-clip-text text-transparent'>ops</span></h1>
          
          <ul className='hidden md:flex gap-5'>
            <li>Features</li>
            <li>Membership</li>
            <li>Free Generator</li> 
          </ul>
        </div>
        <div className='hidden md:flex gap-5 items-center '>
          <p>Already a member ?</p>
          <button className='border px-5 py-3 '>Sign in</button>
        </div>
        <div onClick={changeNav} className='cursor-pointer text-2xl md:hidden pr-5'>
        {!nav ? <IoClose /> : <IoMenu />}
        </div>
        <ul className={!nav ? ' absolute top-0 left-0 mt-24 pl-5 w-full bg-black text-zinc-500 md:hidden' : 'hidden'}> 
          <li className='border-b-2 w-full py-2'>Features</li>
          <li className='border-b-2 w-full py-2'>Membership</li>
          <li className='border-b-2 w-full py-2 '>Free Generator</li>
          <li className='text-center py-3'>Already a member ? </li>
          <li className='text-center py-3'>Sign in </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

