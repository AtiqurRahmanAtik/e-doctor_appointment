import Image from 'next/image';
import React from 'react';

const LatestBlog = () => {


    return (
         <div className='  py-10 '>
                                 
                                  
                      
         <div className='lg:ml-44'>
                 <h1 className='text-2xl text-[#136afb] mt-1'>Recent Blogs</h1>
                   <h1 className='text-5xl leading-14 my-5 font-bold text-black'>Read our latest blogs from <br />
Health Experts</h1>
                      
                                  
               </div>


          <div className='flex gap-3 custom-scrollbar overflow-x-scroll py-14'>
                            
               <div className=' lg:max-w-96 border border-gray-200 p-5 bg-white  rounded-xl hover:border-blue-400 lg:ml-40'>
                                              
                            
                            
                <Image className='rounded-xl max-w-[340px] max-h-[380px] hover:scale-110 hover:transition delay-150 duration-300 ease-in-out' src='/Images/c8.png' alt='image' width={420} height={400} />

                            
                   <div>
                            <h1 className='text-2xl my-4 font-semibold text-black'>10 Best Female Skin Specialists (Dermatologist) in Dhaka</h1>



                          <div className='flex justify-between my-2'>
                          <div className='flex gap-1'>
                            <Image className='rounded-full' src='/Images/e9.png' alt='icon' width={26} height={26}/>
                              <h2 className='text-black text-lg'>DocTime</h2>
                          </div>

                          <div>
                            <h2>6 months ago</h2>
                          </div>

                          </div>


                               <p>Are you searching for the best female skin specialist in Dhaka? Visiting a qualified dermatologist is essential for ... </p>
                            
                            
                        </div>


                         </div>


                            
               <div className=' lg:max-w-96 border border-gray-200 p-5 bg-white  rounded-xl hover:border-blue-400 '>
                                              
                            
                            
                <Image className='rounded-xl max-w-[340px] max-h-[380px] hover:scale-110 hover:transition delay-150 duration-300 ease-in-out' src='/Images/d1.png' alt='image' width={420} height={400} />

                            
                   <div>
                            <h1 className='text-2xl my-4 font-semibold text-black'>Common Mental Health Challenges and Disorders in...</h1>



                          <div className='flex justify-between my-2'>
                          <div className='flex gap-1'>
                            <Image className='rounded-full' src='/Images/e9.png' alt='icon' width={26} height={26}/>
                              <h2 className='text-black text-lg'>DocTime</h2>
                          </div>

                          <div>
                            <h2>6 months ago</h2>
                          </div>

                          </div>


                               <p>Explore the mental health challenges in Bangladesh, where common mental ... </p>
                            
                            
                        </div>


                         </div>



                            
          <div className=' lg:max-w-96 border border-gray-200 p-5 bg-white  rounded-xl hover:border-blue-400 '>
                                              
                            
                            
                <Image className='rounded-xl max-w-[340px] min-h-48 hover:scale-110 hover:transition delay-150 duration-300 ease-in-out' src='/Images/d2.png' alt='image' width={420} height={400} />

                            
                   <div>
                            <h1 className='text-2xl mt-4 font-semibold text-black'>Symptoms of Liver Disease</h1>



                          <div className='flex justify-between mt-12'>
                          <div className='flex gap-1'>
                            <Image className='rounded-full' src='/Images/e9.png' alt='icon' width={26} height={26}/>
                              <h2 className='text-black text-lg'>DocTime</h2>
                          </div>

                          <div>
                            <h2>6 months ago</h2>
                          </div>

                          </div>


                               <p>Choosing the most suitable Pediatric doctor for your child's health and well ... </p>
                            
                            
                        </div>


                         </div>

                                        
                            
             <div className=' lg:max-w-96 border border-gray-200 p-5 bg-white  rounded-xl hover:border-blue-400 '>
                                              
                            
                            
                <Image className='rounded-xl max-w-[340px] min-h-48 hover:scale-110 hover:transition delay-150 duration-300 ease-in-out' src='/Images/d3.png' alt='image' width={420} height={400} />

                            
                   <div>
                            <h1 className='text-2xl my-6 font-semibold text-black'>10 Best Female Skin Specialists (Dermatologist) in Doctor</h1>



                          <div className='flex justify-between my-2'>
                          <div className='flex gap-1'>
                            <Image className='rounded-full' src='/Images/e9.png' alt='icon' width={26} height={26}/>
                              <h2 className='text-black text-lg'>DocTime</h2>
                          </div>

                          <div>
                            <h2>6 months ago</h2>
                          </div>

                          </div>


                               <p>Choosing the most suitable Pediatric doctor for your child's health and well ... </p>
                            
                            
                        </div>


                         </div>


                       </div>
        


                      </div>
    );
};

export default LatestBlog;