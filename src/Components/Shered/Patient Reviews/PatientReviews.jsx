
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import ReviewSlider from "../ReviewSlider/ReviewSlider";

const PatientReviews = () => {
  return (
    <section className="w-full bg-[#f5f9ff] py-20">
      <div className="max-w-7xl mx-auto px-4">
       
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Left Side */}
          <div className="max-w-sm">
            <p className="text-[#14b8a6] font-semibold uppercase tracking-wider text-sm mb-3">
              Patients Love Us
            </p>

            <h2 className="text-4xl font-bold text-[#1e293b] leading-tight">
              What Our Patients Say
            </h2>

           
          </div>

         
        </div>

        <ReviewSlider></ReviewSlider>
      </div>
    </section>
  );
};

export default PatientReviews;