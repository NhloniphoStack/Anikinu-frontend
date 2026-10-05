import { getChangeLog } from "../api/getChangelog";


export async function entriesLoader(){
    return {
        logs: getChangeLog()
    }
}