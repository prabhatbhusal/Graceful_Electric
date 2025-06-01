import React from 'react'
import Image from 'next/image'
import OutlineLetter from '../ui/OutlineLetter'
const Achievements = () => {
  return (
    <section className='px-62.5 py-37.5  bg-[url(/images/achievements.png)] font-ranade bg-blend-multiply bg-cover bg-center bg-no-repeat  text-white '>
        <div className='flex md:flex-row flex-col  items-center gap-10'>
        <div className='flex flex-1 flex-col   gap-5'>
        <div className='flex items-center gap-2 justify-center'>
        <OutlineLetter letter='A' font='text-[200px]' color='#243939'/>
        <div className='flex flex-col   gap-2 font-boska md:relative  right-10'>
            <h2 className='text-6xl font-bold'>Our</h2>
            <h2 className='text-6xl font-bold'>Achievements</h2>
        </div>
        </div >
        <p className='flex flex-col text-lg items-center gap-2'>We take pride in delivering top-quality electrical solutions backed by years of experience, satisfied clients, and industry recognition.</p>
        </div>
        <div className='flex flex-1 md:flex-row flex-col justify-center items-center gap-10'>
            <Image src='/icons/home.png' alt='logo' width={200} height={100}/>
            <Image src='/icons/rate.png' alt='logo' width={200} height={100}/>
            <Image src='/icons/elite.png' alt='logo' width={200} height={100}/>
            <Image src='/icons/angi.png' alt='logo' width={200} height={100}/>
            
        </div>
        </div>
        

    </section>
  )
}

export default Achievements