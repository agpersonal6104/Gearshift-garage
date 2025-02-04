// import React, { useRef } from 'react';
// import { brands } from '../constants'; // Import the brands array from constants.js
// import '../app/globals.css';
// const BrandCard = ({ name, icon }) => (
//   <div className="w-[500px] h-[780px] flex-shrink-0 m-4 shadow-lg rounded-lg items-center justify-center text-center hover:shadow-2xl transition-transform duration-300 ease-in-out overflow-hidden">
//     <img src={icon} alt={name} className="w-[100%] h-[100%] object-cover rounded-md transition-transform duration-500 ease-in-out tranform hover:scale-110" />
//   </div>
// );

// const BrandMenu = () => {
//   const scrollRef = useRef(null);
//   const handleScroll = (d) => {
//     if (scrollRef.current) {
//       const scrollAmount = d === 'left' ? -400 : 400;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
//     }
//   }
//   return (
//     <>
//       <div className='mt-4 brand-menu'>
//         <div className='relative top-0 left-0 w-full p-4 text-center text-white'>
//           <h1 className='text-5xl font-bold font-montserrat'>EXPLORE THE BRANDS</h1>
//         </div>
//         <div className="flex items-center w-full p-8">
//           <button onClick={() => handleScroll('left')} className="mr-4 text-white h-[100%] rounded-md p-2 hover:bg-[rgb(0,0,0,0.5)] transition">←</button>
//           <div ref={scrollRef} className='flex overflow-x-auto scrollbar-hide w-[100%]'>
//             {brands.map((brand, index) => (
//               <BrandCard key={index} name={brand.name} icon={brand.icon} />
//             ))}
//           </div>
//           <button onClick={() => handleScroll('right')} className="ml-4 text-white h-[100%] rounded-md p-2 hover:bg-[rgb(0,0,0,0.5)] transition">→</button>

//         </div>
//       </div>
//     </>
//   );
// }

// export default BrandMenu;

"use client"

const BrandMenu = () => {
  return (
    <div className="w-full p-4 text-white bg-gray-800">
      <h2 className="mb-2 text-2xl font-bold">Brand Menu</h2>
      <p>This is a placeholder for the BrandMenu component.</p>
    </div>
  )
}

export default BrandMenu;

