import Image from 'next/image';
import React from 'react';

const HomeDiagnostic = () => {

    return (
        <div>
              


            <div class="container mx-auto px-4 py-12">
   
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">How it Works</h1>
            <h2 class="text-2xl font-semibold text-blue-600 mb-6">Easy Steps To Feel Better Rapidly</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                You do not have to wait in line for hours or go to the hospital to take healthcare services. 
                Easily consult a doctor in just 10 minutes on your device at home or office.
            </p>
        </div>

       
        <div class="flex flex-col lg:flex-row justify-between items-center mb-16">
          
            <div class="flex flex-col items-center text-center mb-10 lg:mb-0 lg:w-1/3 px-4">
                <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-user-md text-blue-600 text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Find Doctor</h3>
                <p class="text-gray-600">
                    Search your doctor by specialty or doctor profile, rating & experience name, or depending on your symptoms.
                </p>
            </div>

         
            <div class="hidden lg:flex items-center justify-center mb-10 lg:mb-0">
                <i class="fas fa-arrow-right text-blue-500 text-2xl"></i>
            </div>

          
            <div class="flex flex-col items-center text-center mb-10 lg:mb-0 lg:w-1/3 px-4">
                <div class="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-video text-green-600 text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Take Consultation</h3>
                <p class="text-gray-600">
                    Once you pay the required doctor fee or if you have a subscription, you will be joining the short queue.
                </p>
            </div>

          
            <div class="hidden lg:flex items-center justify-center mb-10 lg:mb-0">
                <i class="fas fa-arrow-right text-blue-500 text-2xl"></i>
            </div>

          
            <div class="flex flex-col items-center text-center mb-10 lg:mb-0 lg:w-1/3 px-4">
                <div class="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-file-prescription text-purple-600 text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Get Instant Prescription</h3>
                <p class="text-gray-600">
                    Doctor will start a secured video call to do the consultation and provide you with a prescription.
                </p>
            </div>
        </div>

     
        <div class="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  
                  <Image src='/Images/r2.png' alt='im' width={420} height={420}/>
                </div>
                <div class="md:w-1/2">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Quick & Easy Process</h3>
                    <p class="text-gray-600 mb-4">
                        Search your doctor by specialty or doctor profile, rating & experience name, or depending on your symptoms. 
                    </p>
                    <p class="text-gray-600 mb-6">
                        Once you pay the required doctor fee or if you have a subscription, you will be joining the short queue. 
                        Doctor will start a secured video call to do the consultation.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">No Waiting Lines</span>
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">10-Minute Consultation</span>
                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Secure Video Call</span>
                    </div>
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center">
                        <i class="fas fa-play-circle mr-2"></i>
                        Watch How It Works
                    </button>
                </div>
            </div>
        </div>
    </div>



   

  
</div>

    );
};

export default HomeDiagnostic;