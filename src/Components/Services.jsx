import Image from "next/image";

const services = [
  {
    img: "/Images/docman-removebg-preview.png",
    title: "Live Video Consultation",
    text: "Get instant video consultation or schedule your appointment",
  },
  {
    img: "/Images/56-removebg-preview.png",
    title: "Order Medicine",
    text: "Order easily and get the medicine in 1 hour",
  },
  {
    img: "/Images/2149107253.jpg",
    title: "Diagnostic Tests",
    text: "Get instant video consultation or schedule your appointment",
  },
  {
    img: "/Images/1.png",
    title: "Healthcare Packages",
    text: "Consultations, hospital care, insurance & more",
  },
  {
    img: "/Images/84802-removebg-preview.png",
    title: "Healthcare IT Services",
    text: "Our expert engineer can help build your health-tech solutions",
  },
  {
    img: "/Images/2148630391-removebg-preview.png",
    title: "CareGlobal",
    text: "Quality & hassle free healthcare abroad.",
  },
];


const Services = () => {
    

    return (
       <div className=" py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 px-4 lg:px-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl flex flex-col items-center text-center transition duration-300"
          >
            <div className="w-34 h-34 relative mb-4">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.text}</p>
          </div>
        ))}
      </div>
    </div>


    );
};

export default Services;