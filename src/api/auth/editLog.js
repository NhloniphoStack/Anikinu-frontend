



export async function editLog(details){
 
    const res = await fetch(`/api/changelogs/${details?.id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
    })

    if(!res.ok){
        const error = await res.json()
        
        return error
    }

    const success = await res.json()
   
    return success
}
