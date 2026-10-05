import { editLog } from "../api/auth/editLog.js"
import { redirect } from "react-router"
export async function entriesAction({request}){
    const formData = await request.formData()
    const title = formData.get("title")
    const version = formData.get("version")
    const content = formData.get("content")
    const id = formData.get("id")
    
     try{
        const attempt = await editLog({
            id: id,
            title: title,
            version: version,
            content: content
        })

        console.log(attempt)

        return redirect(`/admin/entries?edited=true`)

     }catch(error){
        console.log(error)
        return error
     }
    
}