'use client';
import Link from 'next/link';
import React from 'react';
<link href="https://fonts.googleapis.com/css?family=Bruno+Ace+SC:regular" rel="stylesheet" />
const Navbar = () => {
  return (
    <nav className="text-white navbar h-[8vh]">
      <div className="w-full mx-auto">
        <div className="grid items-center w-full grid-cols-3 m-0">
          <ul className="flex justify-start gap-8 navbar-menu">
            <li><Link href="#" className="text-2xl hover:text-gray-300">Brands</Link></li>
            <li><Link href="#" className="text-2xl hover:text-gray-300">Images</Link></li>
          </ul>
          <div className="flex items-center justify-center navbar-logo">
            <h1 className='text-5xl font-bold'>Gearshift Garage</h1>
          </div>
          
          <div className='flex lg:hidden'>
          </div>
          
          <div className="flex items-center justify-end gap-12 search-bar navbar-menu">
            
            <ul>
              <li><Link href="#" className='text-2xl font-bold hover:text-gray-300'>Compare</Link></li>
            </ul>

            <button type="submit" className="px-3 py-2 rounded-md" id='navbarSearchBtn'>
              <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
