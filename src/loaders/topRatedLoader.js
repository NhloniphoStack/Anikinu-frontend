import { getTopRated } from "../api/getTopRated.js"

export async function topRatedLoader(){
    return {
        promise: getTopRated()
    }
}