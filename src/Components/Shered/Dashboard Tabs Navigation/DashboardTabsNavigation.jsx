"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



let DashboardTabsNavigation = () => {
  let path = usePathname()
 
  

  return (
    <div className="mb-8 max-w-[85%] mx-auto mt-7 text-center">
      <div className="inline-flex items-center rounded-2xl bg-[#F4F8F9] p-1 shadow-sm">
        <Link href={'/dashboard/myBookings'}
          
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            path === "/dashboard/myBookings"
              ? "bg-white text-slate-900 shadow-md"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          My Bookings
        </Link>

        <Link
        href={'/dashboard/myProfile'}
          
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            path === "/dashboard/myProfile"
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