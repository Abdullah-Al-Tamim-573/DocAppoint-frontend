// // book appointment form submit 
// export let handleBookAppointment = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     const bookAppointmentFormData = Object.fromEntries(formData.entries());
//     console.log(bookAppointmentFormData)
//     // try {

//     //     let res = await fetch(`${process.env.NEXT_SERVER_URL}/doctorAppointments`, {
//     //         method: "POST",
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //         },
//     //         body: JSON.stringify(bookAppointmentFormData),
//     //     });
//     //     let data = await res.json();
//     //     console.log(data)
//     // }
//     // catch(error) {
//     //     console.log(error)
//     // }

// }

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
        console.log("Success:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}