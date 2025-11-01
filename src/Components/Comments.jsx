"use client";

import Image from 'next/image';


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Comments = () => {


    return (
        <div>


             <Swiper pagination={true} 
             modules={[Pagination, Autoplay]} 

               spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
             
             className="mySwiper">

                
        <SwiperSlide>
              <div className='text-center bg-[#1d6ffa] py-26'>
                <Image className='mx-auto min-w-30 min-h-30 rounded-full my-4' src='/Images/m1.jpg' alt='icon' width={110} height={110}/>
                <h1 className='my-4 text-2xl text-white font-semibold'>Md Motafizur Rahman</h1>

                <div>
                    <Image className='mx-auto' src='/Images/5star-removebg-preview.png' alt='4' width={120} height={40}/>
                </div>

                <p className='text-white my-4'>This is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className='text-center bg-[#1d6ffa] py-26'>
                <Image className='mx-auto min-w-30 min-h-30 rounded-full my-4' src='/Images/m1.jpg' alt='icon' width={110} height={110}/>
                <h1 className='my-4 text-2xl text-white font-semibold'>Md Motafizur Rahman</h1>

                   <div>
                    <Image className='mx-auto' src='/Images/5star-removebg-preview.png' alt='4' width={120} height={40}/>
                </div>

                <p className='text-white my-4'>This is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className='text-center bg-[#1d6ffa] py-26'>
                <Image className='mx-auto min-w-30 min-h-30 rounded-full my-4' src='/Images/m3.jpg' alt='icon' width={110} height={110}/>
                <h1 className='my-4 text-2xl text-white font-semibold'>Md Motafizur Rahman</h1>

                   <div>
                    <Image className='mx-auto' src='/Images/5star-removebg-preview.png' alt='4' width={120} height={40}/>
                </div>

                <p className='text-white my-4'>This is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor
is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className='text-center bg-[#1d6ffa] py-26'>
                <Image className='mx-auto min-w-30 min-h-30 rounded-full my-4' src='/Images/m4.jpg' alt='icon' width={110} height={110}/>
                <h1 className='my-4 text-2xl text-white font-semibold'>Md Motafizur Rahman</h1>

                   <div>
                    <Image className='mx-auto' src='/Images/5star-removebg-preview.png' alt='4' width={120} height={40}/>
                </div>

                <p className='text-white my-4'>This is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor
is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className='text-center bg-[#1d6ffa] py-26'>
                <Image className='mx-auto min-w-30 min-h-30 rounded-full my-4' src='/Images/m5.jpg' alt='icon' width={110} height={110}/>
                <h1 className='my-4 text-2xl text-white font-semibold'>Md Motafizur Rahman</h1>


                   <div>
                    <Image className='mx-auto' src='/Images/5star-removebg-preview.png' alt='4' width={120} height={40}/>
                </div>

                <p className='text-white my-4'>This is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor
is very helpful app. I can consult  with a doctor  from my <br /> home.The service is very fast and reliable. I am very satisfied with the service. Thank you E-Doctor
                </p>
            </div>
        </SwiperSlide>
       
      </Swiper>


          
        </div>
    );
};

export default Comments;