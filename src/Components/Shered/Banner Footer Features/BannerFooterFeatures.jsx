import React from "react";import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";


const BannerFooterFeatures = ({text, icon:Icon, iconClassName}) => {
  return (
    <>
      {/* <div className="flex border items-center  gap-2.5 text-gray-800 font-semibold text-sm">
        <div className="bg-[#E6F7F5] p-1 rounded-full text-[#0D9488]">
          
          
            <Icon className={iconClassName}></Icon>
          
        </div>
        <span>{text}</span>
      </div> */}

      <div className="flex items-center gap-1 text-gray-800 font-semibold text-sm sm:justify-center">
            <div className="bg-[#E6F7F5] p-1 rounded-full text-[#0D9488]">
              <Icon className={iconClassName} />
            </div>
            <span>{text}</span>
          </div>
    </>
  );
};

export default BannerFooterFeatures;
