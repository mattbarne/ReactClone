import React from 'react'
import BoxImage1 from '../assets/LC2.jpg';
import BoxImage2 from '../assets/HF6-4.jpg';

function Catalog() {
  return (
    <div id='catalog-parent-container' className='bg-white dark:bg-black'>
        {/*Text container*/}
        <div id='catalog-text-container' className='flex justify-center items-center text-center flex-col'>
            <div id='catalog-text-header' className='pt-[6em] pb-[1em]'>
                <h1 className='font-thin text-5xl'>Meet the worlds best.</h1>
            </div> 
            <div id='catalog-paragraph' className='text-[#525252] dark:text-white'>
                <p className='font-thin'>Vossen's TÜV Verified forged wheel factory is constantly pumping out<br/>new designs and colors, making the perfect look and feel for any vehicle.</p>
            </div>
        </div>
        {/*Image box container*/}
        <div id='box-parent-container' className='grid grid-cols-1'>
            <div id='box-container' className='py-[2em] flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-center'>
                <img src={BoxImage1} className='h-[16em] sm:h-[20em] sm:w-[38em] sm:mt-[4em] lg:mt-0 lg:w-[38.5em] object-cover'/>
                <img src={BoxImage2} className='h-[16em] sm:h-[20em] sm:w-[38em] sm:mb-[2em] lg:mb-0 lg:w-[38.5em] object-cover'/>
            </div>
        </div>
            {/*Button container*/}
        <div id='catalog-button' className='flex justify-center items-center'>
            <button className='outline-[#ABA499] border-solid shadow-none p-5 font-bold text-black dark:text-white lg:mb-[4em]'>EXPLORE ALL WHEELS</button>
        </div>
    </div>
  )
}

export default Catalog