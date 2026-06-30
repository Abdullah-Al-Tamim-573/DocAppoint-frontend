import BookingCard from '@/Components/Shered/Booking Card/BookingCard';
import { fetchAppointmentDoctorsData } from '@/Fetch Api/fetchApi';
import Link from 'next/link';

export const metadata = {
  title: "MyBookings - DocAppoint",
  description: "Doctor Appointment MyBookings Page",
};


const MyBookingsPage = async () => {
    let appointmentDoctorsData = await fetchAppointmentDoctorsData();
    return (
         <div className=" my-10 mb-30  md:mb-40 xl:mb-35">
        <div className="flex items-center justify-between mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 ">My Bookings</h2>

            <p className="text-slate-500 mt-1">
              View and manage your booked appointments.
            </p>
          </div>

          <Link href={'/allAppointments'} className="hidden  md:flex h-11 px-5 rounded-xl bg-teal-500 text-white items-center justify-center font-medium border hover:text-teal-500 hover:bg-[#f5f9f8] hover:border-teal-500 duration-300">
            + Book New Appointment
          </Link>
        </div>

        {
          appointmentDoctorsData.length === 0? <div className="text-[red] text-center font-bold my-10 md:my-20 text-2xl">No appointment Available Here </div>: <><div className="space-y-5">
          {appointmentDoctorsData.map(booking => <BookingCard key={booking._id} bookingData={booking}></BookingCard>)}
        </div></>
        }
      </div>
    );
};

export default MyBookingsPage;