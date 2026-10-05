import { getLog } from "../api/getLog.js"

export async function changeLogDetailsLoader({params}){
    
    return {
        log: getLog(params.id)
    }
}