import toast from "react-hot-toast";

export let handleUpgradeForm = async (e, id, router) => {
    e.preventDefault();
   console.log(e, 'delete e')
   console.log(id,'delete id')
   const formData = new FormData(e.currentTarget);
  
  const allUpgradeFormData = Object.fromEntries(formData.entries());
  try {

      let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctorAppointments/${id}`, {
        method : "PATCH",
        headers: {"Content-Type": "application/json"},
         body: JSON.stringify(allUpgradeFormData),
      })
      let data = await res.json();
      if(data) {
        toast.success('Appointment Upgrade SuccessFully');
        router.refresh()
      }
      if(!data){
        toast.error("Appointment Upgrade UnSuccessFul")
      }
  }
  catch(error) {
      toast.error('internal error');
      console.log(error, 'Appointment upgrade error')
  }
}