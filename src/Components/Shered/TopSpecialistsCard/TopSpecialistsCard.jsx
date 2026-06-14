import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopSpecialistsCard = ({doctor}) => {
    
    let {_id, specialty, rating, name, image, hospital, fee, experience} = doctor;
    return (
        <> 

            <div   
            className="
              group
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              hover:border-teal-200
            "
          >
            <div className="flex gap-4">
              {/* Doctor Image */}
              <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className=" text-[14px] font-bold lg:text-[1rem] text-slate-900 text-base">
                      {name}
                    </h3>

                    <p className="text-sm text-[14px] lg:text-[1rem] text-teal-600 font-medium">
                      {specialty}
                    </p>
                  </div>

                  <div className="flex items-center text-yellow-400  gap-1 bg-teal-600  text-xs px-2 py-1 rounded-md">
                    
                    <Star size={13} fill="currentColor" />
                  
                    <span className='text-white'>{rating}</span>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <p className="text-xs text-slate-500">
                    {experience}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={13} />
                    {hospital}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between">
              <p className="font-semibold text-slate-900">
                Fee:
                <span className="text-teal-600 ml-1">
                  ৳{fee}
                </span>
              </p>

              <Link
              href={`/doctors/${_id}`}
                className="
                  btn
                  bg-teal-600
                  text-white
                 
                  font-medium
                  px-4
                  py-2
                  rounded-lg
                  transition-all
                  duration-300
                  group-hover:bg-teal-700
                "
              >
                View Details
              </Link>
            </div>
          </div>
            
        </>
    );
};

export default TopSpecialistsCard;