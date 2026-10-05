import { Link, useOutletContext, Await } from "react-router"
import { Suspense, useState } from "react"
import DetailsFallback from "../Components/DetailsFallback.jsx"

export default function Details(){
     const [anime, recommendations] = useOutletContext()

    
   
    return(
        <section>
              <h3>Anime you might Like</h3>
             
           <Suspense fallback={<DetailsFallback count={4}/>}>
           <Await resolve={recommendations}>
             
            {(anime => {
                
                return (
                     <div className="recom-container">
              
                {anime?.slice(0, 4)?.map(ani =>
                     <Link key={ani?.id} to={`/${ani?.id}/synopsis`}>
                     <div className="recom-anime-card">
                        <img className="recom-anime-img" src={ani?.cover_image} />
                        <div>
                           <p className="recom-anime-title">{ani?.title_english ?? anime?.title_romaji}</p> 

                        </div>
                     </div>
                     </Link>
                     )}
            </div>
                )
            })}
           </Await>
           </Suspense>
           
        </section>
    )
}