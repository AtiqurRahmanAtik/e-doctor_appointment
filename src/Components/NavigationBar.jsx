"use client";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import React from 'react';
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {


    const PagesLinks = <>
       <Link href="/consultation" className='text-xl  hover:text-[#136afb]'>Consultation</Link>

    
      <Link href='/homeDiagnostic' className='text-xl hover:text-[#136afb]'>Home Diagnostic</Link>

      <Link href='/healthPlan' className='text-xl hover:text-[#136afb]'>Health Plan</Link>


      <li >
        <details>
        <summary href='/blogs/english' className='text-xl lg:-mt-2 hover:text-[#136afb]'>Blogs</summary> 

          <ul className="p-2 flex gap-2 flex-col z-20">
           <Link href='/blogs/english' className='text-xl hover:text-[#136afb]'>English</Link>

            <Link href='/blogs/bangla' className='text-xl hover:text-[#136afb]'>বাংলা</Link>

          </ul>
        </details>
      </li>
     
     
      <li>
        <details>
          <summary className='text-xl lg:-mt-2 hover:text-[#136afb]'>More   </summary>
          <ul className="p-2 z-30 lg:min-w-48">
            <li className='text-xl hover:text-[#136afb]'><a>For Doctor</a></li>
            <li className='text-xl hover:text-[#136afb]'><a>Care Global</a></li>
            <li className='text-xl hover:text-[#136afb]'><a>Employers & NGO's</a></li>
            <li className='text-xl hover:text-[#136afb]'><a>Contact Us</a></li>
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

    <Link href="/"> <Image  src='/Images/doctime-logo.png' alt="icon" width={120} height={80}/></Link>
  </div>


  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-6 ">
     
          {PagesLinks}

    </ul>
  </div>

  <div className="navbar-end  mr-4">
    <Link href='/login' className="btn py-4   bg-[#136afb] text-xl  text-white">Log in <IoIosArrowForward className="text-2xl"></IoIosArrowForward></Link>
  </div>

</nav>
  );
};

export default NavigationBar;