import { authClient } from "@/lib/auth-client";

export let handleSignUp = async(e) => {
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

    console.log(data?.user, "sign up data");
    console.log(error, "sing up error")

}