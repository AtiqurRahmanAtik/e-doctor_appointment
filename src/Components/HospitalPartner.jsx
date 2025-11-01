import Image from 'next/image';
import React from 'react';

const HospitalPartner = () => {


    return (
        <div>
            <h1 className='text-5xl font-bold text-black text-center'>Our Hospital Partners</h1>
            

            <div className='my-14 lg:ml-44 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='max-w-30  border-r-2 border-gray-200 max-h-34 object-fill'>
                    <Image className='max-w-26  max-h-28 object-fill' src="/Images/bsl-removebg-preview.png" alt="Hospital Partner" width={320} height={200} />

                  
                </div>

                 <div className='max-w-30 border-r-2 border-gray-200 max-h-34 object-fill'>
                    <Image className='max-w-26 max-h-24 object-fill' src="/Images/p.png" alt="Hospital Partner" width={320} height={200} />
                </div>

                 <div className='max-w-30  border-r-2 border-gray-200 max-h-34 object-fill'>
                    <Image className='max-w-26 max-h-24 object-fill' src="/Images/ch.png" alt="Hospital Partner" width={320} height={200} />
                </div>

                 <div className='max-w-30   max-h-34 object-fill'>
                    <Image className='max-w-26 max-h-24 object-fill' src="/Images/i.jpeg" alt="Hospital Partner" width={320} height={200} />
                </div>
            </div>
        </div>
    );
};

export default HospitalPartner;