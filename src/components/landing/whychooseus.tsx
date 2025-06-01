import React from 'react'
import Image from 'next/image'
import { Features } from '@/lib/constants/data'
import OutlineLetter from '../ui/OutlineLetter'
import { Button } from '../ui/button'
const whychooseus = () => {
  return (
    <section className='px-62.5 py-20 bg-[url(/images/whychooseus.png)] bg-cover bg-center bg-no-repeat font-ranade text-[#BCD3D3]'>
      <div className='flex flex-row justify-center items-center  mb-10 font-boska'>
            <OutlineLetter color='#243939' letter='C' font='text-[11rem]'  />
            <div className='text-5xl relative right-5'>
            <h2 className=''>Why</h2>
            <h2>ChooseUs</h2>
            </div>
        </div>
      <div className='flex md:flex-row flex-col  items-center '>
        
        {Features.map((item) => (
          <div className={`flex flex-col md:gap-10 gap-5 px-10 py-5 md:flex-1 flex-1 items-center justify-center ${item.id%2==0? 'bg-[#162323]':'bg-[#243939]' }`} key={item.id}>
                <OutlineLetter color={`${item.id%2==0? '#243939':'#162323' }`} letter={`0 ${item.id}`} font='text-[7rem]'  />
            <div className='flex flex-col justify-center  items-center gap-30'>
                <h2 className='md:text-2xl text-xl '>{item.title}</h2>
                <Image src={item.url} alt={item.title}  width={240} height={240} />
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