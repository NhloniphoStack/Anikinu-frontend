


export async function getLog(id){
    
    const res = await fetch(`/api/changelogs/${id}`, {
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