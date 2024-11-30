import React from 'react'
import { assets } from '../assets/assets';
const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <img src={assets.logo} alt="error" className='mb-5 w-40'/>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam dolor adipisci suscipit nam minima neque, iure eos maxime consequatur quos. Ut officiis aliquam dolorum delectus ex, cumque consequuntur? Possimus?</p>
      </div>



      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>



      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
          <li>+91-8260922708</li>
          <li>cse.21bcse73@silicon.ac.in</li>
        </ul>
      </div>


      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 ChatZ - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
