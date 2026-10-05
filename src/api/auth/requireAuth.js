import { redirect } from "react-router";
import { getUser } from "./getUser.js";


export async function requireAuth(message){
    console.log(message)
    const user = await getUser()
    
    if(user?.error){
        console.log(user)
        return redirect('/login')
    }
   
    return null


}


export async function requireAuthAdmin(message){
    console.log(message)
    const user = await getUser()
    
    if(user?.error){
        console.log(user)
        return redirect('/login')
    }

    
    if(user.role !== 'admin'){
         return redirect('/mylist')
    }


   
    return null


}