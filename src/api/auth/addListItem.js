

export async function addListItem(item){
   
    const res = await fetch(`/api/me/list`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })

    if(!res.ok){
        const error = await res.json()
       
        return error
    }

    const anime = await res.json()
   
    return anime
}