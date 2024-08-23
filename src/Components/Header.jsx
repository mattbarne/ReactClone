import React from 'react';
import Logo from '../assets/VossenLogo.png'

function Header(){
    return(
        <header id='header-container' className='absolute bg-gradient-to-b from-black w-screen pt-7 z-[999] font-bold text-xs'>
            <div id='nav-container' className='text-white'>
                <ul className='flex justify-evenly items-center list-none'>
                    <li id='header-elements'>WHEELS</li>
                    <li id='header-elements'>GALLERY</li>
                    <li id='header-elements'>ENGINEERING</li>
                    <img src={Logo} className='w-[16em] mx-[4em]'/>
                    <li id='header-elements'>FINISHING</li>
                    <li id='header-elements'>BLOG</li>
                    <li id='header-elements'>CONTACT</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;