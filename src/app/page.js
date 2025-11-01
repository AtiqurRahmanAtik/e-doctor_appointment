import AccessConvience from "@/Components/AccessConvience";
import Banner from "@/Components/Banner";
import BuyMedicin from "@/Components/BuyMedicin";
import Comments from "@/Components/Comments";
import Downloads from "@/Components/Downloads";
import { IoSearchOutline } from "react-icons/io5";
import Empower from "@/Components/Empower";
import HappyFamily from "@/Components/HappyFamily";
import HospitalPartner from "@/Components/HospitalPartner";
import LatestBlog from "@/Components/LatestBlog";
import MassMedia from "@/Components/MassMedia";
import Services from "@/Components/Services";
import SimpleCollect from "@/Components/SimpleCollect";
import Specialties from "@/Components/Specialties";
import Statistics from "@/Components/Statistics";
import WhyDocTime from "@/Components/WhyDocTime";
import Image from "next/image";
import Questions from "@/Components/Questions";
import Contacts from "@/Components/Contacts";

export default function Home() {
  return (


    <div className="">

        <div className="lg:ml-40">
          <form className="lg:relative">
            <input className="mx-auto border border-gray-300 rounded-xl lg:min-w-[1020px] py-4 px-5 focus:border-none focus:outline-blue-500 focus:outline-2 focus:outline-offset-2 placeholder:text-xl" type="text" placeholder="Search by doctor name/code or department" />

         <IoSearchOutline className="text-3xl lg:absolute lg:top-3 lg:right-48"></IoSearchOutline>

          </form>
        </div>

        
        {/* Banner */}
        <Banner/>

        

        <Services />

        <Statistics/>





              <WhyDocTime/>


              <AccessConvience />


              {/* <Specialties /> */}

              <BuyMedicin/>

              <SimpleCollect/>

              <HappyFamily/>

              <Empower/>

            <HospitalPartner/>

            <MassMedia/>

            <Comments/>

           <Downloads/>


           <LatestBlog/>


           <Questions />


           <Contacts/>

    

    </div>
  );
}
