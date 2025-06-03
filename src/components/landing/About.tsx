import React from "react";
import { Button } from "../ui/button";
import {stats} from "@/lib/constants/data";
import OutlineLetter from "../ui/OutlineLetter";
const About = () => {
  return (
    <section className="md:px-62.5 md:py-37.5 p-10   bg-[url(/images/aboutus.png)] font-ranade bg-blend-overlay bg-cover bg-center bg-no-repeat  text-white ">
      <div className="flex md:flex-row flex-col  items-center gap-10">
        <div className="flex flex-1 flex-col   gap-5">
          <div className="flex md:flex-row flex-col items-center gap-2">
            <div className='relative  md:bottom-40 md:left-5'>
            <OutlineLetter letter='A' font='md:text-[12rem] text-[8rem]' color='#243939' />
            </div>
            <div className="flex flex-col  font-boska md:gap-10 gap-5">
              <h2 className="md:text-6xl text-4xl ">ABOUT</h2>
              <h2 className="md:text-6xl text-4xl font-bold">GRACE ELECTRICAL</h2>
              <p className="font-ranade">
                Grace Electric LLC is a fully licensed and insured electrical
                company proudly serving Central Origon. With 5+ years of
                industry experience, we specialize in residential, commercial,
                and emergency electrical services. Our team is committed to
                safety, precision, and customer satisfaction — whether it’s a
                small repair or a full-scale installation. From the first wire
                to the final switch, we focus on doing the job right the first
                time. At Grace Electric, we don’t just deliver power — we
                deliver peace of mind.
              </p>
              <div className="font-ranade flex  justify-center ">
              <Button size="lg">Explore More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 md:flex-row flex-col justify-center items-center gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-30">
            {stats.map((stat) => (
              <div className="flex flex-col items-center gap-5" key={stat.id}>
                <h2 className="md:text-9xl text-5xl">{stat.value}</h2>
                <p className="text-xl">{stat.label}</p> 
              </div>))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
