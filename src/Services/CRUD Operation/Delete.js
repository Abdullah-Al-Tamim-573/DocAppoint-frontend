export let handleDelete = async (id) => {
  try {
    let res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctorAppointments/${id}`, {
     method: "DELETE"
  });
  let data = await res.json();
  
  console.log(data)
  alert('your data delete successfully')
  }
  catch (error) {
    alert(error)
    console.log(error, 'delete error')
  }
}