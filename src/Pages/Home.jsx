import { Await, useLoaderData ,Link, NavLink, useNavigate } from "react-router"
import { Suspense } from "react";

import AnimeCard from "../Components/AnimeCard.jsx";
import { useRef, useState } from "react";
import { genres } from "../util/supplyGenres.js";
import arrow from '../assets/arrow.svg'
import SidePanelSkeletons from "../Components/loadingSkeletons/side-panel skeletons/SidePanelSkeletons.jsx";
import Fallback from "../Components/Fallback.jsx";
export default function Home(){
    const recentAnime = useLoaderData()?.recentlyFinishedPromise;
    const topRatedAnime = useLoaderData()?.topRatedPromise;
    const trendingAnime = useLoaderData()?.trendingPromise;
    const upComingAnime = useLoaderData()?.upComingPromise
    const [showMoreUpcoming, SetshowMoreUpcoming] = useState(false)
    const carousel = useRef()
    const topCont = useRef()
    const trending = useRef()
    
    function scrollRight(){
         carousel?.current?.scrollBy({
            left: 300,
            behavior: 'smooth'
         })
    }

    function scrollLeft(){
         carousel?.current?.scrollBy({
            left: -300,
            behavior: 'smooth'
         })
    }

    function scrollTopRLeft(){
        topCont?.current?.scrollBy({
            left: -300,
            behavior: 'smooth'
         })
    }

    function scrollTopRRight(){
        topCont?.current?.scrollBy({
            left: 300,
            behavior: 'smooth'
         })
    }

    function scrollTrendLeft(){
         trending?.current?.scrollBy({
            left: -300,
            behavior: 'smooth'
         })
    }

    function scrollTrendRight(){
         trending?.current?.scrollBy({
            left: 300,
            behavior: 'smooth'
         })
    }

    const navigate = useNavigate()

    function cleanDate(date){
      const instance = new Date(date)

      return instance.toLocaleDateString("en-US", {day:"numeric", month: "short"})
    }

    function handleToggle(){
      SetshowMoreUpcoming(prev => !prev)
    }

    return(
        <main className="container">
            <div className="hero-section">
               <div className="hero-text">
             <h1 id="hero-title">Discover <span className="second-word">Anime</span></h1>
              <span id="features">Search, browse, filter</span>
               </div>
             
 
            </div>
            
            <div className="discover-home-container">
               <button
               onClick={() => navigate('/discover?page=1')}
                className="discover-button">
                  {`Explore Discover →`}
               </button>
            </div>
           <div className="home-layout">
           <div className="curated-layout">
           <div className="recently_finished-section">
            <div className="view-all-container">
            <p className="catalogue-name">{`Recently Finished >`}</p>
            <div className="view-scroll-container">
             <Link  to="/recently-finished">View all</Link>
             <div className="scroll-container">
                <button onClick={scrollLeft}>{`<`}</button>
                <button onClick={scrollRight}>{`>`}</button>
             </div>
            </div>
            
            </div>
              <Suspense fallback={<Fallback />}
              >
               <Await resolve={recentAnime}>
                {(anime) => {
                 const limitAnime = anime.slice(0, 6)

                    return (
                        <div className="cards-layout">
                        <div ref={carousel} className="cards-container">
                          {limitAnime?.map(ani => 
                          <Link key={ani?.id} to={`/${ani?.id}/synopsis`}>
                          <AnimeCard key={ani.id} anime={ani} />
                          </Link>
                          )}
                        </div>
                        </div>
                    )
                }}
               </Await>
               </Suspense>
           </div>

           <div className="explore-section">
             <p className="catalogue-name">{`Explore by Genre `}</p>
             <div className="explore-container">
             {genres.map((genre, i) => 
             <NavLink key={i} to={`/discover?genres=${genre}`}>{genre}</NavLink>)}
             </div>
           </div>

           <div className="topRated-section">
            <div className="view-all-container">
            <p className="catalogue-name">{`Top Rated >`}</p>
             <div className="view-scroll-container">
             <Link to="/top-rated">View all</Link>
             <div className="scroll-container">
                <button onClick={scrollTopRLeft}>{`<`}</button>
                <button onClick={scrollTopRRight}>{`>`}</button>
             </div>
            </div>
            </div>
             <Suspense fallback={<Fallback />}>
               <Await resolve={topRatedAnime}>
                {(anime) => {
                 const limitAnime = anime.slice(0, 6)

                    return (
                        <div className="cards-layout">
                        <div ref={topCont} className="cards-container">
                          {limitAnime?.map(ani =>
                          <Link key={ani?.id} to={`/${ani?.id}/synopsis`}> 
                          <AnimeCard key={ani.id} anime={ani} />
                          </Link>
                          )}
                        </div>
                        </div>
                    )
                }}
               </Await>
               </Suspense>
           </div>

          <div className="trending-section">
            <div className="view-all-container">
            <p className="catalogue-name">{`Trending >`}</p>
            <div className="view-scroll-container">
             <Link to="/trending">View all</Link>
             <div className="scroll-container">
                <button onClick={scrollTrendLeft}>{`<`}</button>
                <button onClick={scrollTrendRight}>{`>`}</button>
             </div>
            </div>
            </div>
            <Suspense fallback={<Fallback />}>
               <Await resolve={trendingAnime}>
                {(anime) => {
                 const limitAnime = anime?.slice(0, 6)

                    return (
                        <div className="cards-layout">
                        <div ref={trending} className="cards-container">
                          {limitAnime?.map(ani =>
                           <Link key={ani?.id} to={`/${ani?.id}/synopsis`}> 
                          <AnimeCard key={ani.id} anime={ani} />
                          </Link>
                          )}
                        </div>
                        </div>
                    )
                }}
               </Await>
               </Suspense>
           </div>

           </div>
           <div className="right-panel">
            <div className="upcoming-section">
               <h4>Coming soon</h4>
              <Suspense fallback={<SidePanelSkeletons />}>
              <Await resolve={upComingAnime} >
                 {(anime) => {
                
                 const data = anime.slice(0, 20)
                 return (
                  <ul className="upcoming-anime-list">
                     {data.slice(0, 5).map(ani => 
                     <li key={ani.id}>
                        <Link to={`/${ani?.id}/synopsis`}>
                        <div className="upcoming-anime-card">
                           <img className="upcoming-anime-image" src={ani?.cover_image} />
                           <div className="upcoming-anime-content">
                              <p className="upcoming-anime-title">{ani?.title_english ?? ani?.title_romaji}</p>
                              <div className="upcoming-genres">
                              {ani?.genres.map((genre, i) =>
                                  <span className="upcoming-genre" key={i}>{genre}</span>)}
                              </div>
                              <p className="upcoming-anime-date">{cleanDate(ani?.start_date)}</p>
                              
                           </div>
                        </div>
                        </Link>
                     </li>)}

                     
                     {showMoreUpcoming && 
                     <div className="more-anime">
                     {data.slice(6, 10).map(ani => 
                     <li key={ani.id}>
                        <Link to={`/${ani?.id}/synopsis`}>
                        <div className="upcoming-anime-card">
                           <img className="upcoming-anime-image" src={ani?.cover_image} />
                           <div className="upcoming-anime-content">
                              <p className="upcoming-anime-title">{ani?.title_english ?? ani?.title_romaji}</p>
                              <div className="upcoming-genres">
                              {ani?.genres.map((genre, i) =>
                                  <span className="upcoming-genre" key={i}>{genre}</span>)}
                              </div>
                              <p className="upcoming-anime-date">{cleanDate(ani?.start_date)}</p>
                              
                           </div>
                        </div>
                        </Link>
                     </li>)}
                     
                     </div>
                     
                     }
                     
                     <div className="hide-container">
                        <button 
                        onClick={handleToggle}
                         className="hide-button">
                           <img src={arrow} />
                        </button>
                     </div>
                  </ul>
                 )
                 }}
              </Await>
              </Suspense>
            </div>
            
           </div>
           </div>
           
           
        </main>
    )
}