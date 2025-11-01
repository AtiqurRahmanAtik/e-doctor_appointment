export default function SpecialtiesWithIcons() {
  const specialties = [
    {
      name: "General Physician",
      description: "Cold, flu, fever, vomiting, infections, headaches or any other general health issues",
      icon: "🩺"
    },
    {
      name: "Pediatrics",
      description: "Any childrens health related issues including physical, behavioral, and developmental concerns",
      icon: "👶"
    },
    {
      name: "Gynec & Obs",
      description: "Any women's health related issues including pregnancy, menstrual health, and reproductive care",
      icon: "👩"
    },
    {
      name: "Dermatology",
      description: "Treatment of diseases related to skin, hair and nails and some cosmetic conditions",
      icon: "🔬"
    },
    {
      name: "Internal Medicine",
      description: "Prevention, diagnosis, and treatment of adults across the spectrum from health to complex illness",
      icon: "❤️"
    },
    {
      name: "Endocrinology",
      description: "Treatment of diseases related to problems with hormones and the endocrine system",
      icon: "⚖️"
    }
  ];

  const additionalSpecialties = [
    "Cardiology", "Neurology", "Orthopedics", "Psychiatry", 
    "Dentistry", "Ophthalmology", "ENT", "Urology", "Gastroenterology"
  ];

  return (


    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
      


        {/* Specialties Grid with Icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white max-w-[220px] rounded-xl shadow-sm hover:shadow-md transition duration-200 p-6"
            >
              <div className="text-center ">
                <div className="text-2xl space-y-2">{specialty.icon}</div>


                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {specialty.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            </div>    
          ))}
        </div>



      
      </div>
    </section>
  );
}