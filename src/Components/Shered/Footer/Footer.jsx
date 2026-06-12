"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

import Image from "next/image";
import FooterBanner from "../FooterBanner/FooterBanner";
import FooterSocialIcons from "../FooterSocialIcons/FooterSocialIcons";
import FooterNavigationLink from "../FooterNavigationLink/FooterNavigationLink";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#0b131a] text-gray-400 pt-45 lg:pt-52 xl:pt-40 pb-6 px-6 md:px-12 lg:px-24 font-sans mt-30">
        {/* footer banner and CTA (Call To Action Btn) */}
        <FooterBanner></FooterBanner>

        {/* main footer and links */}

        <div className="grid justify-items-center max-w-[80%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 mx-auto gap-8 border-b border-gray-800 pb-12  sm:text-left">
          <div className="sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start">
            {/* footer logo */}
            <div className=" w-[180px] md:w-[140px] lg:w-[150px]">
              {/* LOGO */}

              <Image
                src="/Images/footerLogo2.png"
                alt="DocAppoint Logo"
                width={200}
                height={60}
                className="w-full h-auto object-contain "
              />
            </div>

            <p className="text-sm leading-relaxed mb-6 text-gray-400 max-w-sm sm:max-w-none">
              Your trusted partner for booking appointments with top doctors and
              specialists.
            </p>

            {/* social media icons */}
            <div className="flex items-center gap-3 bg-[#0b131a]  rounded-lg w-fit">
              {/* 1. Facebook icon */}
              <FooterSocialIcons
                labelName={"Facebook"}
                icon={FaFacebookF}
              ></FooterSocialIcons>
              {/* 2. Instagram icon */}
              <FooterSocialIcons
                labelName={"Instagram"}
                icon={FaInstagram}
              ></FooterSocialIcons>
              {/* 3. Linkedin icon */}
              <FooterSocialIcons
                labelName={"Linkedin"}
                icon={FaLinkedinIn}
              ></FooterSocialIcons>
              {/* 4. X icon */}
              <FooterSocialIcons
                labelName={"X"}
                icon={FaXTwitter}
              ></FooterSocialIcons>
            </div>
          </div>

          {/* ২. Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <FooterNavigationLink
                linkText={"All Appointments"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"Dashboard"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"About Us"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"Contact Us"}
                href={"/"}
              ></FooterNavigationLink>
            </ul>
          </div>

          {/* ৩. Our Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <FooterNavigationLink
                linkText={"Cardiology"}
                href={"/"}
              ></FooterNavigationLink>

              <FooterNavigationLink
                linkText={"Neurology"}
                href={"/"}
              ></FooterNavigationLink>

              <FooterNavigationLink
                linkText={"Dental Care"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"Pediatrics"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"Orthopedics"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"Eye Care"}
                href={"/"}
              ></FooterNavigationLink>
            </ul>
          </div>

          {/* ৪. Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <FooterNavigationLink
                linkText={"Help Center"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"Privacy Policy"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"Terms & Conditions"}
                href={"/"}
              ></FooterNavigationLink>
              <FooterNavigationLink
                linkText={"FAQs"}
                href={"/"}
              ></FooterNavigationLink>
            </ul>
          </div>

          {/* ৫. Contact Us */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white font-semibold mb-4 text-base">
              Contact Us
            </h3>

            <ul className="space-y-4 list-none p-0 m-0">
              {/* phone icon*/}
              <li className="flex items-center gap-3 group">
                <div className="text-[#00a896] text-lg">
                  <FaPhoneAlt size={14}/>
                </div>
                <Link
                  href="/"
                  className="text-[#99a1af] hover:text-[#00a896] transition-colors duration-200 text-[14px]"
                >
                  +880 1234 567890
                </Link>
              </li>

              {/* email icon */}
              <li className="flex items-center gap-3 group">
                <div className="text-[#00a896] text-xl">
                  <MdEmail size={15}/>
                </div>
                <Link
                  href="/"
                  className="text-[#99a1af] hover:text-[#00a896] transition-colors duration-200 text-[14px]"
                >
                  info@docappoint.com
                </Link>
              </li>

              {/* location icon */}
              <li className="flex items-start gap-3">
                <div className="text-[#00a896] text-xl mt-1">
                  <MdLocationOn size={17}/>
                </div>
                <p className="text-[#99a1af] cursor-pointer hover:text-[#00a896] transition-colors duration-200 leading-tight text-[14px]">
                  Dhanmondi, Dhaka <br />
                  Bangladesh
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/*  FOOTER COPYRIGHT */}
        <div className="text-center text-xs mt-6 text-gray-500">
          © 2025 DocAppoint. All rights reserved.
        </div>
      </footer>
    </>
  );
}
