"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";



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
        y: rect.height / 2,
      });
      setIsVisible(true);
    }
  }, []);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
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
    <section className="md:h-[70vh] font-ranade flex md:flex-row flex-col bg-[#162323e2] bg-blend-multiply text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="object-cover h-full w-full absolute  z-[-1] "
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>
      <div>
        <div className="md:px-62.5 px-10 py-5 md:pt-10 flex md:flex-row flex-col  md:gap-40 h-full ">
          <div className="relative flex md:flex-row flex-col items-center justify-center md:gap-30  w-full">
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
                        : "",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: isVisible ? "transparent" : "white",
                      // REMOVED text shadow when hovering
                      textShadow: isVisible
                        ? "none" // No shadow when spotlight is active
                        : "0 0 8px rgba(0,0,0,0.3)", // Shadow only when not hovering
                      fontSize: "clamp(2.5rem, 8vw, 6rem)",
                      padding: "1.5rem",
                      transition: "all 0.4s ease-in-out",
                    }}
                  >
                    <span className="block font-boska">Reliable</span>
                    <span className="block font-boska">Electrical Service</span>
                    <span className="block font-boska">in Central Oregon</span>
                  </h1>
                </div>
                <Link href='#'><span className="flex items-center gap-3"><FaArrowDown />Scroll Down</span></Link>
              </div>
            </div>
            <div className="flex flex-col  justify-center gap-4 mt-8">
              <div className="flex  items-center gap-4">
                <h2 className="font-boska font-bold md:text-[4rem] text-4xl">15 years</h2>
                <p className="text-lg">of Industrial <br /> Experience</p>
              </div>
              
              <div className="border-1 border-[#243939] px-4.5 py-5 ">
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/license.png"
                  alt="license"
                  width={150}
                  height={100}
                  className="object-contain "
                />
                <p className="text-lg">Licensed. Insured. Trusted </p>
              </div>

              <p className="md:text-lg md:w-[400px] ">
                From new installs to emergency repairs, Grace Electric LLC
                powers homes and businesses with safety, precision, and care.
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
