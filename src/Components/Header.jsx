import React from 'react';

function Header(){
    return(
        <header id='header-container' className="absolute bg-gradient-to-b from-black w-screen pt-7 z-[999] font-bold text-xs">
            <div id='nav-container' className='flex justify-evenly items-center lg:mx-[22em]'>
                <ul>WHEELS</ul>
                <ul>GALLERY</ul>
                <ul>ENGINEERING</ul>
                <h1 className="text-white font-thin text-6xl">Vossen</h1>
                <ul>FINISHING</ul>
                <ul>BLOG</ul>
                <ul>CONTACT</ul>
            </div>
        </header>
    );
}

export default Header