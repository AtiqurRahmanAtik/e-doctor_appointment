import Image from 'next/image';
import React from 'react';

const BuyMedicin = () => {


    return (

        <div className='bg-white py-14 border-y-1 border-gray-200'>
            <div className='container mx-auto flex gap-14'>
                <div className='lg:ml-36'>
                    <Image src="/Images/7.png" alt='medicin' width={620} height={600}/>
                </div>


                <div className=''>
                    <h1 className='text-5xl font-semibold text-black'>Buy Medicines <br /> online <br />
from home</h1>


                  <p className='text-2xl font-normal mt-10'>Authentic medicines with <br /> discounts & free home delivery <br />
within Dhaka city</p>



                    <p className='text-sm text-gray-400 mt-8'>*Conditions apply</p>



                    <button className='mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-medium hover:bg-blue-700 transition duration-200'>Buy Online</button>
                </div>

              
            </div>
        </div>
    );
};

export default BuyMedicin;