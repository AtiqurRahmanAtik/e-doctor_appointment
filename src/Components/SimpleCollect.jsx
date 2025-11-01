import Image from 'next/image';
import React from 'react';

const SimpleCollect = () => {
    return (
        <div className='container mx-auto my-8'>
            <div className='lg:ml-44'>
                <Image src="/Images/9.png" alt='medicin' width={620} height={600}/>
            </div>
            



            <div className='lg:ml-44'>
                <h1 className='text-2xl text-[#136afb] mt-14'>Home Diagnostic Service</h1>
                <h1 className='text-5xl my-5 font-bold text-black'>Sample collection at your Doorstep</h1>

                <h1 className='text-2xl text-gray-600 '>Making healthcare easily accessible anytime, anywhere.</h1>

                
                
                <div className='mt-8'>
                  
                    <div className='mb-7 text-lg'>
                        <h1>Faster and convenient tests booking</h1>
                    </div>
                    <div>
                        <h1 className='mb-7 text-lg'>Certified professionals will collect sample from home/office</h1>
                    </div>

                    <div>
                        <h1 className='mb-7 text-lg'>Get report at DocTime app within 24 hours</h1>
                    </div>
 


                    <button className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-medium hover:bg-blue-700 transition duration-200'>Book Test</button>
                </div>
            </div>
        </div>
    );
};

export default SimpleCollect;