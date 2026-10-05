import { getRecentlyFinished } from '../api/getRecentlyFinished'

export async function recentlyFinishedLoader(){
    return {
        promise: getRecentlyFinished()
    }
}