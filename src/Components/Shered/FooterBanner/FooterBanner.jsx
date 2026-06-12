import DoctorAnimation from "../Animation/DoctorAnimation";


const FooterBanner = () => {
    return (
        <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-6xl bg-[#005f54] text-white rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col xl:flex-row items-center justify-between shadow-2xl">
          
          {/* doctor animation (lottie react) */}
          <DoctorAnimation></DoctorAnimation>
         

          {/* footer Banner Take Control of Your Health Today text*/}
          <div className="flex-1 text-center xl:text-left md:ml-8 mt-4 md:mt-0">
            {/* footer banner title */}
            <h2 className="font-extrabold mb-3 md:mb-2 leading-tight text-white text-xl md:text-2xl lg:text-3xl">
              Take Control of Your Health Today
            </h2>
           
            {/* footer Banner simple description*/}
            <p className="text-xs sm:text-sm md:text-base text-emerald-100/80 font-light max-w-lg mx-auto md:mx-0">
              Join thousands of patients who trust DocAppoint for their healthcare needs.
            </p>
          </div>

          {/* footer banner btn */}
          <div className="mt-4 xl:mt-0  w-full md:w-auto flex justify-center">
            <button className="w-full sm:w-auto bg-white text-[#005f54] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
              Get Started Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>

          
        </div>
        </>
    );
};

export default FooterBanner;