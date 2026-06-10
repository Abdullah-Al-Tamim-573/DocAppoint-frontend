import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";
import BannerFooterFeatures from "../Banner Footer Features/BannerFooterFeatures";

const Banner = () => {
  return (
    <div className="xl:relative">
      <div className="banner-parent gap-5 xl:gap-30  flex my-10 flex-col-reverse xl:flex-row  mx-auto items-center justify-center">
        {/* Banner Left Part */}
        <div className=" bg-slate-50/50 flex  items-center justify-center p-4">
          <div className="max-w-2xl   text-center xl:text-left space-y-6 fontFamily-sans">
            {/* (Trusted Healthcare Platform) */}
            <div className="inline-flex  items-center gap-2 bg-[#E6F7F5] text-[#0D9488] px-3 py-1.5 rounded-full text-sm font-medium border border-[#CCECE8]">
              <ShieldCheck className="w-4 h-4 fill-[#0D9488] text-white" />
              <span>Trusted Healthcare Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[30px]  md:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Find Trusted Doctors & <br className="hidden xl:flex"/>
              Book Appointments <br className="hidden xl:flex"/>
               <span className="text-[#0D9488]">Instantly</span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
              Connect with experienced specialists, manage appointments easily,
              and receive quality healthcare from trusted medical professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center xl:justify-start xl:justify-s sm:flex-row gap-4 pt-2">
              {/* book appointment btn*/}
              <button className="inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group shadow-sm shadow-[#0D9488]/20">
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* explore doctors btn */}
              <button className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#0D9488] font-semibold px-6 py-3.5 rounded-xl border-2 border-[#CCECE8] transition-all duration-200">
                Explore Doctors
              </button>
            </div>

            {/* Banner Footer Features */}
            <div className="grid grid-cols-2 justify-between mx-auto  xl:justify-items-start  sm:grid-cols-3 gap-4 pt-6 relative left-2  w-[80%] sm:w-full sm:static ">
              {/* Verified Doctors */}
              <BannerFooterFeatures text={'Verified Doctors'} icon={CheckCircle2} iconClassName={'w-5 h-5 fill-[#0D9488] text-white'}></BannerFooterFeatures>

              {/* Secure & Safe */}
              <BannerFooterFeatures text={'Secure & Safe'} icon={Shield} iconClassName={'w-5 h-5 fill-[#0D9488] text-white'}></BannerFooterFeatures>
              {/* 24/7 Support */}
              <BannerFooterFeatures text={'24/7 Support'} icon={Clock} iconClassName={'w-5 h-5 fill-[#0D9488] text-white'}></BannerFooterFeatures>
            </div>
          </div>
        </div>
        {/* Banner Right Part */}
        <div className="w-[200px] md:w-[400px] xl:w-[500px]">
              <Image className="w-full h-auto object-contain " src={'/Images/banner.png'} width={500} height={500} alt="banner image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
