

export async function getListEntries(id){
   
    
    const res = await fetch(`/api/me/list/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok){
        const error = await res.json()
       
        return 
    }

    const anime = await res.json()
   
    return anime
}