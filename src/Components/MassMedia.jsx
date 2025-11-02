import Image from 'next/image';
import React from 'react';

const MassMedia = () => {


    return (
        <div className='bg-[#f7f7f7] py-24'>
            
            <h1 className='text-5xl lg:ml-44 font-bold text-black '>DocTime in Mass Media</h1>



            {/* images */}
            <div className='flex gap-3 custom-scrollbar overflow-x-scroll py-14'>

                <div className=' p-6 bg-white  rounded-xl lg:ml-40'>
                    <Image className='mb-4' src="/Images/prothom-alo-logo.png" alt='imag' width={120} height={200}/>


                    <Image className='rounded-xl max-w-[420px] max-h-[400px]' src='/Images/c1.png' alt='image' width={420} height={400} />

                    <div>
                        <h2 className='my-3'>Sunday, 4 April, 2021</h2>
                        <h1 className='text-xl mb-4 font-semibold text-black'>ঘরে বসেই স্বাস্থ্যসেবা গ্রহণ করুন ডকটাইম টেলিমেডিসিন অ্যাপে</h1>

                        <h2 className='text-[#136afb]'>Read more</h2>
                    </div>
                </div>


                <div className='p-6 bg-white  rounded-xl '>
                     <Image className='mb-4 lg:-mt-7 max-w-32 max-h-20' src="/Images/the-daily-star-logo-png_seeklogo-351053-removebg-preview.png" alt='imag' width={120} height={120}/>

                      <Image className='rounded-xl max-w-[420px] max-h-[400px]' src='/Images/ne.jpg' alt='image' width={420} height={400} />


                         <div>
                        <h2 className='my-3'>Monday, 31 May, 2021</h2>
                        <h1 className='text-xl mb-4 font-semibold text-black'>Healthcare at home with DocTime</h1>

                        <h2 className='text-[#136afb]'>Read more</h2>
                    </div>
                </div>


                <div className='p-6 bg-white  rounded-xl '>
                     <Image className='mb-4 lg:-mt-6.5 max-w-32 max-h-20' src="/Images/kaler-kantho-bangladeshi-newspaper-logo-png_seeklogo-362148.png" alt='imag' width={120} height={120}/>

                        <Image className='rounded-xl max-w-[420px] max-h-[400px]' src='/Images/ne2.png' alt='image' width={420} height={400} />


                            <div>
                        <h2 className='my-3'>Tuesday, 31 December, 2021</h2>
                        <h1 className='text-xl mb-4 font-semibold text-black'>“ডকটাইম মিট সুপার হিরোস্” বিজয় দিবসে অটিস্টিক শিশুদের নিয়ে অনুষ্ঠান</h1>

                        <h2 className='text-[#136afb]'>Read more</h2>
                    </div>
                </div>
            

                <div className='p-6 bg-white  rounded-xl '>

                           <Image className='mb-4 lg:-mt-6.5 max-w-32 max-h-20' src="/Images/kaler-kantho-bangladeshi-newspaper-logo-png_seeklogo-362148.png" alt='imag' width={120} height={120}/>

                        <Image className='rounded-xl max-w-[420px] max-h-[400px]' src='/Images/ne3.png' alt='image' width={420} height={400} />


                        
                            <div>
                        <h2 className='my-3'>Wednesday, 23 February, 2022</h2>
                        <h1 className='text-xl mb-4 font-semibold text-black'>“ডকটাইম মিট সুপার হিরোস্” বিজয় দিবসে অটিস্টিক শিশুদের নিয়ে অনুষ্ঠান</h1>

                        <h2 className='text-[#136afb]'>Read more</h2>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MassMedia;