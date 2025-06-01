'use client';
import React, { useEffect, useRef } from 'react';
import { reviews } from '@/lib/constants/data';
import OutlineLetter from '../ui/OutlineLetter';

type Review = {
  name: string;
  rating:number;
  message: string;
  service: string;
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="w-[calc(100%/3-1rem)] flex flex-col justify-center items-center flex-shrink-0 font-ranade bg-[#1f2f30] text-white p-6 mx-2 rounded-lg">
    <div className="text-yellow-400 text-xl mb-2">
      {'★'.repeat(review.rating)}
    </div>
    <h3 className="text-2xl font-semibold mb-2">{review.name}</h3>
    <p className="text-xl mb-4 line-clamp-4">{review.message}</p>
    <a className="underline text-sm text-gray-300" href="#">{review.service}</a>
  </div>
);

export default function ReviewSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;
      const scrollAmount = container.clientWidth / 3 + 20; // Show 3 at a time, 16px margin
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[url(/images/testimonials.png)]  px-62.5 py-37.5">
      <div className='flex md:flex-row flex-col items-center justify-center mb-10'>
      <OutlineLetter letter='T' color='#243131' font="text-[11rem]"/>
      <h2 className="text-white text-5xl text-center mb-8 font-boska1">
        WHAT OUR <br /> <span className="font-extrabold font-boska">CUSTOMERS ARE SAYING</span>
      </h2>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}
