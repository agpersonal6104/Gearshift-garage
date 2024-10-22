'use client';
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-0 m-0'>
      <div className='h-[92vh] w-full'>
        <video autoPlay muted loop playsInline src="Homevideo.mp4" id='backgroundHome'></video>

        <div className='absolute top-[70vh] left-[10vh]' id='homeContent'>
          <h1 className='text-3xl italic font-bold text-white'>Gearshift Garages</h1>
        </div>
      </div>

      <div className='h-[100vh] bg-black w-full m-0'>
        <h1>Hello</h1>
      </div>
      
    </div>
  )
}

export default Home;