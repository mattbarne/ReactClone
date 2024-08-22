import React from 'react';
import Logo from '../assets/VossenLogo.png'

function Header(){
    return(
        <header id='header-container' className='absolute bg-gradient-to-b from-black w-screen pt-7 z-[999] font-bold text-xs'>
            <div id='nav-container' className='flex justify-evenly items-center text-white'>
                <ul id='header-elements'>WHEELS</ul>
                <ul id='header-elements'>GALLERY</ul>
                <ul id='header-elements'>ENGINEERING</ul>
                <img src={Logo} className='w-[16em] mx-[4em]'/>
                <ul id='header-elements'>FINISHING</ul>
                <ul id='header-elements'>BLOG</ul>
                <ul id='header-elements'>CONTACT</ul>
            </div>
        </header>
    );
}

export default Header;