import AppointmentsHeroSection from "@/Components/Shered/Appointments Hero Section/AppointmentsHeroSection";
import DoctorsSection from "@/Components/Shered/DoctorsSection/DoctorsSection";
export const metadata = {
  title: "AllAppointments - DocAppoint",
  description: "Doctor Appointment AllAppointments Page",
};
const AllAppointmentsPage = async () => {
  return (
    <>
      <AppointmentsHeroSection></AppointmentsHeroSection>
      <DoctorsSection></DoctorsSection>
    </>
  );
};

export default AllAppointmentsPage;
