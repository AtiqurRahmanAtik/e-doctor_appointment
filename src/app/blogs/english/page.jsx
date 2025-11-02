import React from 'react';

const EnglishBlogs = () => {


    return (
        <div>
           

              <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
           
            <div className="lg:w-2/3">
        
                <div className="mb-6">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-blue-600">Home</a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                                <a href="#" className="text-gray-500 hover:text-blue-600">Blog</a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-chevron-right text-gray-400 text-xs mx-2"></i>
                                <span className="text-blue-600 font-medium">Mental Health</span>
                            </li>
                        </ol>
                    </nav>
                </div>

             
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog  Mental Health</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                        <i className="fas fa-user-md text-blue-500 mr-2"></i>
                        <span className="font-medium">DocTime Health Desk</span>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Mental Health</span>
                    </div>
                </div>

            
                <article className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Mental Health Challenges and Disorders in Bangladesh</h2>
                    <div className="flex items-center text-gray-500 mb-6">
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span>April 7, 2025</span>
                    </div>
                    
                    <div className="prose max-w-none text-gray-700 mb-8">
                        <p className="mb-4">
                            Mental illness is a broad term for a group of conditions that may include symptoms that can affect a person's thinking, perceptions, mood, or behaviour. Mental health problems such as depression, anxiety, PTSD (post-traumatic stress disorder), and drug addiction are quite common in Bangladesh.
                        </p>
                        <p className="mb-4">
                            Along with physical well-being, mental well-being is also important. Life becomes miserable if mental health is not good.
                        </p>
                        <p className="mb-4">
                            Mental health is not just about feeling good or bad. Our overall well-being affects our thoughts, feelings, and actions. When mental health weakens, our daily lives become difficult. However, getting proper treatment is somewhat unimaginable due to stigma, lack of awareness, and necessary services.
                        </p>
                    </div>

              
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">This article contains</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Common Mental Health Issues in Bangladesh</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Depression</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Anxiety Disorders</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>PTSD and Trauma</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Somatic Symptom and Related Disorders</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Substance Abuse and Mental Health</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Why Mental Healthcare in Bangladesh is Still Behind</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Superstitions and misconceptions</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Lack of a sufficient number of specialists</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-circle text-blue-500 text-xs mt-2 mr-3"></i>
                                <span>Lack of health care centers</span>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                        <button className="flex items-center text-blue-600 hover:text-blue-800">
                            <i className="far fa-thumbs-up mr-2"></i>
                            <span>Like</span>
                        </button>
                        <button className="flex items-center text-blue-600 hover:text-blue-800">
                            <i className="far fa-comment mr-2"></i>
                            <span>Comment</span>
                        </button>
                        <button className="flex items-center text-blue-600 hover:text-blue-800">
                            <i className="far fa-share-square mr-2"></i>
                            <span>Share</span>
                        </button>
                        <button className="flex items-center text-blue-600 hover:text-blue-800">
                            <i className="far fa-bookmark mr-2"></i>
                            <span>Save</span>
                        </button>
                    </div>
                </article>

             
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-gray-800 mb-2">Understanding Depression</h4>
                            <p className="text-gray-600 text-sm mb-2">Learn about symptoms, causes, and treatments for depression.</p>
                            <div className="flex items-center text-gray-500 text-xs">
                                <i className="far fa-calendar-alt mr-1"></i>
                                <span>March 15, 2025</span>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-gray-800 mb-2">Coping with Anxiety</h4>
                            <p className="text-gray-600 text-sm mb-2">Effective strategies to manage anxiety in daily life.</p>
                            <div className="flex items-center text-gray-500 text-xs">
                                <i className="far fa-calendar-alt mr-1"></i>
                                <span>February 28, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="lg:w-1/3">
           
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="flex justify-between items-center text-blue-600 hover:text-blue-800">
                                <span className="font-medium">Mental Health</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">12</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex justify-between items-center text-gray-600 hover:text-blue-600">
                                <span>General Health</span>
                                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">8</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex justify-between items-center text-gray-600 hover:text-blue-600">
                                <span>Nutrition</span>
                                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">5</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex justify-between items-center text-gray-600 hover:text-blue-600">
                                <span>Fitness</span>
                                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">7</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex justify-between items-center text-gray-600 hover:text-blue-600">
                                <span>Preventive Care</span>
                                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">4</span>
                            </a>
                        </li>
                    </ul>
                </div>

         
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
                    <ul className="space-y-4">
                        <li className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                            <a href="#" className="hover:text-blue-600">
                                <h4 className="font-medium text-gray-800 mb-1">10 Tips for Better Sleep</h4>
                                <div className="flex items-center text-gray-500 text-xs">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    <span>April 2, 2025</span>
                                </div>
                            </a>
                        </li>
                        <li className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                            <a href="#" className="hover:text-blue-600">
                                <h4 className="font-medium text-gray-800 mb-1">Managing Stress in Daily Life</h4>
                                <div className="flex items-center text-gray-500 text-xs">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    <span>March 25, 2025</span>
                                </div>
                            </a>
                        </li>
                        <li className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                            <a href="#" className="hover:text-blue-600">
                                <h4 className="font-medium text-gray-800 mb-1">The Importance of Regular Check-ups</h4>
                                <div className="flex items-center text-gray-500 text-xs">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    <span>March 18, 2025</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

              
                <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Health Newsletter</h3>
                    <p className="text-gray-600 text-sm mb-4">Subscribe to receive the latest health tips and updates.</p>
                    <form className="space-y-3">
                        <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default EnglishBlogs;