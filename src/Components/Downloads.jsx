import Image from 'next/image';
import React from 'react';

const Downloads = () => {


    return (

          <div className=' py-6  my-4 border-b-2 border-gray-200'>
                          <div className='lg:ml-44'>
                              <Image src="/Images/Qr.png" alt='Qr code' width={420} height={600}/>
                          </div>
                          
              
              
                          <div className='lg:ml-44'>
                             
                              <h1 className='text-5xl my-5 leading-14 font-bold text-black'>Download and register our App for free <br />
& get the privilege healthcare services</h1>
              
                              <h1 className='text-2xl text-gray-600 max-w-[1020px]'>To download the app on your mobile, go to the Play Store or scan the QR code</h1>
              
                              
                              
                           <button className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-medium hover:bg-blue-700 transition duration-200'>View All Packages</button>



{/* images */}
                                 <div className='flex gap-1 '>
                            <Image src="/Images/apple-removebg-preview.png" alt='Qr code' width={280} height={220}/>


                            <Image className='min-w-60 min-h-8' src="/Images/google-removebg-preview.png" alt='Qr code' width={280} height={220}/>
                          </div>
                         
                          </div>


                    
                      </div>
    );
};

export default Downloads;