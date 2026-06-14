"use client";

import Lottie from "lottie-react";
import searchDoctorAnimation from "../../../../public/animations/search-doctor.json";

const SearchDoctorAnimation = () => {
  return (
    <>
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-md">
          <Lottie animationData={searchDoctorAnimation} loop={true} />
        </div>
      </div>
    </>
  );
};

export default SearchDoctorAnimation;
