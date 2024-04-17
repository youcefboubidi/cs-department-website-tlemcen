import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ImageCarousel = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slidesPerView: 1,
        spacing: 15,
    });

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
                <div className='bg-white w-full h-[400px] rounded-3xl bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/University.jpg')` }}></div>
            </div>
            <div className="keen-slider__slide">
                <div className='bg-white w-full h-[400px] rounded-3xl bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/University2.jpg')` }}></div>
            </div>
            <div className="keen-slider__slide">
                <div className='bg-white w-full h-[400px] rounded-3xl bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('/University3.jpg')` }}></div>
            </div>
        </div>
    );
};

export default ImageCarousel;