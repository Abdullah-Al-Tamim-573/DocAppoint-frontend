import {
  Star,
  BriefcaseBusiness,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TealBtn from "../Buttons/Teal Btns/TealBtn";

const DoctorCard = ({ doctorData }) => {
  let {
    _id,
    name,
    fee,
    description,
    experience,
    hospital,
    image,
    location,
    rating,
    specialty,
  } = doctorData;
  return (
    <>
      <div
        className="
        bg-white
      
      border 
      border-[#e7edf3] 
      group 
      rounded-[20px] 
      p-2 
      shadow-sm 
         transition-all
    duration-300
    

    hover:-translate-y-2
    hover:shadow-2xl
    hover:border-teal-200

      "
      >
        {/* doctor image */}
        <div className="relative">
          <Image
            width={200}
            height={200}
            src={image}
            alt={name}
            className="w-full h-[250px]       transition-transform
      duration-500
      group-hover:scale-105
 object-contain rounded-[14px]"
          ></Image>

          <div className="absolute top-3 right-3 bg-white shadow-md rounded-full px-3 py-1.5 flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-slate-700">
              {rating}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-3 pt-4">
          {/* doctor name */}
          <h3 className="text-[18px] font-bold text-slate-900">{name}</h3>
          {/* specialty */}
          <p className="mt-1 text-[14px] font-semibold text-[#11a58b]">
            {specialty}
          </p>

          {/* Experience + Location */}
          <div className="flex items-center gap-5 mt-4 text-[13px] text-slate-500">
            {/* experience */}
            <div className="flex items-center gap-1.5">
              <BriefcaseBusiness size={14} />
              <span>{experience}</span>
            </div>
            {/* location */}
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>

          {/* hospital */}
          <div className="flex items-center gap-1.5 mt-3 text-[13px] text-slate-500">
            <Building2 size={14} />
            <span>{hospital}</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#edf2f7] my-5" />

          {/* card footer */}
          <div className="flex items-center justify-between pb-2">
            <div>
              <span className="text-sm text-slate-500 font-medium mr-1">
                Fee:
              </span>

              <span className="text-[17px] font-bold text-[#11a58b]">
                ৳{fee}
              </span>
            </div>

           
            <Link href={`/doctors/${_id}`}>
              <TealBtn
                icon={null}
                iconClassName={null}
                className={`
                  btn
                  bg-teal-500
                  text-white
                  
                  font-medium
                  px-4
                  py-2
                  rounded-lg
                  transition-all
                  duration-300
                  border
                  group-hover:bg-white
                  group-hover:text-teal-500
                  group-hover:border-teal-500
            `}
                text={`View Details`}
              ></TealBtn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
