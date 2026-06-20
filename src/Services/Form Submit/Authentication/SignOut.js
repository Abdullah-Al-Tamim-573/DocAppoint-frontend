import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";


export let handleSignOut = async (router) => {
    
    let result = await authClient.signOut();
    
    if(result?.data?.success) {
        router.push('/register');
        toast.success('Successfully SignOut')
    }
    else {
        toast.error('SignOut Failed')
    }


}