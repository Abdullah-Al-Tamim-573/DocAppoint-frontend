// fetch doctors data 
export let fetchDoctorsData = async () => {
    try {
        let res = await fetch(`${process.env.NEXT_SERVER_URL}/doctors`);
        let data = await res.json();
        return data || []
    }
    catch(error) {
        return []
    }
}