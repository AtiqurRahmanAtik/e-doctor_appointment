import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const WhyDocTime = () => {


  const features = [
    {
      id: 1,
      text: "Access any GP or specialist doctor you need at anytime from anywhere.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      text: "Access to online prescriptions, medicine delivery, and diagnostic tests.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      text: "Easy subscription packages to protect you and your loved one’s health and wellbeing.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="bg-white py-16">

        <div>
            <Image className="lg:ml-40" src='/Images/c2.png' alt="doc" width={720} height={600}/>
        </div>


      <div className="max-w-5xl mx-auto px-4">
        
        {/* Subtitle */}
        <p className="text-blue-600 font-normal text-xl mb-2">
          Why DocTime?
        </p>

        {/* Title */}
        <h2 className="text-5xl font-extrabold text-gray-900 leading-snug mb-10">
          Bangladesh’s leading healthcare app for <br className="hidden md:block" />
          online doctor consultation
        </h2>

        {/* Features */}
        <ul className="space-y-6 text-lg text-gray-700">
          {features.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}>
                <CheckCircleIcon className="w-6 h-6" />
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>


    </section>
  );
};

export default WhyDocTime;
