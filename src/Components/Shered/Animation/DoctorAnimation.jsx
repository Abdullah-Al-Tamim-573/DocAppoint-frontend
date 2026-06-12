import Lottie from "lottie-react";
import React from "react";

import doctorAnimation from "../../../../public/animations/doctor-animation.json";

const DoctorAnimation = () => {
  return (
    <>
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 -mt-24 sm:-mt-28 md:-mt-32 flex-shrink-0 z-10">
        <Lottie
          animationData={doctorAnimation}
          loop={true}
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
};

export default DoctorAnimation;
