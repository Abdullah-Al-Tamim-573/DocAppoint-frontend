import { authClient } from "@/lib/auth-client";

import toast from "react-hot-toast";

export let handleProfileEditForm = async (e ) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const editProfileFormData = Object.fromEntries(formData.entries());
   
    let {name, email, image} = editProfileFormData;
   
   try{
    
    let result = await authClient.updateUser({
       name,
      email,
       image
    })

    if(result?.data?.status) {
        toast.success("Profile Upgrade Successfully");
        
    }

    if(!result?.data?.status) {
        toast.error("Profile Upgrade NotSuccessfully")
        
    }
 

   }
   catch(error) {
    toast.error(error)
   }
}





