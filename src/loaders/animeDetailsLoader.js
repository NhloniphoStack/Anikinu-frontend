import { getAnimeDetails } from "../api/getAnimeDetails"
import { getBatch } from "../api/getBatch"
import { getListEntries } from "../api/auth/getListEntries.js"
export async function animeDetailsLoader({params}){
    
    const parent = await getAnimeDetails(params?.animeid)

    
    const recom = JSON?.parse(parent?.recommendations)
    const data = recom?.nodes
    
    const ids = () => data?.map(anime => anime?.mediaRecommendation?.id)

    
 
        

      

    
    return {
        animePromise: getAnimeDetails(params?.animeid),
        recommendations: getBatch({ids: ids()}),
        listEntries: getListEntries(params?.animeid)
    }
}