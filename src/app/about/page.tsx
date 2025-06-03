import React from 'react'
import WhyChooseUs from '../../components/landing/whychooseus'
import Achievements from '@/components/landing/Achievements'
import { about } from '@/lib/constants/data'
import Image from 'next/image'
const page = () => {
  return (
    <section>
        <div>
          <div className='bg-[url(/images/about-bg.png)] bg-cover bg-center'>
            {about.map((item, index) => (
              <div key={index} className={`font-boska text-white md:px-62.5 p-10 md:py-12  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col   gap-8`}>
                <Image src={item.url} alt='hello' height={200} width={500} className='object-cover '/> 
                <div className='flex flex-col '>

                <h1 className="text-5xl  font-bold font-boska1  mb-4">{item.title}</h1>
                <h1 className="text-5xl  font-bold  mb-4">{item.title1}</h1>
                <p className="text-lg font-ranade">{item.content}</p>
                <p className="text-lg font-ranade">{item.content1}</p>
                
                </div>
              </div>
            ))}
          </div>
        </div>
        <WhyChooseUs />
        <Achievements />
      
    </section>
  )
}

export default page