import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export let handleSignUp = async(e, router) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const signUpFormData = Object.fromEntries(formData.entries());
   

    const { data, error } = await authClient.signUp.email({
        email: signUpFormData.email,
        password : signUpFormData.password,
        name: signUpFormData.name,
        image: signUpFormData.photoURL,
        callbackURL: "/dashboard"
    })

    console.log('sign up')


    if(data?.user) {
        router.push('/')
        toast.success(`${data?.user?.name} SuccessFully Sign Up`);
    }
    if(error) {
        toast.error(error?.message)
    }

    

}