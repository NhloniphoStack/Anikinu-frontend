import { getAnime } from '../api/getAnime.js'

export async function discoverLoader({ request }){
    const url = new URL(request?.url)

    const params = url?.searchParams
   
    return {
          animePromise: getAnime(params?.toString())
    }
}