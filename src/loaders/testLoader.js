import { getChangeLog } from "../api/getChangelog.js"


export async function testLoader(){
    return {
        logs: getChangeLog()
    }
}