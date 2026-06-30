import { auth } from "@/lib/auth";
import { headers } from "next/headers";



// fetch doctors data 
export let fetchDoctorsData = async () => {
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`, { cache: 'no-store' });
        let data = await res.json();
        return data
    }
    catch (error) {
        return []
    }
}

// fetch single doctor data 
export let fetchSingleDoctorData = async (id) => {
    const {token} = await auth.api.getToken({
            headers: await headers()
        })

        // console.log(token)
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`, {
            headers : {
                "Authorization": `Bearer ${token}`
            }
        });
        let data = await res.json();
        return data
    }
    catch (error) {
        return {}
    }
}


// fetch appointment doctors data 

export let fetchAppointmentDoctorsData = async () => {
    try {
        
        let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctorAppointments`, { cache: 'no-store' });
        let data = await res.json();
        return data
    }
    catch(error) {
        return []
    }
   
}