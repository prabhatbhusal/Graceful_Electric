import React from 'react'
import Image from 'next/image'
import OutlineLetter from '../ui/OutlineLetter'
const Achievements = () => {
  return (
    <section className='md:px-62.5 p-15 md:py-37.5  bg-[url(/images/achievements.png)] font-ranade bg-blend-multiply bg-cover bg-center bg-no-repeat  text-white '>
        <div className='flex md:flex-row flex-col  items-center md:gap-10'>
        <div className='flex flex-1 flex-col   gap-5'>
        <div className='flex items-center gap-2 justify-center'>
        <OutlineLetter letter='A' font='md:text-[200px] text-[150px]' color='#243939'/>
        <div className='flex flex-col   gap-2 font-boska md:relative  right-10'>
            <h2 className='md:text-6xl text-4xl font-bold'>Our</h2>
            <h2 className='md:text-6xl text-4xl font-bold'>Achievements</h2>
        </div>
        </div >
        <p className='flex flex-col text-lg items-center gap-2'>We take pride in delivering top-quality electrical solutions backed by years of experience, satisfied clients, and industry recognition.</p>
        </div>
        <div className='flex flex-1 md:flex-row flex-col justify-center items-center  gap-10'>
            <Image src='/icons/home.png' alt='logo' width={200} height={100} className='md:h-[150px] md:w-[240px] h-[120px] w-[120px] object-cover'/>
            <Image src='/icons/rate.png' alt='logo' width={200} height={100} className='md:h-[150px] md:w-[240px] h-[120px] w-[120px] object-cover'/>
            <Image src='/icons/elite.png' alt='logo' width={200} height={100} className='md:h-[150px] md:w-[240px] h-[120px] w-[120px] object-cover'/>
            <Image src='/icons/angi.png' alt='logo' width={150} height={100} className='md:h-[150px] md:w-[240px] h-[120px] w-[120px] object-cover '/>
            
        </div>
        </div>
        

    </section>
  )
}

export default Achievements