import React from 'react';
import Logo from '../assets/VossenLogo.png';
import Facebook from '../assets/favicons/facebook-app-symbol.png';
import Instagram from '../assets/favicons/instagram.png';
import Twitter from '../assets/favicons/twitter.png';
import Youtube from '../assets/favicons/youtube.png';

function Footer(){
    const footerBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    const footerBoxHeader = {
        paddingBottom: '1.5em',
        paddingTop: '6em',
        color: '#A0988B',
    }

    return(
        <div id='footer-parent-container' className='bg-[#0B0B0C] py-[6em]'>
            <div id='footer-top' className='flex justify-between items-center border-solid border-[#7A7164] border-y-[1px] border-l-0 border-r-0 mx-[6em] py-[0.8em]'>
                <div id='footer-socials' className='w-[10em] flex items-center justify-evenly'>
                    <img src={Youtube} />
                    <img src={Instagram} />
                    <img src={Facebook} />
                    <img src={Twitter} />
                </div>
                <img src={Logo} className=' w-[14em] h-[4em]'/>
                <button className='outline-[#ABA499] border-solid border-[1px] shadow-none px-4 p-3 font-semibold text-black dark:text-white'>REQUEST A QUOTE</button>
            </div>
            <div id='footer-bottom' className='mx-[6em] flex justify-between'>
                <div id='footer-bottom-box' style={footerBoxStyle}>
                    <p style={footerBoxHeader}>Wheels</p>
                    <ul>
                        <li>New Releases</li>
                        <li>Forged</li>
                        <li>Hybrid Forged</li>
                        <li>Vossen x Work</li>
                    </ul>
                </div>
                <div id='footer-bottom-box' style={footerBoxStyle}>
                    <p style={footerBoxHeader}>Galleries</p>
                    <ul>
                        <li>Vehicles</li>
                        <li>Wheels</li>
                    </ul>
                </div>
                <div id='footer-bottom-box' style={footerBoxStyle}>    
                    <p style={footerBoxHeader}>Manufacturing</p>
                    <ul>
                        <li>Factory Tour</li>
                        <li>Engineering</li>
                        <li>Finishing</li>
                    </ul>
                </div>
                <div id='footer-bottom-box' style={footerBoxStyle}>
                    <p style={footerBoxHeader}>Blog</p>
                    <ul>
                        <li>Recent</li>
                        <li>Features</li>
                        <li>Owner Spotlight</li>
                        <li>Dealer Spotlight</li>
                        <li>Vossen Forged</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div id='footer-bottom-box' style={footerBoxStyle}>
                    <p style={footerBoxHeader}>Contact</p>
                    <ul>
                        <li>Contact Us</li>
                        <li>Find A Dealer</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;