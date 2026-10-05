import { redirect } from "react-router"
import { login } from "../api/auth/login.js"

export async function loginAction({request}){
    const formData = await request.formData()
    const username = formData.get("username")
    const password = formData.get("password")
    console.log(username)
    try{
        const attempt = await login({
            username: username,
            password: password
        })

        if(attempt?.error){
            console.log(attempt)
            return attempt
        }

        if(attempt.role === 'admin'){
             return redirect('/admin/add')
        }

        if(attempt.role === 'user'){
             return redirect('/mylist')
        }

        

    }catch(error){
        console.log(error)
        return error
    }
}