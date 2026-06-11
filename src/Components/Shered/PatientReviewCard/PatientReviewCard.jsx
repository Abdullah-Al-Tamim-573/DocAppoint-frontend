import { Quote, Star } from "lucide-react";




const PatientReviewCard = ({patientReviewText, patientName}) => {
  return (
    <>
   
      
        <div className="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100">
          <Quote className="text-[#14b8a6] mb-4" size={34} />

          <div className="flex items-center gap-1 text-yellow-400 mb-5">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>

          <p className="text-gray-600 leading-7 mb-6">
            {patientReviewText}
          </p>

          <h4 className="font-bold text-[#1e293b]">{patientName}</h4>
        </div>
      
    </>
  );
};

export default PatientReviewCard;
