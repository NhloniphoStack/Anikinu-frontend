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
       console.log(attempt)
       return redirect('/changelog')

    }catch(error){
        console.log(error)
        return error
    }
}