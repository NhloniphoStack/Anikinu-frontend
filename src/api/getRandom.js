

export async function getRandom(){
    
    const res = await fetch(`http://localhost:8000/api/anime/random`, {
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