"use client";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import React from 'react';
import Image from "next/image";

const NavigationBar = () => {


    const PagesLinks = <>
       <li className='text-xl'><a>Consultation</a></li>
      <li className='text-xl'><a>Order Medicine</a></li>
      <li className='text-xl'><a>Home Diagnostic</a></li>
      <li className='text-xl'><a>Health Plan</a></li>

      <li >
        <details>
          <summary className='text-xl'>Blogs</summary>
          <ul className="p-2">
            <li className='text-xl'><a>English</a></li>
            <li className='text-xl'><a>বাংলা</a></li>
          </ul>
        </details>
      </li>
     
     
      <li>
        <details>
          <summary className='text-xl'>More   </summary>
          <ul className="p-2">
            <li className='text-xl'><a>For Doctor</a></li>
            <li className='text-xl'><a>Care Global</a></li>
            <li className='text-xl'><a>Employers & NGO's</a></li>
            <li className='text-xl'><a>Contact Us</a></li>
          </ul>
        </details>
      </li>

    </>;



  return (


    <nav className="navbar   flex justify-around ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
   

        {PagesLinks}  

      </ul>
    </div>
    {/* <a className=" bg-ghost text-2xl font-bold"><span className='space-x-0 text-[#136afb]'>Doc</span>Time</a> */}

    <Image src='/Images/doctime-logo.png' alt="icon" width={120} height={80}/>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  border border-r-2 border-gray-200">
     
          {PagesLinks}

    </ul>
  </div>

  <div className="navbar-end mr-4">
    <a className="btn py-1  bg-[#136afb] text-2xl text-white">Log in <IoIosArrowForward className="text-2xl"></IoIosArrowForward></a>
  </div>
</nav>
  );
};

export default NavigationBar;