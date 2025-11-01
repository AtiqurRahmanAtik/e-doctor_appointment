import Image from 'next/image';
import React from 'react';

const Footers = () => {


    return (
     
    <footer class="bg-[#1469fc] text-white">
     
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
           
                <div class="lg:col-span-2">
                    <div class="flex items-center mb-4">
                       <Image className='text-white bg-white' src='/Images/doctime-logo.png' alt='img' width={160} height={160} />
                    </div>
                    <p class="text-blue-200 font-medium mb-2">SURVIVABLE AND MORE SUPPLIES</p>
                    <p class="text-blue-100 mb-6">DocTime is the number 1 healthcare service provider in Bangladesh, based on one million downloads and ratings on the Play Store.</p>
                    
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <i class="fas fa-phone text-blue-300 mr-3"></i>
                            <span class="text-blue-100">06977895999</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-envelope text-blue-300 mr-3"></i>
                            <span class="text-blue-100">support@doctime.com.bd</span>
                        </div>
                    </div>
                </div>
                
            
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">Services</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Video Consultation</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Health Plans</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Data & Research</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Home Diagnostics</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">For Doctors</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">Company</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">About us</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Our Doctors</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Hospital Partners</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">CereGlobal</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Employers & NGOs</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Blogs</a></li>
                    </ul>
                </div>
                
             
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">Support</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Terms of Services</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Privacy Policy</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">FAQs</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Our Mission and Vision</a></li>
                        <li><a href="#" class="text-blue-200 hover:text-white transition duration-200">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
      
        <div class="bg-[#1469fc] py-8">
            <div class="container mx-auto px-4">
                <h3 class="text-lg font-semibold mb-4 text-center text-white">Download Our App</h3>
                <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                    <button class="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-800 transition duration-300 w-full md:w-auto justify-center">
                        <i class="fab fa-google-play text-2xl mr-3"></i>
                        <div class="text-left">
                            <div class="text-xs">Download on the</div>
                            <div class="font-semibold">Google Play</div>
                        </div>
                    </button>
                    
                    <button class="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-800 transition duration-300 w-full md:w-auto justify-center">
                        <i class="fab fa-apple text-2xl mr-3"></i>
                        <div class="text-left">
                            <div class="text-xs">Download on the</div>
                            <div class="font-semibold">App Store</div>
                        </div>
                    </button>
                    
                    <button class="bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-600 transition duration-300 w-full md:w-auto justify-center">
                        <i class="fas fa-globe text-2xl mr-3"></i>
                        <div class="text-left">
                            <div class="text-xs">Available on the</div>
                            <div class="font-semibold">Browser</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        
      
        <div class="bg-[#ffffff] py-4">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 mx-auto text-sm mb-2 md:mb-0"> Copyright © 2025 DocTime. All rights reserved.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-300 hover:text-white transition duration-200">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-blue-300 hover:text-white transition duration-200">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-blue-300 hover:text-white transition duration-200">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-blue-300 hover:text-white transition duration-200">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footers;