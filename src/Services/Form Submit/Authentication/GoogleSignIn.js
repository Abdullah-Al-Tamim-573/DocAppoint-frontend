import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export let googleSignIn = async (router) => {
   const data = await authClient.signIn.social({
    provider: "google",
  });
}