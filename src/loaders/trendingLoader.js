import { getTrending } from "../api/getTrending.js"

export async function trendingLoader(){
    return {
        promise: getTrending()
    }
}