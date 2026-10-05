import { redirect } from "react-router";
import { getUser } from "./getUser.js";


export async function requireAuth(message){
   
    const user = await getUser()
    
    if(user?.error){
        
        return redirect('/login')
    }
   
    return null


}


export async function requireAuthAdmin(message){
   
    const user = await getUser()
    
    if(user?.error){
        
        return redirect('/login')
    }

    
    if(user.role !== 'admin'){
         return redirect('/mylist')
    }


   
    return null


}