import React from 'react';


function HandcraftCard() {
    return(
        <section id='card-parent-container' className='bg-[#ffffff] dark:bg-[#181A1B] grid grid-cols-1 gap-4'>
            <div id='card-container' className='bg-[#F8F9FA] dark:bg-[#1B1E1F] flex flex-col justify-center items-left pb-[2em] pt-[2em] gap-[em] sm:items-center lg:flex-row lg:justify-around md:mt-[4em] 2xl:mx-[20.3em] lg:mx-[5.8em] md:mx-[3em]'>
                <div id='card-text-left'>
                    <h1 className='pb-[1em] pl-[.5em] leading-snug font-thin text-4xl sm:text-5xl lg:text-6xl'>Handcrafted in<br/>Miami, FL</h1>
                </div>
                <div id='card-img-right' className='flex justify-center'>
                    <video
                        className='h-[16em] w-[20.5em] object-cover sm:h-[20em] sm:w-[12em] md:w-[38em] lg:w-[38em] lg:h-[18em]'
                        src="https://vossenwheels.com/wp-content/uploads/2024/03/Vossen-Ad-2023-Temp-Video-25sec-616x268-1.mp4"
                        type="video/mp4"
                        muted
                        autoPlay
                        loop
                    />
                </div>
            </div>
        </section>
    );
}

export default HandcraftCard;