
import { fetchAppointmentDoctorsData } from "@/Fetch Api/fetchApi";
import BookingCard from "../Booking Card/BookingCard";


const DashboardBookings = async () => {
  let appointmentDoctorsData = await fetchAppointmentDoctorsData();
  console.log(appointmentDoctorsData, 'booking data right now')
  return (
    <>
      <div className="max-w-[85%] mx-auto my-10 mb-30  md:mb-40 xl:mb-35">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">My Bookings</h2>

            <p className="text-slate-500 mt-1">
              View and manage your booked appointments.
            </p>
          </div>

          <button className="hidden md:flex h-11 px-5 rounded-xl bg-teal-500 text-white items-center justify-center font-medium hover:bg-teal-600 duration-300">
            + Book New Appointment
          </button>
        </div>

        {
          appointmentDoctorsData.length === 0? <div className="text-[red] text-center font-bold my-10 md:my-20 text-2xl">No appointment Available Here </div>: <><div className="space-y-5">
          {appointmentDoctorsData.map(booking => <BookingCard key={booking._id} bookingData={booking}></BookingCard>)}
        </div></>
        }
      </div>
    </>
  );
};

export default DashboardBookings;
