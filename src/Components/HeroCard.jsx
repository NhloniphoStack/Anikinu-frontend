import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function HeroCard({anime}){
    
     const [index, setIndex] = useState([9])

     
    
    return(
        <div className="hero-card">
            <img 
            id="hero-img" 
            src={anime[index].cover_image}
             />
            <div className="overlay"></div>
        <div className="hero-content">
           <p id="hero-anime-title">{anime[index].title_english}</p>
           <div className="hero-genre-cont">
            {anime[index].genres.map(genre => <span className="hero-genre">{genre}</span>)}
           </div>
           
           <p id="hero-anime-overview">{anime[index].description}</p>
        </div>
        <div className='dots-container'>
            <button onClick={() => setIndex(1)}></button>
            <button onClick={() => setIndex(2)}></button>
            <button onClick={() => setIndex(7)}></button>
        </div>
        </div>
    )
}