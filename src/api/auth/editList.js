

export async function editList(item){
   console.log(item)
    const res = await fetch(`/api/me/list`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })

    if(!res.ok){
        const error = await res.json()
        console.log(error)
        return error
    }

    const anime = await res.json()
     console.log(anime)
    return anime
}