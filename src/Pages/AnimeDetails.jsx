import { Await, useLoaderData, useOutletContext } from "react-router"
import star from '../assets/yellow-star.svg'
import { Outlet } from "react-router"
import { DetailSkeleton } from "../Components/loadingSkeletons/animeDetail skeletons/DetailSkeleton"
import { Suspense, useEffect } from "react" 
import ListButton from "../Components/ListButton.jsx"
export default function AnimeDetails(){
    const anime = useLoaderData()?.animePromise
    const recommendations = useLoaderData()?.recommendations
    const myListEntries = useLoaderData()?.listEntries
    console.log(myListEntries)
    function convertScore(score){
          return (score / 100 * 10).toFixed(1)
    }

     function cleanDate(date){
        if(!date){
            return null
        }
      const instance = new Date(date)

      return instance.toLocaleDateString("en-US", {year: "numeric", day:"numeric", month: "short"})
    }

      useEffect(() => {
        window.scrollTo({top:0, behavior: "smooth"})
     })

     const listEntries = [
        {
        type: 'Planning',
        value: "PLANNING"
        },
        {
        type: 'Watching',
        value: "WATCHING"
        },
        {
        type: 'Completed',
        value: "COMPLETED"
        },
        {
        type: 'Dropped',
        value: "DROPPED"
        }
    ]

     async function handleAdd(status){
     console.log(status)
     const attempt = await addListItem({
        animeID: anime?.id,
        status: status?.value
     })

     console.log(attempt)
    }

    
    
    return (
        <section className="container">
            <Suspense fallback={<DetailSkeleton />}>
           <Await resolve={anime}>
            {(anime) => {
               
                return(
                    <div className="parent-detail-container">
                        <img className="banner-image" src={anime?.banner_image ?? anime?.cover_image} />
                        <div className="detail-grid">
                        <div className="cover-image-container">
                            <img className="cover-image" src={anime?.cover_image} />
                            
                            <div className="detail-anime-stats">
                                <p >Format</p>
                                <p className="anime-type">{anime?.format}</p>
                                <p>Episodes</p>
                                <p className="anime-type">{anime?.episodes}</p>
                                <p>Status</p>
                                <p className="anime-type">{anime?.status}</p>
                                <p>Start Date</p>
                                <p className="anime-type">{cleanDate(anime?.start_date) ?? "Unknown"}</p>
                                <p>End Date</p>
                                <p className="anime-type">{cleanDate(anime?.end_date) ?? "Unknown"}</p>
                                <p>Average score</p>
                                <p className="anime-type">{anime?.average_score}%</p>
                                <p>Romaji</p>
                                <p className="anime-type">{anime?.title_romaji}</p>
                                <p>Native</p>
                                <p className="anime-type">{anime?.title_native}</p>
                                
                                
                            </div>
                        </div>
                        <div className="anime-full-content">
                            <p 
                            className="details-anime-title">
                                {anime?.title_english ?? anime?.title_romaji}
                            </p>
                           <Await resolve={myListEntries}>
                            {item => {
                                console.log(item)
                                return (
                                     <ListButton mylist={item} listEntries={listEntries} anime={anime}/>
                                )
                            }}
                           </Await>
                            <div className="rating-container">
                                <img src={star}/>
                                <p>{convertScore(anime?.average_score)}</p>
                            </div>
                            <div className="details-genres-container">
                                {anime?.genres.map((genre, i) => 
                                <span key={i} className="details-genre">{genre}</span>)}
 
                            </div>
                            <div className="anime-slot">
                                <p>{anime?.season_year} •</p>
                                <p>{anime?.format} •</p>
                                <p>{anime?.status} •</p>
                                <p>{anime?.episodes} episodes</p>
                            </div>
                            <div className="layout-container">
                           
                            <Outlet  context={[anime, recommendations]}/>
                          
 
                            </div>
                            
                            <div className="anime-overview">
                                <p className="description-text">Description</p>
                             <p>{anime?.description}</p>
 
                            </div>
                        </div>
                        </div>
                        
                    </div>
                )
            }}

           </Await>
           </Suspense>
           
        </section>
        
    )
}