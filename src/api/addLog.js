


export async function addLog(details){
    
    const res = await fetch(`/api/changelogs`, {
        method: 'POST',
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