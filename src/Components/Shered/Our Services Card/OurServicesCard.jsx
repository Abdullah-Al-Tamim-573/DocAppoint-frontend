import React from "react";

const OurServicesCard = ({ icon: Icon, cardTitle, cardDescription }) => {
  return (
    <>
      <div className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
          {
            Icon
          }
        </div>
        <h3 className="text-base font-bold text-slate-800 mb-2">{cardTitle}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
           {
             cardDescription
           }
        </p>
      </div>
    </>
  );
};

export default OurServicesCard;
