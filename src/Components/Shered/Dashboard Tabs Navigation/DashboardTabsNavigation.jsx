"use client";

import Link from "next/link";
import { useState } from "react";

let DashboardTabsNavigation = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <div className="mb-8 max-w-[85%] mx-auto mt-7 text-center">
      <div className="inline-flex items-center rounded-2xl bg-[#F4F8F9] p-1 shadow-sm">
        <Link href={'/dashboard/myBookings'}
          onClick={() => setActiveTab("bookings")}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            activeTab === "bookings"
              ? "bg-white text-slate-900 shadow-md"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          My Bookings
        </Link>

        <Link
        href={'/dashboard/myProfile'}
          onClick={() => setActiveTab("profile")}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            activeTab === "profile"
              ? "bg-white text-slate-900 shadow-md"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default DashboardTabsNavigation;