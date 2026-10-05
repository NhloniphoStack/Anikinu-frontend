import { Await, useLoaderData, Link } from "react-router"
import DetailedAnimeCard from "../Components/DetailedAnimeCard.jsx"
import { Suspense,useEffect } from "react"
import DiscoverFallback from "../Components/DiscoverFallback.jsx"
export default function TopRated(){
    const animePromise = useLoaderData()?.promise
   
    useEffect(() => {
            window.scrollTo({top:0, behavior: "smooth"})
         })
     return (
        <section className="container">
        <h2 className="catalogue-heading">Top Rated</h2>
        <div className="anime-grid">

           <Suspense fallback={<DiscoverFallback />}>
            <Await resolve={animePromise}>
                {(anime) => {
                    

                    return (
                         <>
                         {anime.map(ani =>
                            <Link to={`/${ani.id}/synopsis`}>
                             <DetailedAnimeCard anime={ani}/>
                             </Link>
                             )}
                         </>
                    )
                }}
            </Await>
             </Suspense>
        </div>
        </section>
        
     )
}
