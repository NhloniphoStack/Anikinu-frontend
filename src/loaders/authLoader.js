import {getUser} from '../api/auth/getUser.js'

export async function authLoader(){
    const user = await getUser()
  
    if(user?.error){
        
        return {
            user: null
        } 
    }

    return {
        user: user
    }
}