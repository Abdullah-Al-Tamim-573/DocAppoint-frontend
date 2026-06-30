import { ArrowRight } from "lucide-react";
import { fetchDoctorsData } from "@/Fetch Api/fetchApi";
import TopSpecialistsCard from "../TopSpecialistsCard/TopSpecialistsCard";
import { FaArrowRightLong } from "react-icons/fa6";
import WhiteBtn from "../Buttons/White Btns/WhiteBtn";
import Link from "next/link";

let TopSpecialists = async () => {
  let doctorsData = await fetchDoctorsData();
  let filterHighRatedDoctors = doctorsData.filter(
    (highRatedDoctors) => 4.8 < highRatedDoctors.rating,
  );

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2 text-center md:text-left">
            TOP RATED DOCTORS
          </p>

          <h2 className="font-extrabold text-center md:text-left text-slate-900 text-2xl lg:text-3xl">
            Meet Our Top Specialists
          </h2>
        </div>

        {/* <button className="hidden sm:flex items-center gap-2 border border-teal-500 text-teal-600 px-5 py-2 rounded-full hover:bg-teal-50 transition-all duration-300 font-medium">
          View All Doctors
          
          <FaArrowRightLong />

        </button> */}
        <Link href={"/allAppointments"}>
          <WhiteBtn
            text={"View All Doctors"}
            className={`hidden sm:flex hover:bg-teal-500 cursor-pointer  items-center gap-1.5 border border-teal-500 text-teal-600 px-5 py-2 rounded-full group hover:text-white transition-all duration-300 font-medium`}
            icon={FaArrowRightLong}
            iconClassName={` transition-transform group-hover:translate-x-1`}
          ></WhiteBtn>
        </Link>
      </div>

      {/* Doctors Card */}
      <div
        className={`${doctorsData.length === 0 ? "my-10 xl:my-20" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}`}
      >
        {doctorsData.length === 0 ? (
          <h3 className="text-2xl xl:text-4xl text-red-600  flex justify-center ">
            Doctors Data Not Found
          </h3>
        ) : (
          filterHighRatedDoctors.map((doctor) => (
            <TopSpecialistsCard
              key={doctor._id}
              doctor={doctor}
            ></TopSpecialistsCard>
          ))
        )}
      </div>

      {/* Mobile Button */}
      <div className="mt-6 sm:hidden">
        <Link href={'/allAppointments'}>
          <button className="w-full flex items-center justify-center gap-2 border border-teal-500 text-teal-600 py-3 rounded-full hover:bg-teal-50 transition-all duration-300">
            View All Doctors
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSpecialists;
