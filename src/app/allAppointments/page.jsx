import { fetchDoctorsData } from "@/Fetch Api/fetchApi";

const AllAppointmentsPage = async() => {
    let doctorsData = await fetchDoctorsData();
    console.log(doctorsData)
    return (
        <>
            i am All Appointments Page
        </>
    );
};

export default AllAppointmentsPage;