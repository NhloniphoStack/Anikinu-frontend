


export async function addLog(details){
    console.log(details)
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
        console.log(error)
        return error
    }

    const success = await res.json()
    console.log(success)
    return success
}