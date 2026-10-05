import { getLog } from "../api/getLog.js"

export async function changeLogDetailsLoader({params}){
    console.log(params?.id)
    return {
        log: getLog(params.id)
    }
}