'use client';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Cars', 'Bikes', 'Customisation'];

const PreLoader = () => {

    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000,
    );
    return () => clearTimeout(intervalId);
  }, []);
    
  return (
    <div className='h-[100vh] m-0 bg-black flex justify-center items-center flex-col'>
      <div className='h-[80%] flex flex-col justify-center items-center gap-4'>
        
        <h1 className='text-5xl italic font-bold text-white'>Gearshift Garages</h1>
        <TextTransition springConfig={presets.wobbly} className='text-2xl italic text-white'>{TEXTS[index % TEXTS.length]}</TextTransition>
        
      </div>

      <h2 className='text-lg italic text-center text-white'>Use sound for better experience</h2>
      
      <div className='h-[20%] flex flex-col justify-center items-center'>
        
            <div className="progress-loader">
                <div className="progress" />
            </div>
        
      </div>

    </div>
  );
};

export default PreLoader;