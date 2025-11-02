import Image from 'next/image';
import React from 'react';

const Footers = () => {


    return (
     
    <footer className="bg-[#1469fc] text-white">
     
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
           
                <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                       <Image className='text-white bg-white' src='/Images/doctime-logo.png' alt='img' width={160} height={160} />
                    </div>
                    <p className="text-blue-200 font-medium mb-2">SURVIVABLE AND MORE SUPPLIES</p>
                    <p className="text-blue-100 mb-6">DocTime is the number 1 healthcare service provider in Bangladesh, based on one million downloads and ratings on the Play Store.</p>
                    
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <i className="fas fa-phone text-blue-300 mr-3"></i>
                            <span className="text-blue-100">06977895999</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-blue-300 mr-3"></i>
                            <span className="text-blue-100">support@doctime.com.bd</span>
                        </div>
                    </div>
                </div>
                
            
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Video Consultation</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Health Plans</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Data & Research</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Home Diagnostics</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">For Doctors</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">About us</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Our Doctors</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Hospital Partners</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">CereGlobal</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Employers & NGOs</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Blogs</a></li>
                    </ul>
                </div>
                
             
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Terms of Services</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Privacy Policy</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">FAQs</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Our Mission and Vision</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-white transition duration-200">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
      
        <div className="bg-[#1469fc] py-8">
            <div className="container mx-auto px-4">
                <h3 className="text-lg font-semibold mb-4 text-center text-white">Download Our App</h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                    <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-800 transition duration-300 w-full md:w-auto justify-center">
                        <i className="fab fa-google-play text-2xl mr-3"></i>
                        <div className="text-left">
                            <div className="text-xs">Download on the</div>
                            <div className="font-semibold">Google Play</div>
                        </div>
                    </button>
                    
                    <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-800 transition duration-300 w-full md:w-auto justify-center">
                        <i className="fab fa-apple text-2xl mr-3"></i>
                        <div className="text-left">
                            <div className="text-xs">Download on the</div>
                            <div className="font-semibold">App Store</div>
                        </div>
                    </button>
                    
                    <button className="bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-600 transition duration-300 w-full md:w-auto justify-center">
                        <i className="fas fa-globe text-2xl mr-3"></i>
                        <div className="text-left">
                            <div className="text-xs">Available on the</div>
                            <div className="font-semibold">Browser</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        
      
        <div className="bg-[#ffffff] py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mx-auto text-sm mb-2 md:mb-0"> Copyright © 2025 DocTime. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-blue-300 hover:text-white transition duration-200">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-blue-300 hover:text-white transition duration-200">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-blue-300 hover:text-white transition duration-200">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footers;