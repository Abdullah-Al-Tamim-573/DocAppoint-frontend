"use client";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Pencil,
  User,
} from "lucide-react";

const MyProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          My Profile
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          View and manage your account information
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-teal-50 flex items-center justify-center">
                <span className="text-5xl font-bold text-teal-500">
                  SR
                </span>
              </div>

              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center">
                <Pencil size={16} className="text-teal-500" />
              </button>
            </div>

            {/* User Info */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-slate-900">
                Sarah Rahman
              </h2>

              <div className="inline-flex items-center gap-1 bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-medium mt-2">
                <User size={12} />
                Patient
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={16} />
                  <span>sarahrahman@example.com</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={16} />
                  <span>+880 1712-345678</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Calendar size={16} />
                  <span>Joined on May 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <button className="h-12 px-6 rounded-xl border border-teal-500 text-teal-500 hover:bg-teal-50 transition-all duration-300 flex items-center justify-center gap-2 font-medium">
            <Pencil size={16} />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Account Information */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 mb-8">
          Account Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {/* Email */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <Mail size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">Email</h4>

            <p className="text-sm text-slate-600 mt-3 break-all">
              sarahrahman@example.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <Phone size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">Phone</h4>

            <p className="text-sm text-slate-600 mt-3">
              +880 1712-345678
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <MapPin size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">Location</h4>

            <p className="text-sm text-slate-600 mt-3">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Member Since */}
          <div className="flex flex-col items-center text-center py-6 px-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
              <Calendar size={24} className="text-teal-500" />
            </div>

            <h4 className="font-medium text-slate-700">
              Member Since
            </h4>

            <p className="text-sm text-slate-600 mt-3">
              May 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;