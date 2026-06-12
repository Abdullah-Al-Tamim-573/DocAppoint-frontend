

import ReviewSlider from "../ReviewSlider/ReviewSlider";

const PatientReviews = () => {
  return (
    <div className="max-w-[85%] mx-auto bg-[#f5f9ff] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
       
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-3">

          {/* Left Side */}
          <div className="max-w-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
              Patients Love Us
            </p>

            <h2 className="font-extrabold text-slate-900 text-2xl lg:text-3xl">
              What Our Patients Say
            </h2>

           
          </div>

         
        </div>

        <ReviewSlider></ReviewSlider>
      </div>
    </div>
  );
};

export default PatientReviews;