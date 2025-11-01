import React from 'react';

const Contacts = () => {

    
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen  p-4">

            <div>
                  <h1 className='text-5xl mt-8 font-bold text-black text-center'>Get in touch with us</h1>

            <h1 className='text-2xl my-5 font-normal text-black text-center'>We're here to help. Send your query or question below and provide us with as <br /> much detail as possible. We will answer your query as soon as possible. We aim <br /> to reply to your query within 24 hours.</h1>

            </div>

   
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center ">
    <div className="max-w-[880px] w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
         
            
         
            <form className="p-6 space-y-6">
              
            <div className='flex gap-4 '>

                  <div className='flex-1'>
                    <label for="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-user text-gray-400"></i>
                        </div>
                        <input 
                            type="text" 
                            id="name" 
                            class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                </div>
                
             
                <div className='flex-1'>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                        Email <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input 
                            type="email" 
                            id="email" 
                            class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                </div>
            </div>
                
              
                <div>
                    <label for="concern" class="block text-sm font-medium text-gray-700 mb-1">
                        What is your concern?
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-question-circle text-gray-400"></i>
                        </div>
                        <select 
                            id="concern" 
                            class="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none bg-white"
                        >
                            <option value="" disabled selected>Select your concern</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="billing">Billing Issue</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <i class="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                </div>
                
              
                <div>
                    <label for="query" class="block text-sm font-medium text-gray-700 mb-1">
                        Your query <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <div class="absolute top-3 left-3 pointer-events-none">
                            <i class="fas fa-comment text-gray-400"></i>
                        </div>
                        <textarea 
                            id="query" 
                            rows="4" 
                            class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                            placeholder="Please describe your query in detail..."
                            required
                        ></textarea>
                    </div>
                </div>
                
               
                <div>
                    <button 
                        type="submit" 
                        class="w-34 bg-[#136afb] text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 flex items-center justify-center"
                    >
                        <span>Submit</span>
                        <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </div>
            </form>
         
        </div>
        
   
       
    </div>


</div>
   
        </div>
    );
};

export default Contacts;