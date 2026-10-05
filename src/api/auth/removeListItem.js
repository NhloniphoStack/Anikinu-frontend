


export async function removeListItem(id){
    
    const res = await fetch(`/api/me/list/${id}`, {
        method: 'DELETE',
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