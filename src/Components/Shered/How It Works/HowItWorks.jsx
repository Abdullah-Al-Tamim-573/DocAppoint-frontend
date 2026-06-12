
import DoctorAppointmentAnimation from "../Animation/DoctorAppointmentAnimation";
import HowItWorksCards from "../How It Works Cards/HowItWorksCards";

const HowItWorks = () => {
  return (
    <>
      <div className="bg-[#f8fbfb] max-w-[85%] mx-auto  lg:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <div className="grid xl:grid-cols-2 gap-12 items-center justify-items-center">
            {/* Left Side */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
                How It Works
              </p>

              <h2 className="font-extrabold text-slate-900 text-2xl lg:text-3xl">
                Book Appointment in 3 Simple Steps
              </h2>

              {/* Steps */}
              <div className="mt-12 relative">
                {/* Dashed Connector */}
                <div className="hidden md:block absolute top-18 left-14 right-14 border-t-2 border-dashed border-[#cdebea]" />

                <div className="flex flex-col justify-center md:flex-row md:justify-between gap-7">
                  {/* Step 1 */}

                  <HowItWorksCards
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="search-icon w-8 h-8 text-[#17b6a4] transition-colors duration-500 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20L17 17" />
                      </svg>
                    }
                    cardTitle={"Search Doctor"}
                    cardDescription={
                      "Find and choose the right doctor for your needs"
                    }
                    cardNumber={1}
                  ></HowItWorksCards>

                  {/* Step 2 */}

                  <HowItWorksCards
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-[#17b6a4] transition-colors duration-500 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2V6" />
                        <path d="M8 2V6" />
                        <path d="M3 10H21" />
                      </svg>
                    }
                    cardTitle={"Choose Date & Time"}
                    cardDescription={
                      "Pick your preferred date and available time."
                    }
                    cardNumber={2}
                  ></HowItWorksCards>

                  {/* Step 3 */}

                  <HowItWorksCards
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-[#17b6a4] transition-colors duration-500 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M20 6L9 17L4 12" />
                      </svg>
                    }
                    cardTitle={"Book Appointment"}
                    cardDescription={
                      " Confirm your booking and you are all set."
                    }
                    cardNumber={3}
                  ></HowItWorksCards>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end">
              {/* animation */}
              <DoctorAppointmentAnimation></DoctorAppointmentAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
