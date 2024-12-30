
import React from 'react'
import {BiCylinder} from 'react-icons/bi'
import {CiCircleAlert} from 'react-icons/ci'
import {IoMdPeople, IoIosWarning, IoIosChatboxes} from 'react-icons/io'
import {FaDiamond} from 'react-icons/fa6'
import {FaStickyNote, FaRegSmile} from 'react-icons/fa'

const text = '</>'


const Cards = () => {
  return (
    //     <div className=' text-black pt-20   w-full max-w-[840px] mx-auto text-center'>

    <div className=' w-full text-black  font-serif text-center pt-20  max-w-[1240px] mx-auto'>
      <p className='font-bold md:text-2xl py-16 sm:text-sm'>  Never waste more than a day handling over design requirements with these features
      </p>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-3'>
        <div className='border-2 p-5'>
          <img src="" alt="" />
          <p className='pt-20'>AI Process Map Generation</p>
          <p>Who knows about transistion about the technology of the outcome</p>
        </div>
        <div className='col-span-2 border-4 p-5'>
          <img src="" alt="" />
          <p className='pt-20'>Automatic AI Generated User Stories</p>
          <p>Criteria user license with AI stories with lion jerseys</p>
        </div>
      </div>
      <div className='py-7 grid sm:grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-3'>
        <div className='border-2 p-5 '>
          <p className='font-bold py-3'>AI Test Case Generation</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
            impedit? Rerum, aspernatur error repellendus, vero distinctio officia 
            dolor blanditiis quibusdam a similique quidem beatae omnis
         </p>
        </div>
        <div className='border-2 p-5'>
          <p>Import your Designs</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
          impedit? Rerum, aspernatur error repellendus,</p>
        </div>
        <div className='border-2 p-5'>
          <p>Sync to your tools</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
          impedit? Rerum, aspernatur error repellendus,</p>
        </div>
        
      </div>
      <div className='py-14'>
        <p className='font-bold py-7 text-2xl'>Uplift Your Delivery Squad</p>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-3'>
        <div className='border-2 p-5'>
            <BiCylinder className='text-2xl'/>
            <p>80% savings on testing expenditure</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
          <div className='border-2 p-5'>
            <CiCircleAlert className='text-2xl'/>
            <p>Never lose track of your features</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
          <div className='border-2 p-5'>
            <p className='text-left text-2xl'>{text}</p>
            <p>Never lose track of your features</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
        </div>
      </div>
      <div className='py-14'>
        <p>Behind Every Great Delivery</p>
        <p className='pt-3 pb-14 text-2xl font-bold'>The Collective Delivery Squad</p>
        <div className='grid grid-cols-3 gap-y-3 gap-x-3 '>
          <div>
            <IoMdPeople  />
            <p>Project Coordination</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
          <div>
            <IoIosWarning />
            <p>Risk Management</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? </p>
          </div>
          <div>
            <IoIosChatboxes />
            <p>Communication</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
          <div>
            <FaDiamond />
            <p>Strategic Alignment</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
          <div>
            <FaStickyNote />
            <p>Scope Management</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
          <div>
            <FaRegSmile />
            <p>Quality Assurance</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
               impedit? Rerum, aspernatur error repellendus.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards