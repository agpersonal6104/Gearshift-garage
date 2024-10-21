'use client';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-white navbar h-[6vh]">
      <div className="w-full mx-auto">
        <div className="flex items-center w-full m-0">
          <ul className="flex justify-start w-1/3 gap-8 navbar-menu">
            <li><a href="#" className="hover:text-gray-300">Brands</a></li>
            <li><a href="#" className="hover:text-gray-300">Images</a></li>
          </ul>
          <div className="flex items-center justify-center w-1/3 navbar-logo">
            <h1 className='text-3xl font-bold'>Gearshift Garage</h1>
          </div>
          <div className="flex items-center justify-end w-1/3 search-bar">
            <input type="text" placeholder="Search" className="px-3 py-2 text-white bg-gray-800 border-gray-700 rounded-md focus:outline-none" />
            <button type="submit" className="px-3 py-2 bg-gray-700 rounded-md hover:bg-gray-600">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
