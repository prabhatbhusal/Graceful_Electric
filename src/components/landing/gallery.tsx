// components/GallerySlider.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Gallery } from '@/lib/constants/data';

const GallerySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  
  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Images Container */}
      <div className="flex h-full transition-transform duration-700 ease-in-out">
        {Gallery.map((img, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className={`relative h-full w-1/5 cursor-pointer ${
              activeIndex === index 
                ? 'scale-105 z-10' 
                : 'scale-90 opacity-70 hover:scale-95'
            } transition-all duration-500`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gallery Text Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <h2 className="text-9xl font-bold font-ranade text-white ml-10">gallery</h2>
      </div>
    </div>
  );
};

export default GallerySlider;