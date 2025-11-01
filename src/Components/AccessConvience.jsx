import Image from 'next/image';
import React from 'react';

const AccessConvience = () => {


    return (
        <div>
            <div className='lg:ml-44'>
                <Image className='object-fill' src='/Images/do5.png' alt='doc' width={520} height={600}/>
            </div>



            <div>
                <h1 className='lg:text-5xl font-semibold  text-black lg:ml-44 mt-8'>Access convenient online Healthcare with <br className='space-y-2' /> DocTime</h1>

                <p className='text-2xl text-justify font-normal lg:ml-44 mt-8 lg:max-w-[900px]'>DocTime offers you the convenience of accessing care from anywhere, saving time, and ensuring you to get the attention you need without the hassle of traveling to a clinic. Whether it's for routine check-ups, follow-ups, or managing ongoing health conditions, online consultations provide a flexible and efficient solution. Embrace the future of healthcare by exploring our online consultation options today.</p>
            </div>

            
        </div>
    );
};

export default AccessConvience;