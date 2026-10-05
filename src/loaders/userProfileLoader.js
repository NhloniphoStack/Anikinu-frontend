import { getUser } from "../api/auth/getUser.js";
import { getUserStats } from "../api/auth/getUserStats.js";

export async function userProfileLoader(){
    return {
        data: getUser(),
        stats: getUserStats()
    }
}