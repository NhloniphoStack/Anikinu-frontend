import { removeListItem } from "../api/auth/removeListItem.js";

export async function myListAction({request}){
    const formData = await request.formData()
    const animeID = formData.get("animeid")

    try{
         await removeListItem(animeID)
    }catch(error){
        console.log(error)
    }

}