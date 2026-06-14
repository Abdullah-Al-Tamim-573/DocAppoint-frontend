import React from "react";

const HowItWorksCards = ({
  icon: Icon,
  cardTitle,
  cardDescription,
  cardNumber,
}) => {
  return (
    <>
      <div className="group relative z-10 max-w-[180px] mx-auto text-center py-3 px-5 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer">
        <div className="relative inline-flex">
          <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#17b6a4] text-white text-xs font-semibold flex items-center justify-center">
            {cardNumber}
          </span>

          <div className="group relative z-10 max-w-[180px] mx-auto text-center p-5 rounded-2xl transition-all duration-500  ">
            <div className="relative inline-flex">
              <div className="w-20 h-20 rounded-full bg-[#eaf8f6] flex items-center justify-center transition-all duration-500 group-hover:bg-[#17b6a4]">
                {Icon}
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-5 text-[#17b6a4] font-semibold transition-all duration-500 group-hover:text-slate-900">
          {cardTitle}
        </h3>

        <p className="mt-2 text-sm text-slate-500 leading-6 transition-all duration-500 group-hover:text-slate-700">
          {cardDescription}
        </p>
      </div>
    </>
  );
};

export default HowItWorksCards;
