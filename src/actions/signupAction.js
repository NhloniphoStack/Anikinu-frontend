import { redirect } from 'react-router'
import { signup } from '../api/auth/signup.js'


export async function signupAction({request}){
    const formData = await request.formData()
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")
   console.log(username, password, email)
    try{
      const attempt =  await signup({
            username: username,
            email: email,
            password: password
        })

        if(attempt?.error){
            return  attempt
        }

      return redirect('/mylist')

    }catch(error){
        console.log(error)
        return error
    }

}