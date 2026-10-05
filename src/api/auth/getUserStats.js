

export async function getUserStats(){
    
   const res = await fetch('/api/me/stats', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    }
   })

   if(!res.ok){
    const error = await res.json();
    console.log(error)
    return error
   }

   const success = await res.json()
   
   return success
}