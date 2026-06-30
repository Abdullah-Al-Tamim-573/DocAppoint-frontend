"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { handleSignOut } from "@/Services/Form Submit/Authentication/SignOut";
import { useRouter } from "next/navigation";
import TealBtn from "../Buttons/Teal Btns/TealBtn";
import WhiteBtn from "../Buttons/White Btns/WhiteBtn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  let router = useRouter();

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
                href="/allAppointments"
                className="hover:text-teal-500 transition-all duration-300"
              >
                All Appointments
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/myBookings"
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
          {/* conditionally show register, login and logout btn */}
          {session?.user ? (
            <>
              {/* logIn user photo Avatar */}
              <Avatar>
                <Avatar.Image
                  alt={session?.user?.name}
                  src={session?.user?.image}
                />
                <Avatar.Fallback>
                  {session?.user?.name.slice(0, 2)}
                </Avatar.Fallback>
              </Avatar>
              {/* big screen logOut btn */}
              <Button
                className={"hidden md:flex"}
                onClick={() => handleSignOut(router)}
                variant="danger"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              {/* big screen login button */}
              <Link href="/login" className="hidden md:block">
               
                <WhiteBtn
                iconClassName={null}
                  text={"Log In"}
                  className={`h-10 btn bg-white  px-5 rounded-xl 
                    border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-sm font-semibold`}
                  icon={null}
                ></WhiteBtn>
              </Link>

              {/* big screen register button */}
              <Link href="/register" className="hidden md:block">
                
                <TealBtn
                  iconClassName={null}
                  icon={null}
                  className={`h-10  px-5 btn rounded-xl text-white 
                  transition-all duration-300 text-sm bg-teal-500
                   hover:bg-white/80 border border-teal-500 hover:text-teal-500 
                  font-semibold shadow-md`}
                  text={"Register"}
                ></TealBtn>
              </Link>
            </>
          )}

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
                href="/allAppointments"
                className="hover:text-teal-500 transition"
                onClick={() => setOpen(false)}
              >
                All Appointments
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/myBookings"
                className="hover:text-teal-500 transition"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            {/* mobile buttons */}
            <div className="flex flex-col gap-3 pt-2">
              {session?.user ? (
                // mobile Log Out btn
                <Button
                  className={"w-full h-10 rounded-xl "}
                  onClick={() => handleSignOut(router)}
                  variant="danger"
                >
                  Log Out
                </Button>
              ) : (
                <>
                  {/* mobile LogIn btn  */}
                  <Link href="/login">
                    

                    <WhiteBtn
                      text={"Log In"}
                      className={`h-10 w-full btn bg-white px-5 rounded-xl border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-sm font-semibold`}
                      icon={null}
                      iconClassName={null}
                    ></WhiteBtn>
                  </Link>
                  {/* mobile Register btn */}
                  <Link href="/register">
                    

                    <TealBtn
                      iconClassName={null}
                      icon={null}
                      className={`h-10 btn w-full box-border  px-5 rounded-xl text-white 
                       transition-all duration-300 text-sm bg-teal-500 hover:bg-white/80 border border-teal-500 hover:text-teal-500 cursor-pointer
                  font-semibold shadow-md`}
                      text={"Register"}
                    ></TealBtn>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
