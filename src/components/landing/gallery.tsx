'use client';
import Image from 'next/image';
import { useEffect, useRef, useCallback } from 'react';
import { Gallery } from '@/lib/constants/data';

const GallerySlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryTextRef = useRef<HTMLDivElement>(null);
  const scrollInterval = 4000;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const itemWidth = 340;
 
  const totalGallery = [...Gallery, ...Gallery, ...Gallery];

  // Memoized scaling update function
  const updateImageScaling = useCallback(() => {
    const container = containerRef.current;
    const galleryText = galleryTextRef.current;
    if (!container || !galleryText) return;

    const galleryBox = galleryText.getBoundingClientRect();
    const images = container.querySelectorAll('.gallery-image');

    images.forEach((img: Element) => {
      const imgBox = (img as HTMLElement).getBoundingClientRect();
      const isOverlapping =
        imgBox.left < galleryBox.right && imgBox.right > galleryBox.left;

      if (isOverlapping) {
        (img as HTMLElement).style.width = '340px';
        (img as HTMLElement).style.height = '450px';
        (img as HTMLElement).style.opacity = '0.7';
        (img as HTMLElement).style.zIndex = '1';
        (img as HTMLElement).style.marginTop = '200px';
      } else {
        (img as HTMLElement).style.transform = 'scale(1)';
        (img as HTMLElement).style.opacity = '1';
        (img as HTMLElement).style.zIndex = '5';
      }
    });
  }, []);

  // Auto-scroll with improved logic
  useEffect(() => {
    const scrollGallery = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollAmount = itemWidth   ;
      const singleSetWidth = Gallery.length * (itemWidth );
      const currentScroll = container.scrollLeft;

      // Reset when we've scrolled through one complete set
      if (currentScroll >= singleSetWidth) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = 0;
        
        // Use requestAnimationFrame for better timing
        requestAnimationFrame(() => {
          container.style.scrollBehavior = 'smooth';
          container.scrollLeft = scrollAmount;
          updateImageScaling();
        });
      } else {
        container.style.scrollBehavior = 'smooth';
        container.scrollLeft = currentScroll + scrollAmount;
      }

      // Update scaling after scroll
      setTimeout(updateImageScaling, 100);
    };

    timeoutRef.current = setInterval(scrollGallery, scrollInterval);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [updateImageScaling]);

  // Handle resize and scroll events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateImageScaling();
    };

    const handleResize = () => {
      updateImageScaling();
    };

    // Initial scaling
    updateImageScaling();

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateImageScaling]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!timeoutRef.current) {
      timeoutRef.current = setInterval(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAmount = itemWidth  ;
        const singleSetWidth = Gallery.length * (itemWidth   );
        const currentScroll = container.scrollLeft;

        if (currentScroll >= singleSetWidth) {
          container.style.scrollBehavior = 'auto';
          container.scrollLeft = 0;
          
          requestAnimationFrame(() => {
            container.style.scrollBehavior = 'smooth';
            container.scrollLeft = scrollAmount;
            updateImageScaling();
          });
        } else {
          container.style.scrollBehavior = 'smooth';
          container.scrollLeft = currentScroll + scrollAmount;
        }

        setTimeout(updateImageScaling, 100);
      }, scrollInterval);
    }
  };

  return (
    <div className="relative h-[637px] overflow-hidden bg-[#0d1a1b] md:pl-62.5 pl-10">
      {/* Gallery Title - Top Left */}
      <div
        ref={galleryTextRef}
        className="absolute top-0 z-20 md:w-[300px]  "
      >
        <h2 className="md:text-[11rem] text-[5rem] md:w-[300px] font-ranade font-bold text-[#243131] ">
          gallery
        </h2>
      </div>

      {/* Image Container */}
      <div
        ref={containerRef}
        className="flex h-full items-center  gap-5 overflow-x-auto scrollbar-hide absolute top-0 md:left-[250px]  cursor-grab active:cursor-grabbing"
        style={{
          width: 'calc(100% - 62.5px)',
          scrollSnapType: 'x mandatory',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {totalGallery.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className="gallery-image relative md:h-[637px] md:w-[340px] flex-shrink-0 transition-all duration-700 ease-in-out will-change-transform scroll-snap-align-start"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover  pointer-events-none select-none"
              priority={index < 5}
              sizes="340px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;