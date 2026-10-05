import { logout } from "../api/auth/logout";
import { redirect } from "react-router";
export async function logoutAction(){
    await logout()
   return redirect(`/login`)
}