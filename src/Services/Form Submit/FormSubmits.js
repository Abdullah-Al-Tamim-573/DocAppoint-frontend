import toast from "react-hot-toast";


export let handleBookAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookAppointmentFormData = Object.fromEntries(formData.entries());

    try {


        let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctorAppointments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookAppointmentFormData),
        });
     let data = await res.json();
        if (data.acknowledged) {
            toast.success("Appointment Booked Successfully!");
            e.target.reset();
            
        }
    } catch (error) {
        toast.error("Something went wrong. Please try again!");
        console.log(error)
    }
}