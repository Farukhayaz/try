import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Airpro from "../assets/Airpro.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import { AiFillHeart } from "react-icons/ai"
import { IoMdShareAlt } from "react-icons/io"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Style.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Footer from './Footer';

export default function Slider() {
    // Generate an array of image URLs
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    const imageUrl = [
        {
            img: Airpro
        }, {
            img: img1
        }, {
            img: img2
        }, {
            img: img3
        }
    ];



    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]} // Include the Autoplay module
                autoplay={{ delay: 3000 }} // Set the delay between slide transitions (in milliseconds)
                className="mySwiper"
            >
                {imageUrl.map((e, index) => (
                    <SwiperSlide key={index} style={{ backgroundImage: `url(${e.img})`, backgroundSize: "100% 100%" }}>
                        {/* <img src= /> */}
                        <div className='dil h-[100%] w-[100%] '>
                            <div>
                                <div><AiFillHeart className=' h-[30px] w-[30px] ' onClick={handleClick}
                                    style={{ color: active ? "red" : "white" }} />

                                    <IoMdShareAlt className=' h-[30px] w-[30px] ' />
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >

        </>

    );


}
