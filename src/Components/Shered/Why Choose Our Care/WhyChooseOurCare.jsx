import {
  LuStethoscope,
  LuCalendarCheck,
  LuShieldCheck,
  LuWallet,
} from "react-icons/lu";
import FeatureCard from "../FeatureCard/FeatureCard";

const WhyChooseOurCare = () => {
  return (
    <div className="w-full  sm:max-w-[70%] xl:max-w-[80%] mx-auto shadow-2xl md:my-5 rounded-2xl">
      {/* Main Container (White Background, Rounded Corners, and Light Shadow) */}
      <div className="bg-white rounded-3xl pb-5  sm:p-4 md:px-8 md:py-7 lg:p-10">
        {/* Grid Layout for 4 Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2  xl:grid-cols-4  xl:gap-5 justify-items-center md:gap-6 lg:gap-4 divide-gray-100">
          {/* Section 1: Trusted Specialists */}

          <FeatureCard
            icon={LuStethoscope}
            cardTitle={"Trusted Specialists"}
            cardDescription={"Only verified and experienced doctors"}
          ></FeatureCard>

          {/* Section 2: Quick Appointment */}

          <FeatureCard
            icon={LuCalendarCheck}
            cardTitle={"Quick Appointment"}
            cardDescription={"Book appointments in just a few clicks"}
          ></FeatureCard>

          {/* Section 3: Secure & Private */}

          <FeatureCard
            icon={LuShieldCheck}
            cardTitle={"Secure & Private"}
            cardDescription={"Your data is protected and always safe"}
          ></FeatureCard>

          {/* Section 4: Affordable Care */}

          <FeatureCard
            icon={LuWallet}
            cardTitle={"Affordable Care"}
            cardDescription={"Quality healthcare at reasonable fees"}
          ></FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseOurCare;
