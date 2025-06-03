import Hero from '@/components/landing/Hero'
// import GradientHoverText from '@/components/GradientTextHover'
import Achievements from '@/components/landing/Achievements'
import Services from '@/components/landing/services'
import React from 'react'
import About from '@/components/landing/About'

import WhyChooseUs from '@/components/landing/whychooseus'
import Gallery from '@/components/landing/gallery'
import Testimonials from '@/components/landing/Testimonials'
const page = () => {
  return (
    <main>  
      <Hero />
      <Testimonials />
      <About/>
      <Services/>
      <Achievements />
      <WhyChooseUs />
      <Gallery />
      
      
      {/* Add more components here as needed */}
    </main>
  )
}

export default page