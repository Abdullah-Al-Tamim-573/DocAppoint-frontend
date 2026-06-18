

import toast from "react-hot-toast";





export let handleDelete = async (id, router) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctorAppointments/${id}`, {
     method: "DELETE"
  });
  let data = await res.json();
  
  if(data) {
    toast.success("Delete Appointment SuccessFully");
    router.refresh();
  }
  if(!data) {
    toast.error("Delete Appointment UnSuccessFul")
  }
  
  }
  catch (error) {
    toast.error("internal error")
    console.log(error, 'delete error')
  }
}