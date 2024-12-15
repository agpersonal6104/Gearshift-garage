'use client';
import BrandMenu from '@/components/BrandMenu';
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-0 m-0'>
      <div className='relative w-full h-[92vh]'>
        <div className='relative w-full h-full'>
          <div className='absolute inset-0 w-full h-full'>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              src="Homevideo.mp4" 
              id='backgroundHome' 
              className='absolute inset-0 object-cover w-full h-full'
            ></video>
          </div>
        </div>

        <div className='absolute top-[70vh] left-[10vh]' id='homeContent'>
          <h1 className='text-3xl italic font-bold text-white'>Gearshift Garages</h1>
        </div>
      </div>

      <BrandMenu />

      <div className='w-full m-0'>
        
        <h2 className="px-4 text-4xl font-bold text-left text-white">CATEGORIES</h2>
      
        <div className='w-full'>
          
          <div className='flex h-[45vh]'>
            
            <div className='w-1/3 px-2'></div>
            
            <div className='w-2/3 px-6 border-l-2 border-white'>
            <h2 className='pt-4 pb-16 text-5xl text-white underline'>1-0-1</h2>
            <p className='py-8 text-5xl italic text-white'>SMALL DESCRIPTION ON 1-0-1 MODELS.</p>
            </div>
            
          </div>
          
        </div>
        
        <div className='w-full'>
          
          <div className='flex h-[45vh]'>
            
            <div className='w-2/3 px-6 border-r-2 border-white'>
            <h2 className='pt-4 pb-16 text-5xl text-right text-white underline'>CLASSIC</h2>
            <p className='py-8 text-5xl italic text-right text-white'>SMALL DESCRIPTION ON CLASSIC MODELS.</p>
            </div>
            
            <div className='w-1/3 px-6 mx-auto my-auto'>
              <img src="Ferrari250GTO.jpg" alt="Ferrari250GTO" className='rounded-2xl' />
            </div>
            
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Home;