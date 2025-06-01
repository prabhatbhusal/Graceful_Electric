'use client'
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

const Hero = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Initialize spotlight at center
  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setPosition({
        x: rect.width / 2,
        y: rect.height / 2
      });
      setIsVisible(true);
    }
  }, []);

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <section className=" h-[100vh] font-ranade flex md:flex-row flex-col bg-[#162323e2] bg-blend-multiply text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="object-cover h-full w-full absolute  z-[-1] "
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>
      <div>
        <div className="pl-62.5 pt-10 pr-[100px] flex md:flex-row flex-col flex-wrap  gap-20 h-full ">
          <div className="relative">
            <div className=" flex flex-col items-center justify-center  overflow-hidden">
      <div className=" w-full">
        <div 
          className="relative "
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Text with spotlight effect - ONLY text color changes */}
          <h1 
            ref={textRef}
            className=" font-bold leading-tight transition-all duration-300"
            style={{
              backgroundImage: isVisible 
                ? `radial-gradient(200px at ${position.x}px ${position.y}px, 
                    #f7fb08 0%, 
                    #c5b118 30%, 
                    rgb(255, 255, 255) 70%, 
                    #ffffff 100%)`
                : '',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: isVisible ? 'transparent' : 'white',
              // REMOVED text shadow when hovering
              textShadow: isVisible 
                ? 'none'  // No shadow when spotlight is active
                : '0 0 8px rgba(0,0,0,0.3)', // Shadow only when not hovering
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              padding: '1.5rem',
              transition: 'all 0.4s ease-in-out',
            }}
          >
            <span className="block font-boska">Reliable</span>
            <span className="block font-boska">Electrical Service</span>
            <span className="block font-boska">in Central Oregon</span>
          </h1>
          
         
        </div>
      </div>
    </div>
            <div className="flex flex-col justify-center gap-4 mt-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/license.png"
                  alt="license"
                  width={150}
                  height={100}
                  className="object-contain "
                />
                <p className="text-2xl">Licensed. Insured. Trusted </p>
              </div>

              <p className="md:text-2xl md:w-[500px] ">
                From new installs to emergency repairs, Grace Electric LLC
                powers homes and businesses with safety, precision, and care.
              </p>
              <div>
                <Button size="lg">
                  <Link href="">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute md:right-80 text-black  right-0">
            <div className="bg-[url(/images/job.png)] overflow-y-hidden bg-cover bg-center h-[535px] w-[437px] rounded-2xl flex items-center justify-center md:pr-25 relative ">
              <div className="bg-[#E2E7EA] text-[#162323] p-4 rounded-r-4xl relative md:top-30  shadow-lg text-center pr-6">
                <h2 className="md:text-4xl text-2xl font-boska">Excellent Job</h2>
                <p className="md:text">
                  Jacob did a great job. He was able to install the outlet very
                  quickly. Extremely professional and I could not be happier
                  with his work.
                </p>
              </div>
            </div>
            <Image
              src="/icons/apos.svg"
              alt=""
              width={50}
              height={50}
              className="md:relative md:bottom-130 md:left-170 z-[10]  object-contain"
            />
            <div className="bg-[url(/images/bg3.png)]  bg-cover bg-center md:h-[338px] md:w-[240px] px-2 rounded-2xl flex flex-col gap-5 items-center  text-center justify-center  md:relative md:bottom-135 md:left-120 ">
              <h2 className="md:text-2xl text-xl">Joy B</h2>
              <span className="flex md:text-3xl text-yellow-500">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
              <p className="md:text-lg">
                Grace Electric is absolutely wonderful to deal with. Jacob is
                professional, personable and just all around pleasant. Great
                experience and service.
              </p>
            </div>
            <div className="md:relative top-10 md:left-120 ">
            <div className='absolute bottom-170 overflow-hidden'>
              <Image src='/images/boy.png' alt='boy' width={300} height={50} className="z-100"/>
              
              </div>
              <div className="bg-[url(/images/bg1.png)]  bg-cover bg-center md:h-[221px] relative bottom-[200px] right-[671px] md:w-[353px] px-2 rounded-2xl flex flex-col gap-5 items-center  text-center justify-center  ">
                <h2 className="md:text-2xl text-xl">Top-Notch</h2>

                <p className="md:text-lg">
                  This man was knowledgeable and very helpful addressing my need
                  for long term management.
                </p>
              </div>
              <div className=" md:h-[160px] md:w-[528px]  py-3 bg-[#E2E7EA] rounded-2xl flex flex-col gap-5 px-10 text-center justify-center relative bottom-[620px] right-[800px]   ">
                <p className="text-xl">
                  “With more than 5 years of experience delivering excellence
                  and satisfaction”
                </p>

                <div className="flex justify-between items-center bg-[#BCD3D3] py-2 px-7 gap-4">
                  <p className="md:text-lg">At your Service</p>
                  <div className="flex items-center gap-2 ml-2">
                    <span className="md:text-4xl text-2xl">
                      <CiHeart />
                    </span>
                    <span className="md:text-3xl text-2xl">
                      <FaRegComment />
                    </span>

                    <span className="md:text-3xl text-2xl">
                      <PiPaperPlaneTiltLight />
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[url(/images/bg2.png)]  bg-cover bg-center md:w-[220px] md:h-[268px] px-2 rounded-2xl flex flex-col  items-center justify-between py-10  text-center relative bottom-[730px] right-[260px]  ">
                <h2 className="md:text-2xl text-xl">Impressive</h2>
                <p className="text-lg">
                  I would proudly refer anyone looking for an expert electrician
                  who truly puts people ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
