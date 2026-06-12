// fetch doctors data 
export let fetchDoctorsData = async () => {
    let res = await fetch('http://localhost:5000/doctors');
    let data = await res.json();
    return data
}