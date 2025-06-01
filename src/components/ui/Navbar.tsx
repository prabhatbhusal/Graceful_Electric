'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar as NavbarData } from '@/lib/constants/data';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { Button } from './button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full font-ranade  bg-[#182322] shadow-md sticky top-0 z-50">
      <nav className="md:px-62.5 mx-auto flex items-center justify-between px-6 py-4 md:py-12 transition-all duration-300 md:text-2xl ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo1.png"
            alt="Grace Electric Logo"
            width={300}
            height={64}
            className="object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center text-gray-200 text-2xl font-medium">
          {NavbarData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="relative flex items-center focus:underline focus:text-[#6ee7b7] px-1 py-1  duration-500 hover:translate-y-[-4px] hover:underline hover:translate-x-[4px] transition-all  after:block after:h-[2px] after:bg-[#6ee7b7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone Number Button (Desktop only) */}
        <Link href="tel:5417779453" className="hidden md:inline-block">
          <Button variant="default" size="lg" className="text-white flex items-center gap-2">
            <FiPhone className="text-xl" />
            (541) 777 9453
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#182322]/95 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-gray-200"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <FiX />
        </button>

        <ul className="flex flex-col gap-6 text-2xl text-white font-semibold">
          {NavbarData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="block px-4 py-2 rounded transition-all duration-200 hover:bg-[#6ee7b7] hover:text-[#182322]"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone Number Button (Mobile) */}
        <Link href="tel:5417779453">
          <Button variant="default" size="lg" className="text-white flex items-center gap-2">
            <FiPhone className="text-xl" />
            (541) 777 9453
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
