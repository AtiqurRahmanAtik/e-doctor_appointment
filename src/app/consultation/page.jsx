import Banner from '@/Components/Banner';
import React from 'react';

const consultation = () => {


    return (
        <div>

            <Banner/>

            <h1 className='text-2xl font-bold text-center text-black'>Consultation Component</h1>



            {/* <div className="flex my-8 mx-auto max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="w-1/3 bg-cover"></div>

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>

        <div className="flex mt-2 item-center">
            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
        </div>

        <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
        </div>
    </div>
</div>
             */}



            <div class="bg-gray-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
            <div class="bg-white rounded-xl hover:border hover:border-blue-300 shadow-md overflow-hidden border border-gray-200">
                <div class="p-6">
                    <h2 class="text-xl font-bold text-gray-800 mb-1">Dr. Rajib Dutta</h2>
                    <p class="text-gray-600 text-sm mb-3">MBBS, BCS (Health), MD (Gastroenterology)</p>
                    <span class="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Gastroenterologist
                    </span>
                    
                    <div class="border-t border-gray-200 my-4"></div>
                    
                    <p class="text-gray-700 font-medium mb-6">
                        <i class="fas fa-briefcase-medical text-blue-500 mr-2"></i>
                        13+ Years Experience
                    </p>
                    
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-2xl font-bold text-gray-800">$630</span>
                        </div>
                        <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
                            See Doctor
                        </button>
                    </div>
                </div>
            </div>
            
          
            <div class="bg-white hover:border hover:border-blue-400 rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div class="p-6">
                    <h2 class="text-xl font-bold text-gray-800 mb-1">Dr. MD. ASADUZZAMAN RAJIB</h2>
                    <p class="text-gray-600 text-sm mb-3">MBBS, BCS (Health), MS (Urology)</p>
                    <span class="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Urologist
                    </span>
                    
                    <div class="border-t border-gray-200 my-4"></div>
                    
                    <p class="text-gray-700 font-medium mb-6">
                        <i class="fas fa-briefcase-medical text-purple-500 mr-2"></i>
                        15+ Years Experience
                    </p>
                    
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-2xl font-bold text-gray-800">$500</span>
                        </div>
                        <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
                            See Doctor
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
      

      
    </div>

               </div>

        </div>
    );
};

export default consultation;