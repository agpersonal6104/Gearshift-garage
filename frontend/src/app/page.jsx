'use client';
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center m-0'>
      <video autoPlay muted loop playsInline src="Homevideo.mp4" id='backgroundHome'></video>

      <div className='absolute top-[70vh] left-[10vh]' id='homeContent'>
        <h1 className='text-3xl italic font-bold text-white'>Gearshift Garages</h1>
        
      </div>
    </div>
  )
}

export default Home;