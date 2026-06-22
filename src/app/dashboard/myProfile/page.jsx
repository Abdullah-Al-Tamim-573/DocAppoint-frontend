// "use client"


import EditProfileModal from "@/Components/Shered/EditProfileModal/EditProfileModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers"

import { Avatar } from "@heroui/react";
import { Mail, Phone, MapPin, Calendar, Pencil, User } from "lucide-react";

export const metadata = {
  title: "MyProfile - DocAppoint",
  description: "Doctor Appointment MyProfile Page",
};


const MyProfilePage = async() => {

    const session = await auth.api.getSession({
           headers: await headers()
       })
   

    

  return (
    <div className="space-y-6 mb-30 md:mb-40 xl:mb-30">
      {/* profile header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          My Profile
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          View and manage your account information
        </p>
      </div>

      {/* profile card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* left side */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
           
            <div className="relative w-fit">
              <Avatar className="w-28 rounded-full h-28 text-5xl font-bold">
                <Avatar.Image
                className="object-cover"
                  alt={session?.user?.name}
                  src={session?.user?.image}
                />
                <Avatar.Fallback className="bg-teal-50 text-teal-500">
                  {session?.user?.name.slice(0,2)}
                </Avatar.Fallback>
              </Avatar>

              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center">
                <Pencil size={16} className="text-teal-500" />
              </button>
            </div>

            {/* user info */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-slate-900">
                {session?.user?.name}
              </h2>

              <div className="inline-flex items-center gap-1 bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-medium mt-2">
                <User size={12} />
                Patient
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={16} />
                  <span>{session?.user?.email}</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={16} />
                  <span>+880 1712-345678</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Calendar size={16} />
                  <span>Joined on May 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* edit button */}
          

          <EditProfileModal name={session?.user?.name} image={session?.user?.image} email={session?.user?.email}></EditProfileModal>
        </div>
      </div>

      {/* account info */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 mb-8">
          Account Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {/* email */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <Mail size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">Email</h4>

            <p className="text-sm text-slate-600 mt-3 break-all">
              {session?.user?.email}
            </p>
          </div>

          {/* phone */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <Phone size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">Phone</h4>

            <p className="text-sm text-slate-600 mt-3">+880 1712-345678</p>
          </div>

          {/* location */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <MapPin size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">Location</h4>

            <p className="text-sm text-slate-600 mt-3">Dhaka, Bangladesh</p>
          </div>

          {/* member since */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <Calendar size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">Member Since</h4>

            <p className="text-sm text-slate-600 mt-3">May 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
