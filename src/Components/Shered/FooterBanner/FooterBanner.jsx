import DoctorAnimation from "../Animation/DoctorAnimation";
import { FaArrowRightLong } from "react-icons/fa6";
import WhiteBtn from "../Buttons/White Btns/WhiteBtn";
import Link from "next/link";

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
            Join thousands of patients who trust DocAppoint for their healthcare
            needs.
          </p>
        </div>

        {/* footer banner btn */}

        {/* <TealBtn
                            text={"Book Appointment"}
                            className={`inline-flex cursor-pointer items-center
                               justify-center gap-2 bg-teal-500 hover:bg-white/80 border border-teal-500 hover:text-teal-500  text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 group shadow-sm shadow-[#0D9488]/20`}
                            icon={ArrowRight}
                            iconClassName={`w-5 h-5 transition-transform group-hover:translate-x-1`}
                          ></TealBtn> */}
        <div className="mt-4 xl:mt-0  w-full md:w-auto flex justify-center">
          {/* <button className="w-full sm:w-auto bg-white text-[#005f54] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
            Get Started Now
            <FaArrowRightLong />
          </button> */}

          <Link href={'/allAppointments'}>
            <WhiteBtn
              text={"Get Started Now"}
              className={`w-full cursor-pointer sm:w-auto bg-white text-[#005f54] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base group`}
              icon={FaArrowRightLong}
              iconClassName={` transition-transform group-hover:translate-x-1`}
            ></WhiteBtn>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
