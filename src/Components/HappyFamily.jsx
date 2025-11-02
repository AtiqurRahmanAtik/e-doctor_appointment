import Image from 'next/image';
import React from 'react';

const HappyFamily = () => {


    return (

        
        <div className=' bg-[#eef7ff] py-10  my-8'>
                   <div className='lg:ml-44'>
                       <Image src="/Images/m11.jpg" alt='medicin' width={620} height={600}/>
                   </div>
                   
       
       
       
                   <div className='lg:ml-44'>
                       <h1 className='text-2xl text-[#136afb] mt-14'>Become a Premium Member</h1>
                       <h1 className='text-5xl my-5 leading-14 font-bold text-black'>A secure future for you <br />
and your family</h1>
       
                       <h1 className='text-2xl text-gray-600 max-w-[1020px]'>DocTime is the leading digital healthcare app in the country. DocTime is committed to bringing modern healthcare to people along with 24/7 doctor video consultation. DocTime healthcare package is there for healthcare assurance and your secure healthy future. Choose your favorite packages based on your needs. Anyone can enjoy this service by paying a one-time annual subscription fee.</h1>
       
                       
                       
                    <button className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-medium hover:bg-blue-700 transition duration-200'>View All Packages</button>
                  
                   </div>
               </div>
    );
};

export default HappyFamily;