// Import React
"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";


const Banner = () => {


    return (

         <div className="mx-auto mt-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        
        pagination={
          true
        }
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide className="">
          <div>
            <Image
              src="/Images/ban1.png"
              alt="Banner 1"
              width={1020}
              height={320}
              className="mx-auto rounded-xl  object-cover"
              priority
            />
          </div>
        </SwiperSlide>


        <SwiperSlide className="">
           <div>
            <Image
              src="/Images/ban2.png"
              alt="Banner 2"
              width={1020}
              height={320}
              className="mx-auto rounded-xl object-cover"
              priority
            />
          </div>
        </SwiperSlide>


      

      
      </Swiper>
    </div>
    );
};

export default Banner;