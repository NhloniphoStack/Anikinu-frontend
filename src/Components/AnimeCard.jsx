
import star from '../assets/yellow-star.svg'
export default function AnimeCard({anime}){

    function convertScore(score){
          return (score / 100 * 10).toFixed(1)
    }
    
    return (
        <div className="anime-card">
        <div className='card-overlay'></div>
          <img 
           className='anime-poster'
           src={anime.cover_image} 
           />
           <div className='anime-content'>
            <p
            className='anime-title'
            >{anime?.title_english ?? anime?.title?.romaji}
            </p>
            <div className='score-container'>
             <img src={star} />
             <p>{convertScore(anime?.average_score)}</p>
            </div>
           </div>
        </div>
    )
}