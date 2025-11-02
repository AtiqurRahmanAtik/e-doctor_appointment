import React from 'react';

const HealthPlan = () => {

    
    return (
        <div>
           


              <div className="container mx-auto px-4 py-12">
      
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">DocTime Health Care and Protect Plans</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the plan that best fits your healthcare needs. All plans include free consultations and discounts on specialist visits.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
         
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">Jotno</h2>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">POPULAR</span>
                    </div>
                    <div className="mb-6">
                        <span className="text-3xl font-bold text-gray-800">৳ 99</span>
                        <span className="text-gray-600">/monthly</span>
                    </div>
                    <div className="mb-6">
                        <span className="text-gray-700 font-medium">1 Person</span>
                    </div>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-start">
                            <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-600">Free 4 consultations with our experienced on duty General Physician doctors</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-600">10% discount* on any Specialist Doctor consultation</span>
                        </li>
                    </ul>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                        Subscribe now
                    </button>
                </div>
            </div>

          
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-500 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">RECOMMENDED</span>
                </div>
                <div className="p-6 pt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Astha</h2>
                    <div className="mb-6">
                        <span className="text-3xl font-bold text-gray-800">৳ 175</span>
                        <span className="text-gray-600">/monthly</span>
                    </div>
                    <div className="mb-6">
                        <span className="text-gray-700 font-medium">1 Person</span>
                    </div>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-start">
                            <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-600">Free 8 consultations with our experienced on duty General Physician doctors</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-600">10% discount* on any Specialist Doctor consultation</span>
                        </li>
                    </ul>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                        Subscribe now
                    </button>
                </div>
            </div>

          
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Aponjon</h2>
                    <div className="mb-6">
                        <span className="text-3xl font-bold text-gray-800">৳ 249</span>
                        <span className="text-gray-600">/monthly</span>
                    </div>
                    <div className="mb-6">
                        <span className="text-gray-700 font-medium">For 4 persons</span>
                    </div>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-start">
                            <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-600">Free 8 consultations with our experienced on duty General Physician doctors</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span className="text-gray-600">10% discount* on any Specialist Doctor consultation</span>
                        </li>
                    </ul>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                        Subscribe now
                    </button>
                </div>
            </div>
        </div>

    
        <div className="max-w-3xl mx-auto mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Plan Benefits & Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-gray-700 mb-2">All Plans Include:</h4>
                    <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start">
                            <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                            <span>24/7 access to our platform</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                            <span>Secure video consultations</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                            <span>Digital prescription delivery</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Terms & Conditions:</h4>
                    <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start">
                            <i className="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                            <span>*Discount applies to standard consultation fees</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                            <span>Free consultations are for General Physicians only</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                            <span>Monthly subscription, cancel anytime</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default HealthPlan;