
import React from 'react'

const Hero = () => {
  return (
    <div className=' text-black pt-20   w-full max-w-[840px] mx-auto text-center'>
         <div className='text-4xl font-bold'> Pioneering communication in
         <span className='bg-gradient-to-r from-pink-700  to-indigo-700
            bg-clip-text text-transparent'> software delivery</span>
         </div>
         <div className='py-7'>Accelerate development with AI-driven speed from 
            design to delivery faster than ever before. 
         </div>
         <div >
            <input type="text" className='pr-32 pl-2 py-3 border bg-black rounded-lg mr-2
            text-white ' 
            placeholder='Enter your work email' />
            <button className='bg-indigo-800 px-5 py-3 mt-3 rounded-lg'>Request Early Access</button>
            <p className='py-20 text-lg '>Say goodbye to manual requirement building. Let Reqops speed things up</p>
         </div>
    </div>
  )
}



export default Hero


