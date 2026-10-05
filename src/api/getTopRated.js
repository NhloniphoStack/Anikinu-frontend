

export async function getTopRated(){
    
    const res = await fetch(`/api/anime/top-rated`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok){
        const error = await res.json()
        
        return error
    }

    const anime = await res.json()
   
    return anime
}