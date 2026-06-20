import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export let handleLogIn = async (e, router) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const logInFormData = Object.fromEntries(formData.entries());
    console.log(logInFormData, "login from total data")

    const { data, error } = await authClient.signIn.email({

        email: logInFormData.email,

        password: logInFormData.password,

        callbackURL: "/",

    });

    if(data) {
        toast.success("SuccessFully Logged In")
    }
    if(error) {
        toast.error(error?.message)
    }

}