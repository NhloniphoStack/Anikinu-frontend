



export async function editLog(details){
    console.log(details)
    console.log(details)
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
        console.log(error)
        return error
    }

    const success = await res.json()
    console.log(success)
    return success
}
