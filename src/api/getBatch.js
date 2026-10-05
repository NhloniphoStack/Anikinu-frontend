



export async function getBatch(ids){
   
    const res = await fetch(`/api/anime/resolve`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
    })

    if(!res.ok){
        const error = await res.json()
        console.log(error)
        return error
    }

    const anime = await res.json()
   
    return anime
}