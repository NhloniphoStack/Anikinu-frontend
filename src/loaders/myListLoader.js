import { getUserList } from "../api/auth/getUserList.js"
import { getUserStats } from "../api/auth/getUserStats.js"
export async function myListLoader(){


     return {
        list: getUserList(),
        stats: getUserStats()
     }
}