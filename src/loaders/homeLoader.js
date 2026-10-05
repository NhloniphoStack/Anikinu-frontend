import { getRecentlyFinished } from "../api/getRecentlyFinished.js"
import { getTopRated } from "../api/getTopRated.js"
import { getTrending } from "../api/getTrending.js"
import { getUpcoming } from "../api/getUpcoming.js"
export async function homeLoader(){

    return {
        recentlyFinishedPromise: getRecentlyFinished(),
        topRatedPromise: getTopRated(),
        trendingPromise: getTrending(),
        upComingPromise: getUpcoming()
    }
   
}