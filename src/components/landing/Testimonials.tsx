'use client';
import React, { useEffect, useRef } from 'react';
import { reviews } from '@/lib/constants/data';
import OutlineLetter from '../ui/OutlineLetter';
import Link from 'next/link';
import { Button } from '../ui/button';

type Review = {
  name: string;
  rating: number;
  message: string;
  service: string;
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="md:w-full h-[268px] flex flex-col justify-center items-center flex-shrink-0 font-ranade bg-[#1f2f30] text-white p-[30px] my-2 ">
    <div className="text-yellow-400 md:text-xl text-lg mb-2">
      {'★'.repeat(review.rating)}
    </div>
    <h3 className="md:text-2xl text-xl font-semibold mb-2">{review.name}</h3>
    <p className="md:text-xl text-lg mb-4 line-clamp-4">{review.message}</p>
    <a className="underline text-sm text-gray-300" href="#">{review.service}</a>
  </div>
);

export default function ReviewSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      const scrollAmount = container.clientHeight / 3 + 20; // Show 3 at a time vertically
      const maxScrollTop = container.scrollHeight - container.clientHeight;

      if (container.scrollTop + scrollAmount >= maxScrollTop) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ top: container.scrollTop + scrollAmount, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[url(/images/testimonials.png)] md:px-70.5 md:py-37.5 p-10">
      <div className='flex flex-row  items-center justify-center mb-10'>
        <OutlineLetter letter='T' color='#243131' font="md:text-[11rem] text-[7rem]"/>
        <h2 className="text-white md:text-5xl text-3xl text-center mb-8 font-boska1">
          WHAT OUR <br /> <span className="font-extrabold font-boska">CUSTOMERS ARE SAYING</span>
        </h2>
      </div>
      <div className='flex md:flex-row flex-col md:gap-40 md:px-20 justify-center text-white items-center'>
        <div className='flex flex-1 flex-col  gap-5   mb-10 md:mb-0 md:w-1/3 w-full'>
        <div>
          <h2 className='md:text-5xl text-3xl font-boska1 font-bold '>Grace Electric in Action</h2>
          <h2 className='md:text-5xl text-3xl font-boska font-bold '>Our Story & Your Words</h2>
          </div>
          <p className='text-white font-ranade text-lg'>Grace Electric is a fully licensed and insured electrical company gratefully serving Central Oregon. With 15+ years of industry experience, we specialize in residential, commercial, and emergency electrical services. Our team is committed to safety, precision, and customer satisfaction — whether it’s a small repair or a full-scale installation.
From the first wire to the final switch, we focus on doing the job right the first time. At Grace Electric, we don’t just deliver power — we deliver peace of mind.</p>
            <div>
              <Link href=''><Button size='lg'>Explore More</Button></Link>
            </div>
        </div>
      
      <div
        ref={containerRef}
        className="flex flex-col flex-1 overflow-y-auto scrollbar-hidden md:h-100"
        style={{ scrollBehavior: 'smooth' }}
      >
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
      </div>
    </div>
  );
}