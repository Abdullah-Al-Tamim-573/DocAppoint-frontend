import AppointmentsHeroSection from "@/Components/Shered/Appointments Hero Section/AppointmentsHeroSection";
import { fetchDoctorsData } from "@/Fetch Api/fetchApi";

const AllAppointmentsPage = async() => {
    let doctorsData = await fetchDoctorsData();
    
    return (
        <>
            <AppointmentsHeroSection></AppointmentsHeroSection>
        </>
    );
};

export default AllAppointmentsPage;