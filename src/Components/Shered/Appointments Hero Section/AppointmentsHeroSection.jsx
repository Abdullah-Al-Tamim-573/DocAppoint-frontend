
 // তোমার Lottie JSON file

import AllAppointmentsSearchandFilter from "../All Appointments Search and Filter Section/AllAppointmentsSearchandFilter";
import SearchDoctorAnimation from "../Animation/SearchDoctorAnimation";

export default function AppointmentsHeroSection() {
  return (
    <div className="w-full max-w-[85%] mx-auto  from-[#f8fbff] to-white ">
      
      {/* main appointment banner and image container */}
      <div className="">
        
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-10">

          {/* left side (Find Your Specialist Doctor content) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-7 lg:mt-0">
            
            <span className="inline-block font-bold  px-4 py-1 text-sm bg-teal-50 text-teal-600 rounded-full mb-4">
              All Appointments
            </span>
             
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Specialist Doctor
            </h1>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Browse and book appointments with experienced doctors across various specializations.
            </p>

            
          </div>

          {/* right side find doctor img (LOTTIE) */}
          <SearchDoctorAnimation></SearchDoctorAnimation>

        </div>
      </div>

      {/* SEARCH + FILTER SECTION */}
            <AllAppointmentsSearchandFilter></AllAppointmentsSearchandFilter>
    </div>
  );
}