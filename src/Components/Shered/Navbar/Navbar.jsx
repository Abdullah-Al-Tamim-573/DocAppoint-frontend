"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky border top-0 z-50 w-full border-b border-gray-200 bg-white/80 ">
      <div className="max-w-[95%] mx-auto h-20  flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className=" w-[180px] sm:w-[200px] md:w-[150px] lg:w-[180px]">
          {/* LOGO */}
          
            <Image
              src="/Images/logo.png"
              alt="DocAppoint Logo"
              width={200}
              height={60}
              
              className="w-full h-auto object-contain "
            />
            
         
        </div>

        {/* Middle Side */}
        <div>
          {/* desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700">
            <li>
              <Link
                href="/"
                className="text-teal-500 transition-all duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/appointments"
                className="hover:text-teal-500 transition-all duration-300"
              >
                All Appointments
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                className="hover:text-teal-500 transition-all duration-300"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        {/* right side */}
        <div className="flex items-center gap-3">
          {/* theme button */}
          <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
            <Moon size={18} className="text-slate-700" />
          </button>

          {/* login button */}
          <Link href="/login" className="hidden md:block">
            <button className="h-10 px-5 rounded-xl border border-teal-500 text-teal-500 hover:bg-teal-50 transition-all duration-300 text-sm font-semibold">
              Log In
            </button>
          </Link>

          {/* register button */}
          <Link href="/register" className="hidden md:block">
            <button className="h-10 px-5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white transition-all duration-300 text-sm font-semibold shadow-md">
              Register
            </button>
          </Link>

          {/* mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-10 w-10 rounded-lg border border-gray-200 flex items-center justify-center"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-5 py-5">
          <ul className="flex flex-col gap-5 text-[15px] font-medium text-slate-700">
            <li>
              <Link
                href="/"
                className="text-teal-500"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/appointments"
                className="hover:text-teal-500 transition"
                onClick={() => setOpen(false)}
              >
                All Appointments
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                className="hover:text-teal-500 transition"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            {/* mobile buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/login">
                <button className="w-full h-10 rounded-xl border border-teal-500 text-teal-500 font-semibold">
                  Log In
                </button>
              </Link>

              <Link href="/register">
                <button className="w-full h-10 rounded-xl bg-teal-500 text-white font-semibold">
                  Register
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
