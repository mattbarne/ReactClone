import React, { useState, useEffect } from 'react';

function Hero(){
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["Wheels", "Finish", "Art"];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const heroStylesheet = {
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
    };

    const videoStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
    };

    const textStyles = {
        position: 'relative',
        zIndex: 1,
        color: 'white',
        textAlign: 'center',
    };

    return(
        <main className="bg-white">
            <div id='hero-container' style={heroStylesheet} className="object-contain absolute z-1 flex justify items-start min-h-screen h-auto w-screen">
                <video
                src="https://vossenwheels.com/wp-content/uploads/2024/07/Web-Banner-Zero-Racing-HF-7-.mp4"
                type="video/mp4"
                style={videoStyles}
                muted
                autoPlay
                loop
                />
                <div id='hero-text-container' className='pt-[8em] pl-[6em]'>
                    <h1 id='hero-text' style={textStyles} className="text-[8.5em] leading-[98%] text-left font-thin text-white">
                        Engineered<br/>
                        <span className='flex'>{words[wordIndex]}</span>
                    </h1>
                </div>
            </div>
        </main>
    );
}

export default Hero;