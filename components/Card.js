import React from 'react'
import mellow from '../../images/mellow.jpg'

const Card = () => { 
  return (
   <div className=' text-black w-full font-serif text-center  max-w-[1240px] mx-auto '>
     <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-3'>
      <div className='border-2 p-5'>
         <p>AI-Assited Requirement Management</p>
      </div>
      <div className='border-2 p-5'>
         <p>Efficient AI-Driven Communication</p>
      </div>
      <div className='border-2 p-5'>
         <p>Scopre Creep Management</p>
      </div>
     </div>
      
   </div>
  )
}

export default Card

