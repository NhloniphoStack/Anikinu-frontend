

export async function getListEntries(id){
    console.log(id)
    
    const res = await fetch(`/api/me/list/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok){
        const error = await res.json()
        console.log(error)
        return 
    }

    const anime = await res.json()
   console.log(anime)
    return anime
}