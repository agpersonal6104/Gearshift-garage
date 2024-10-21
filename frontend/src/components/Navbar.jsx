'use client';
import React from 'react';
<link href="https://fonts.googleapis.com/css?family=Bruno+Ace+SC:regular" rel="stylesheet" />
const Navbar = () => {
  return (
    <nav className="text-white navbar h-[8vh]">
      <div className="w-full mx-auto">
        <div className="flex items-center w-full m-0">
          <ul className="flex justify-start w-1/3 gap-8 navbar-menu">
            <li><a href="#" className="text-2xl hover:text-gray-300">Brands</a></li>
            <li><a href="#" className="text-2xl hover:text-gray-300">Images</a></li>
          </ul>
          <div className="flex items-center justify-center w-1/3 navbar-logo">
            <h1 className='text-5xl font-bold'>Gearshift Garage</h1>
          </div>
          <div className="flex items-center justify-end w-1/3 gap-12 search-bar">
            
            <ul>
              <li><a href="#" className='text-2xl font-bold hover:text-gray-300'>Compare</a></li>
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
