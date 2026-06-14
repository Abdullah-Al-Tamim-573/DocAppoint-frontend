
import { fetchDoctorsData } from "@/Fetch Api/fetchApi";
import DoctorCard from "../DoctorCard/DoctorCard";


let DoctorsSection = async() => {

    let doctorsData = await fetchDoctorsData();
    

  return (
    <div className="py-10 bg-[#f8fafc] ">
      <div className="w-[85%] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* doctor cards  */}
              {
                doctorsData.map(doctor => <DoctorCard key={doctor._id} doctorData={doctor}></DoctorCard>)
              }
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection;
