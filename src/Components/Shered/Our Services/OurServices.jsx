import OurServicesCard from "../Our Services Card/OurServicesCard";

const OurServices = () => {
  return (
    <div className="py-16 px-4 max-w-[80%] mx-auto font-sans bg-slate-50/50">
      {/* Our Services text */}
      <div className="flex text-center md:text-left flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
            Our Services
          </span>
          {/* Find the Right Care for You header */}
          <h2 className=" font-extrabold text-slate-900 text-2xl lg:text-3xl">
            Find the Right Care for You
          </h2>
        </div>
        {/* View All Services btn */}
        <div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-teal-600/30 text-teal-600 font-medium text-sm rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-sm">
            View All Services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Services 6 Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-6 gap-5">
        {/* Box 1: Cardiology */}
        <OurServicesCard
          icon={
            <svg
              className="w-8 h-8 text-teal-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          }
          cardTitle={"Cardiology"}
          cardDescription={"Heart related care and treatment"}
        ></OurServicesCard>

        {/* Box 2: Neurology */}

        <OurServicesCard
          icon={
            <svg
              className="w-10 h-10 text-violet-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 4.5C8.8 4.5 7.5 5.8 7.5 7.5c0 .4.1.8.2 1.1A2.8 2.8 0 0 0 6 11.2c0 1.1.6 2.1 1.5 2.6-.3.4-.5.9-.5 1.5 0 1.7 1.3 3 3 3h1V4.5h-.5zM13.5 4.5c1.7 0 3 1.3 3 3 0 .4-.1.8-.2 1.1a2.8 2.8 0 0 1 1.7 2.6c0 1.1-.6 2.1-1.5 2.6.3.4.5.9.5 1.5 0 1.7-1.3 3-3 3h-1V4.5h.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.2 8.5c.4.6.9.9 1.3 1M8.8 13c.5-.5 1-.8 1.7-.8M9.3 16.5c.4-.5.8-.8 1.2-1M14.8 8.5c-.4.6-.9.9-1.3 1M15.2 13c-.5-.5-1-.8-1.7-.8M14.7 16.5c-.4-.5-.8-.8-1.2-1"
              />
            </svg>
          }
          cardTitle={"Neurology"}
          cardDescription={"Brain & nervous system care"}
        ></OurServicesCard>

        {/* Box 3: Dental Care */}
        <OurServicesCard
          icon={
            <svg
              className="w-13 h-13"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circle */}
              <circle cx="64" cy="64" r="64" fill="#E0F2F1" />

              {/* Tooth icon */}
              <path
                d="M48 34C40 34 34 42 34 54C34 66 40 76 46 82C49 85 50 92 50 98C50 104 54 106 58 100C60 97 61 91 64 91C67 91 68 97 70 100C74 106 78 104 78 98C78 92 79 85 82 82C88 76 94 66 94 54C94 42 88 34 80 34C73 34 69 38 64 44C59 38 55 34 48 34Z"
                fill="#ffffff"
                stroke="#26A69A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          cardTitle={"Dental Care"}
          cardDescription={"Complete oral health care"}
        ></OurServicesCard>

        {/* Box 4: Pediatrics */}
        <OurServicesCard
          icon={
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          cardTitle={"Pediatrics"}
          cardDescription={"Care for children and teenagers"}
        ></OurServicesCard>

        {/* Box 5: Orthopedics */}

        <OurServicesCard
          icon={
            <svg
              className="w-11 h-11"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <circle cx="64" cy="64" r="56" fill="#EEF8FF" />

              {/* Human bone */}
              <path
                d="
      M46 36
      C40 30 32 30 28 36
      C24 42 26 50 32 54

      L54 76

      C58 80 58 86 54 90
      C48 96 48 104 54 108
      C60 112 68 110 72 104

      C76 110 84 112 90 108
      C96 104 96 96 90 90
      C86 86 86 80 90 76

      L112 54

      C118 50 120 42 116 36
      C112 30 104 30 98 36

      L76 58

      C72 62 66 62 62 58
      Z"
                fill="#FFFFFF"
                stroke="#4A90E2"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          cardTitle={"Orthopedics"}
          cardDescription={"Bone & joint care"}
        ></OurServicesCard>

        {/* Box 6: Eye Care */}

        <OurServicesCard
          icon={
            <svg
              className="w-8 h-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          }
          cardTitle={"Eye Care"}
          cardDescription={"Vision and eye health care"}
        ></OurServicesCard>
      </div>
    </div>
  );
};

export default OurServices;
