

export async function getAnime(filters){
    
    const res = await fetch(`/api/anime?${filters}`, {
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

    const anime = await res.json()
   
    return anime
}