import { getChangeLog } from "../api/getChangelog.js"

export async function changeLogLoader(){
    return {
        logs: getChangeLog()
    }
}