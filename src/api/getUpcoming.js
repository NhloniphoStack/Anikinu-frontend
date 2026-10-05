
export async function getUpcoming(){
    
    const res = await fetch(`/api/anime/upcoming`, {
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