'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="w-full h-20 px-8 border-b border-gray-300 flex justify-center  backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="w-[94%] mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/IMSG-Logo.svg" alt="logo" width={50} height={20} className='object-contain' />
          </Link>
        </div>
        <div className=" font-satoshi space-x-6 gap-10 text-[16px] font-bold hidden md:flex">
          <Link href="/" className="text-green-400 font-semibold hover:text-green-500 border-b-2 border-green-400 pb-1">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-green-400">
            About Us
          </Link>
          <Link href="/projects" className="text-white hover:text-green-400">
            Projects
          </Link>
          <Link href="/news" className="text-white hover:text-green-400">
            News
          </Link>
          <Link href="/units" className="text-white hover:text-green-400">
            Units
          </Link>
          <Link href="/events" className="text-white hover:text-green-400">
            Events
          </Link>
          <Link href="/media" className="text-white hover:text-green-400">
            Media
          </Link>
          <Link href="/contact" className="text-white hover:text-green-400">
            Contact Us
          </Link>
        </div>
        <button className="md:hidden p-2 rounded bg-gray-800 text-white">
          {/* Mobile menu icon */}
          ☰
        </button>
      </div>
    </nav>
  )
}
