import React from 'react'
import OutlineLetter from '../ui/OutlineLetter'
import Image from 'next/image'
import { image } from '@/lib/constants/data'

const services = () => {
  return (
    <section className=' px-62.5 '>
        <div className='flex flex-row items-center justify-center gap-10 text-white font-ranade'>
          <div className='flex  md:flex-row flex-col  relative'>
            <OutlineLetter letter='S' color='#242f2e' font="text-[11rem] relative " />
            <div className='flex flex-col  gap-5 '>
            <h2 className='text-7xl text-white font-bold  font-boska1'>Our </h2>
            <h2 className='text-7xl text-white font-bold  font-boska'>Services</h2>
            <p>From troubleshooting and repairs to full electrical installations, Grace Electric LLC provides safe, efficient, and code-compliant solutions for homes and businesses alike.</p>
            </div>
          </div>
          <div className='flex md:flex-row ' >
            {image.map((item, index) => 
              (<div key={index} className='flex flex-col items-center  justify-center  gap-5'>
                
                <Image src={item.src} width={2000} height={500} alt={item.alt} className='hover:w-[4000px] h-200  transition-all duration-500 ease-in-out  ' />
                
                </div>                ))


            }
          </div>
        </div>
    </section>
  )
}

export default services