




export async function getChangeLog(){
    
    const res = await fetch(`/api/changelogs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
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