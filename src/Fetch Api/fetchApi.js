// fetch doctors data 
export let fetchDoctorsData = async () => {
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`, {cache: 'no-store'});
        let data = await res.json();
        return data 
    }
    catch(error) {
        return []
    }
}

// fetch single doctor data 
export let fetchSingleDoctorData = async(id) => {
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`);
        let data = await res.json();
        return data 
    }
    catch(error) {
         return {}
    }
}