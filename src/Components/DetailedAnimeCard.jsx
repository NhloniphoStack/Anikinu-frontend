import starblue from '../assets/yellow-star.svg'


export default function DetailedAnimeCard({anime}){
    
    function convertScore(score){
          return (score / 100 * 10).toFixed(1)
    }
    return(
      <div className="detailed-anime-card">
       <img className="detailed-anime-img" src={anime?.cover_image} />
       <div className="detailed-anime-content">
        <div className="detailed-header">
        <p className='detailed-anime-title'>{anime?.title_english ?? anime?.title_romaji ?? anime?.native ?? 'Unknown'}</p>
        </div>

        <div className='score-slot'>
        {<img src={starblue} />}
        <p>{convertScore(anime?.average_score)}</p>
        </div>
        
        <div className="year-format">
            
            <p>{anime?.season_year}</p>
            <span>•</span>
            <p>{anime?.format}</p>
        </div>
       </div>
      </div>
    )
}