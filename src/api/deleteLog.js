

export async function deleteLog(id){
    
    const res = await fetch(`/api/changelogs/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if(!res.ok){
        const error = await res.json()
       
        return error
    }

    const success = await res.json()
  
    return success
}