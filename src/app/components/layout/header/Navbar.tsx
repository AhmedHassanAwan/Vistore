'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        
        {/* Left - Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              className="bg-[#fce6e4] rounded-full"
              src="/images/logo.png"
              alt="Vistore Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-black">Vistore.</span>
          </div>
        </Link>

        {/* Center - Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="bg-gray-900 text-white px-6 py-2 rounded-full flex gap-7">
            <Link href="#" className="text-sm">🏠 Home</Link>
            <Link href="#" className="text-sm">About Us</Link>
            <Link href="#" className="text-sm">Reviews</Link>
            <Link href="#" className="text-sm">Products</Link>
            <Link href="#" className="text-sm">Blog</Link>
          </div>
        </div>

        {/* Right - Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm">Sign In</Link>
          <Link href="#" className="text-sm border px-4 py-3 rounded-full hover:bg-pink-200 hover:text-white">
            Sign up Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-pink-100 px-6 py-4 shadow-md flex flex-col gap-4 z-50 justify-center items-center">
          <Link href="#" className="text-lg">Home</Link>
          <Link href="#" className="text-lg">About Us</Link>
          <Link href="#" className="text-lg">Reviews</Link>
          <Link href="#" className="text-lg">Products</Link>
          <Link href="#" className="text-lg">Blog</Link>
          <Link href="#" className="text-lg">Sign in</Link>
          <Link href="#" className="text-lg border px-4 py-2 rounded-full text-center hover:bg-pink-200 hover:text-white">
            Sign up Free
          </Link>
        </div>
      )}
    </nav>
  );
}
