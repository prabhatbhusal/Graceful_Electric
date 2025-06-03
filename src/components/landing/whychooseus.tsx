import React from 'react'
import Image from 'next/image'
import { Features } from '@/lib/constants/data'
import OutlineLetter from '../ui/OutlineLetter'
import { Button } from '../ui/button'
const whychooseus = () => {
  return (
    <section className='md:px-62.5 p-10 md:py-20 bg-[url(/images/whychooseus.png)] bg-cover bg-center bg-no-repeat font-ranade text-[#BCD3D3]'>
      <div className='flex flex-row justify-center items-center  md:mb-10 mb-5 font-boska'>
            <OutlineLetter color='#243939' letter='C' font='md:text-[11rem] text-[7rem]'  />
            <div className='md:text-5xl  text-3xl relative right-5'>
            <h2 className=''>Why</h2>
            <h2>ChooseUs</h2>
            </div>
        </div>
      <div className='flex md:flex-row flex-col  items-center '>
        
        {Features.map((item) => (
          <div className={`flex flex-col md:gap-10 gap-5 md:px-10 p-5 md:flex-1 flex-1 items-center justify-center ${item.id%2==0? 'bg-[#162323]':'bg-[#243939]' }`} key={item.id}>
                <OutlineLetter color={`${item.id%2==0? '#243939':'#162323' }`} letter={`0 ${item.id}`} font='text-[7rem]'  />
            <div className='flex flex-col justify-center  items-center md:gap-30 gap-10'>
                <h2 className='md:text-2xl text-xl '>{item.title}</h2>
                <Image src={item.url} alt={item.title}  width={240} height={240} className='md:h-[240px] md:w-[240px] h-[120px] w-[120px] object-cover' />
                <p className='text-lg '>{item.description}</p>
              
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <Button size='lg' className='px-15'>Learn More</Button>
      </div>
    </section>
  )
}

export default whychooseus