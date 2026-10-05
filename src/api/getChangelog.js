




export async function getChangeLog(){
    
    const res = await fetch(`/api/changelogs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok){
        const error = await res.json()
       
        return error
    }

    const success = await res.json()
   
    return success
}