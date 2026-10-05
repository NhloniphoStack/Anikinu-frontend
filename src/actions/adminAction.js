import { redirect } from "react-router"
import { addLog } from "../api/addLog.js"

export async function adminAction({request}){
    const formData = await request.formData()

    try{
        const attempt = await addLog({
            title: formData.get("title"),
            version: formData.get("version"),
            content: formData.get("content")
        })
      
       return redirect('/changelog')

    }catch(error){
        
        return error
    }
}