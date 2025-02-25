'use client';
import React from 'react'

const Home = () => {
return (
  <div className='flex flex-col items-center gap-0 m-0'>
    <div className='relative w-full h-[92vh]'>
      <div className='relative w-full h-full'>
        <div className='absolute inset-0 w-full h-full'>
          <video autoPlay muted loop playsInline src="Homevideo.mp4" id='backgroundHome' className='absolute inset-0 object-cover w-full h-full'
          ></video>
        </div>
      </div>

<div className='absolute top-[70vh] left-[10vh]' id='homeContent'>
<h1 className='text-3xl italic font-bold text-white'>Gearshift Garages</h1>
</div>
</div>

<div className='w-full m-0'>
  </div>

<div className='w-full m-0'>

<h2 className="px-4 py-4 text-4xl font-bold text-center text-white">CATEGORIES</h2>

<div className='w-full'>

  <div className='flex h-[45vh] gap-6'>

    <div className='items-center justify-center flex-shrink-0 w-1/3 m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl'>
      <img src="Ferrari250GTO.jpg" alt="Ferrari250GTO" className='object-cover transition-transform duration-500 ease-in-out rounded-xl tranform hover:scale-110 -z-0' />
    </div>

    <div className='w-2/3 px-6 border-l-2 border-white'>
      <h2 className='pt-4 pb-16 text-5xl text-white underline'>1-0-1</h2>
      <p className='py-8 text-5xl italic text-white'>SMALL DESCRIPTION ON 1-0-1 MODELS.</p>
    </div>

  </div>

</div>

<div className='w-full'>

<div className='flex h-[45vh] gap-6'>

<div className='w-2/3 px-6 border-r-2 border-white'>
<h2 className='pt-4 pb-16 text-5xl text-right text-white underline'>CLASSIC</h2>
<p className='py-8 text-5xl italic text-right text-white'>SMALL DESCRIPTION ON CLASSIC MODELS.</p>
</div>

<div className='items-center justify-center flex-shrink-0 w-1/3 m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl'>
<img src="Ferrari250GTO.jpg" alt="Ferrari250GTO" className='object-cover transition-transform duration-500 ease-in-out rounded-xl tranform hover:scale-110' />
</div>

</div>

</div>

<div className='w-full'>

<div className='flex h-[45vh] gap-6'>

<div className='items-center justify-center flex-shrink-0 w-1/3 m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl'>
<img src="RollsRoyceLaRoseNoireDroptail.jpg" alt="RollsRoyceLaRoseNoireDroptail" className='object-cover transition-transform duration-500 ease-in-out rounded-xl tranform hover:scale-110' />
</div>

<div className='w-full px-6 border-l-2 border-white md:w-2/3'>
  <h2 className='pt-4 pb-16 text-3xl text-white underline md:text-5xl'>MOST EXPENSIVE</h2>
  <p className='py-8 text-xl italic text-white md:text-5xl'>SMALL DESCRIPTION ON THE MOST EXPENSIVE MODELS.</p>
</div>

</div>

</div>

<div className='w-full'>

<div className='w-full'>

  <div className='flex flex-col h-auto gap-6 md:flex-row md:h-[45vh]'>

    <div className='w-full px-6 border-r-2 border-white md:w-2/3'>
      <h2 className='pt-4 pb-16 text-3xl text-right text-white underline md:text-5xl'>FASTEST</h2>
      <p className='py-8 text-xl italic text-right text-white md:text-5xl'>SMALL DESCRIPTION ON FASTEST MODELS.</p>
    </div>

    <div className='items-center justify-center flex-shrink-0 w-full m-4 mx-auto my-auto overflow-hidden text-center transition-transform duration-300 ease-in-out shadow-lg rounded-xl hover:shadow-2xl md:w-1/3'>
      <img src="2021-Koenigsegg-Jesko-Absolut.jpg" alt="KoenigseggJeskoAbsolut" className='object-cover transition-transform duration-500 ease-in-out transform rounded-xl hover:scale-110' />
    </div>

  </div>

</div>

</div>

</div>

</div>
)
}

export default Home;