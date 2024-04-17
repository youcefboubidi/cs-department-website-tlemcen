import React from 'react';
import ImageCarousel from './ImageCarousel';
function Hero() {
    const paragraph = 'Welcome to the Department of Computer Science, where innovation meets tradition in the pursuit of knowledge and technological advancement. Our department, located at University of Tlemcen, is dedicated to fostering a vibrant academic community, providing students with a robust curriculum that spans the latest in computational theory, practical coding skills, and groundbreaking research.'
    return (
        <>
            <ImageCarousel />

            <div className='bg-[#A32829] text-[#FDE4BE] p-4 sora-500 my-8 rounded-xl'>
                <h1 className='text-2xl sora-600'>WELCOME TO THE DEPARTMENT OF COMPUTER SCIENCE</h1>
                <hr />
                <p className='mt-4'>{paragraph}</p>
            </div>
        </>
    );
}

export default Hero;
