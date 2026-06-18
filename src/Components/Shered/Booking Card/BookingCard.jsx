import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  User,
  FileText,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

const BookingCard = ({bookingData}) => {
    console.log(bookingData)
    let {_id, image, appointmentDate, appointmentReason, appointmentTime, doctorName, gender, patientName, rating, specialty, userEmail, userPhoneNumber} = bookingData;


  return (
    <>
      <div
       
        className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-md duration-300"
      >
        {/* sm - md and xl screen*/}
        <div className="flex flex-col lg:hidden xl:flex-row xl:flex gap-6 xl:items-center">
          {/* Doctor */}
          <div className="flex items-center gap-4 min-w-[280px]">
            {/* doctor image */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={doctorName}
                fill
                className="object-cover"
              />
            </div>
              {/* doctor name */}
            <div>
              <h3 className="font-bold text-lg text-slate-900">
                {doctorName}
              </h3>
             {/* specialty */}
              <p className="text-teal-600 font-medium">{specialty}</p>
               {/* doctor rating + star icon  */}
              <div className="mt-2 inline-flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
            <div>
                {/* booking date or appointment date*/}
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <CalendarDays size={15} />
                Date
              </p>
               
              <p className="font-medium mt-1">{appointmentDate}</p>
            </div>
            {/* booking time or appointment time*/}
            <div>
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock3 size={15} />
                Time
              </p>

              <p className="font-medium mt-1">{appointmentTime}</p>
            </div>
            {/* patient name */}
            <div>
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <User size={15} />
                Patient
              </p>

              <p className="font-medium mt-1">{patientName}</p>
            </div>
            {/* illness reason or appointment reason*/}
            <div>
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <FileText size={15} />
                Reason
              </p>

              <p className="font-medium mt-1">{appointmentReason}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 xl:min-w-[150px]">
            <span
              className={`text-center rounded-full py-2 text-sm font-medium bg-green-100 text-green-700`}
            >
              confirmed 
            </span>

            <button className="h-10 rounded-xl border border-teal-500 text-teal-600 font-medium flex items-center justify-center gap-2 hover:bg-teal-50">
              <Pencil size={15} />
              Update
            </button>

            <button className="h-10 rounded-xl border border-red-500 text-red-500 font-medium flex items-center justify-center gap-2 hover:bg-red-50">
              <Trash2 size={15} />
              Delete
            </button>
          </div>
        </div>

        {/* lg screen */}
        <div className="lg:flex xl:hidden flex-col  gap-9 xl:items-center hidden ">
          <div className="flex justify-between items-center">
            {/* Doctor */}
            <div className="flex items-center gap-4 min-w-[280px]">
                {/* doctor image */}
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
                <Image
                src={image}
                alt={doctorName}
                fill
                className="object-cover"
              />
              </div>
              {/* doctor name */}
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                   {doctorName}
                </h3>
                {/* specialty */}
                <p className="text-teal-600 font-medium">{specialty}</p>
                 {/* doctor rating + star icon  */}
                <div className="mt-2 inline-flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{rating}</span>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="flex flex-col gap-3 xl:min-w-[150px]">
              <span
                className={`text-center rounded-full py-2 text-sm font-medium bg-green-100 text-green-700`}
              >
                confirmed 
              </span>

              <button className="h-10 btn rounded-xl border border-teal-500 text-teal-600 font-medium flex items-center justify-center gap-2 hover:bg-teal-50">
                <Pencil size={15} />
                Update
              </button>

              <button className="h-10 btn rounded-xl border border-red-500 text-red-500 font-medium flex items-center justify-center gap-2 hover:bg-red-50">
                <Trash2 size={15} />
                Delete
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
            <div>
                {/* booking date or appointment date*/}
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <CalendarDays size={15} />
                Date
              </p>
               
              <p className="font-medium mt-1">{appointmentDate}</p>
            </div>
            {/* booking time or appointment time*/}
            <div>
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock3 size={15} />
                Time
              </p>

              <p className="font-medium mt-1">{appointmentTime}</p>
            </div>
            {/* patient name */}
            <div>
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <User size={15} />
                Patient
              </p>

              <p className="font-medium mt-1">{patientName}</p>
            </div>
            {/* illness reason or appointment reason*/}
            <div>
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                <FileText size={15} />
                Reason
              </p>

              <p className="font-medium mt-1">{appointmentReason}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
