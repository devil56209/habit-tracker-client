import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';


function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute text-orange-500 right-1 top-1/2 -translate-y-1/2 z-20 bg-white/80 cursor-pointer hover:bg-white p-3 rounded-full shadow-md"
        >
            <ArrowRight></ArrowRight>
        </button>
    );
}


function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute text-orange-500 left-1 top-1/2 -translate-y-1/2 z-20 bg-white/80 cursor-pointer hover:bg-white p-3 rounded-full shadow-md"
        >
            <ArrowLeft></ArrowLeft>
        </button>
    );
}

const HeroBanner = () => {



    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-full flex justify-center55tems-center bg-white">
            <div className="w-full">
                <Slider {...settings}>

                    <div>
                        <div
                            className="w-full h-[550px] bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/banner1.png')",

                            }}
                        ></div>
                    </div>

                    <div>
                        <div
                            className="w-full h-[550px] bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/banner2.png')",

                            }}
                        ></div>
                    </div>


                    <div>
                        <div
                            className="w-full h-[550px] bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/banner4.png')",

                            }}
                        ></div>
                    </div>

                </Slider>
            </div>
        </div>

    );
};

export default HeroBanner;
