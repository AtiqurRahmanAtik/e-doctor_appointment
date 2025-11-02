import Image from 'next/image';
import React from 'react';

const Empower = () => {


    return (

        
          <div className='  py-10  my-8'>
                           <div className='lg:ml-44'>
                               <Image src="/Images/c3.png" alt='medicin' width={620} height={600}/>
                           </div>
                           
               
               
               
                           <div className='lg:ml-44'>
                               <h1 className='text-2xl text-[#136afb] mt-14'>Become a Corporate Partner</h1>
                               <h1 className='text-5xl leading-14 my-5 font-bold text-black'>Empower your workforce with <br />
seamless Healthcare <br />
Solutions</h1>
               
                               <h1 className='text-2xl text-gray-600 max-w-[1020px]'>Ensure the well-being of your employees with our comprehensive healthcare platform, offering convenient healthcare packages which includes online consultations, health records, OPD/IPD benefits and personalized care management.</h1>
               
                               
                               
                            <button className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-medium hover:bg-blue-700 transition duration-200'>Read More</button>
                          
                           </div>
                       </div>
    );
};

export default Empower;