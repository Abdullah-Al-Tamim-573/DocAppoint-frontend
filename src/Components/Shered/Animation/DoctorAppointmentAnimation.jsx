"use client";

import Lottie from "lottie-react";
import animationData from "../../../../public/animations/mobile-booking.json"

const DoctorAppointmentAnimation = () => {
  return (
    <>
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-full max-w-md"
      />
    </>
  );
};

export default DoctorAppointmentAnimation;
