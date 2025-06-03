import React from 'react'
import Image from 'next/image';
import OutlineLetter from '../ui/OutlineLetter';
import { Button } from '../ui/button';
const Contact = () => {
  return (
    <section className='md:px-45 p-10 md:py-10 bg-[url(/images/cta.png)] text-white'>
      <div className='flex md:flex-row  flex-col items-center justify-center  '>
        <div className='flex items-center justify-center md:flex-1'>
        <Image
          src='/images/Group.png'
          alt='contact'
          width={500}
          height={500}
          className='h-100 w-100 object-cover md:object-contain md:h-[500px] md:w-[500px]'
        />
        </div>
        <div className='flex flex-col  md:gap-10 gap-5  flex-1'>
          <div className='flex flex-col relative  '>
          <OutlineLetter letter="Contact Us" font='md:text-[100px] relative left-12' color=''/>
          <h2 className='font-boska md:text-5xl text-2xl relative '>Let’s Powerup your Property</h2>
          </div>
          <p className='font-ranade text-xl'>Whether it’s a quick fix, a full upgrade, or an emergency, Grace Electric LLC is here to help — safely, on time, and with no hidden costs.</p>
          <div className='gap-5 flex flex-col md:flex-row items-center justify-center md:justify-start'>

          <Button size='lg' className='px-15'>Call Us</Button>
          <Button variant='secondary' size='lg'>Message Us </Button>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Contact