// "use client";

import Image from "next/image";
import {
  Star,
  MapPin,
  BriefcaseMedical,
  Clock3,
  GraduationCap,
  Languages,
  CalendarDays,
  
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

import { fetchSingleDoctorData } from "@/Fetch Api/fetchApi";
import Link from "next/link";
import BookAppointmentModalForm from "@/Components/Shered/BookAppointmentModalForm/BookAppointmentModalForm";
// import BookAppointmentModalForm from "@/Components/Shered/BookAppointmentModalForm/BookAppointmentModalForm";

const DoctorDetailsPage = async ({ params }) => {
  let { id } = await params;
  let singleDoctorData = await fetchSingleDoctorData(id);
  let {
    name,
    image,
    specialty,
    experience,
    description,
    hospital,
    location,
    fee,
    rating,
    qualification,
    reviews,
    availability,
    languages,
    expertise,
  } = singleDoctorData;
  return (
    <>
      
      <div className="bg-[#f5f9f8] py-10 mb-15 md:mb-20 lg:mb-10  md:py-13">
        <div className="max-w-[90%] mx-auto px-4 md:px-6">
          {/* back btn */}
          <div className="">
            <Link href={'/allAppointments'} className="group w-fit flex items-center gap-3 bg-[#11b8a5] hover:bg-[#0ea392] text-white font-semibold text-lg md:text-xl px-8 md:px-9 py-4 rounded-[22px] transition-all duration-300 shadow-lg hover:shadow-xl mb-4">
              <ArrowLeft
                size={26}
                className="group-hover:-translate-x-1 transition-all duration-300"
              />

              <span>Back</span>
            </Link>
          </div>
          {/* top section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-[30px] p-5 md:p-8 shadow-sm border border-gray-100">
            {/* doctor left side image */}
            <div className="bg-[#eef8f7] rounded-[25px] overflow-hidden relative">
              <Image
                src={image}
                alt={name}
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-slate-700">
                  Top Rated Doctor
                </span>
              </div>
            </div>

            {/* center content (doctor name plus simple details) */}
            <div className="flex flex-col justify-center">
              {/* rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  {rating}
                </div>
                {/* doctor review */}
                <p className="text-slate-500 text-sm">({reviews} Reviews)</p>
              </div>

              {/* doctor name */}
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                {name}
              </h1>

              {/* specialty */}
              <p className="text-teal-500 text-xl font-semibold mt-3">
                {specialty}
              </p>

              {/* experience */}
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3 text-slate-700">
                  <BriefcaseMedical size={20} className="text-teal-500" />
                  <span>{experience} Experience</span>
                </div>
                {/* qualification */}
                <div className="flex items-center gap-3 text-slate-700">
                  <GraduationCap size={20} className="text-teal-500" />
                  <span>{qualification}</span>
                </div>
                {/* location */}
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin size={20} className="text-teal-500" />
                  <span>{location}</span>
                </div>
                {/* availability */}
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock3 size={20} className="text-teal-500" />
                  <span>{availability[0]}</span>
                </div>
                {/* languages */}
                <div className="flex items-center gap-3 text-slate-700">
                  <Languages size={20} className="text-teal-500" />
                  <span>{languages[0]},</span>
                  <span>{languages[1]}</span>
                </div>
              </div>
            </div>

            {/* right part */}
            <div className="bg-[#f8fcfb] border border-gray-100 rounded-[25px] p-6 flex flex-col justify-center">
              <div>
                <p className="text-slate-500 text-lg">Consultation Fee</p>
                {/* doctor fee */}
                <h2 className="text-5xl font-bold text-teal-500 mt-2">
                  ৳{fee}
                </h2>
              </div>

              {/* available times */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Available Today
                </h3>

                <div className="space-y-4">
                  {availability.map((times, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-2xl py-4 text-center font-semibold text-slate-700"
                    >
                      {times}
                    </div>
                  ))}
                </div>
              </div>

              {/* button */}
              <div className="mt-8 space-y-4">
                
                <BookAppointmentModalForm name={name}></BookAppointmentModalForm>
              

                <button className="w-full h-14 rounded-2xl border border-teal-500 text-teal-500 hover:bg-teal-50 font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Message Doctor
                </button>
              </div>
            </div>
          </div>

          {/* about section */}
          <div className="mt-10 bg-white rounded-[30px] p-6 md:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              About {name}
            </h2>

            <p className="text-slate-600 leading-8 text-[17px]">
              {name} {description}
            </p>

            {/* EXPERTISE */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                Areas of Expertise
              </h3>

              <div className="flex flex-wrap gap-4">
                {expertise.map((ex, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 rounded-2xl bg-teal-50 text-teal-500 font-medium"
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetailsPage;
