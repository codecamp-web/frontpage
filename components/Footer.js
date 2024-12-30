import React from 'react'

const Footer = () => {
  return (
   <div className=' w-full text-black  font-serif  pt-20  max-w-[1240px] mx-auto'>
      <div className='py-32 w-full  pt-20  max-w-[840px] mx-auto text-center'>
         <h1 className='text-2xl font-bold'>Join us in revolutionizing global business growth through AI-driven 
            innovation today
         </h1>
         <p className='py-5'>Get early access to our features.</p>
         <div >
            <input type="text" className='pr-32 pl-2 py-3 border bg-black rounded-lg mr-2
            text-white ' 
            placeholder='Enter your work email' />
            <button className='bg-indigo-800 px-5 py-3 mt-3 rounded-lg'>Get Early Access</button>
         </div>
      </div>
      <div className='border-t-4 flex justify-between py-4 items-center'>
      <div className='text-3xl pb-2 pr-5 font-bold '>req
            <span className='bg-gradient-to-r from-indigo-800  to-pink-700
            bg-clip-text text-transparent'>ops</span>
      </div>
      <div className='flex gap-x-3 '>
         <p>Already a member ? </p>
         <p className='px-3 border-2'>Log in</p>
      </div>
      </div>
    </div>
  )
}

export default Footer