import reactimg from '../assets/react.svg'
import reactRouterImg from '../assets/react-router.svg'
import node from '../assets/node.svg'
import postgresImg from '../assets/postgresql.svg'
import expressImg from '../assets/express.svg'
import anilistImg from '../assets/anilist.svg'
export default function About(){
    return(
        <section className="container">
        <div className="abount-intro-container">
            <h1>
              ABOUT ANIKINU
            </h1>
            <p>An anime catalogue built for discovery</p>
            <p>
                AniKinu is a full-stack anime catalogue and
                discovery application designed to make it
                easier to explore anime and find something
                worth watching.
            </p>
            <div className="line-container">
            <div className="line"></div>
            </div>
        </div>
        <div className="explaination-container">
            <h3>WHAT IS ANIKINU?</h3>
            <p>
                AniKinu brings anime information into one
                searchable catalogue. Browse thousands of
                titles, explore detailed information, discover
                related series, and narrow things down using
                filters and sorting.
            </p>

        </div>

        <div className="marketing-grid">

            <div className="marketing-container">
               <h3>EXPLORE ANIME</h3>
                <p>
                    Find anime by title and quickly jump to
                their detail pages.
                </p>
            </div>

            <div className="marketing-container">
                 <h3>DISCOVER</h3>
                <p>
                    Browse the catalogue using filters such as
                    genre, tags, year, season, format and status.
                </p>
            </div>

            <div className="marketing-container">
                <h3>DETAILS</h3>
                <p>
                    View information about an anime, including
                    its description, characters, staff, studios,
                    relations and recommendations.
                </p>
            </div>
        </div>

        
        <div className="explaination-container">
             <h3>BUILT FOR DISCOVERY</h3>
        <p>
            AniKinu isn't a streaming service.

            It doesn't try to tell you what you should
            watch. Instead, it gives you the information
            and tools to explore the catalogue yourself.

        </p>

        </div>

        <div className="explaination-container">

            <h3>DATA</h3>
            <p>
                Anime information is sourced from AniList
                and periodically synchronized into AniKinu's
                own PostgreSQL database.

                The database acts as AniKinu's source of truth,
                allowing the application to serve catalogue
                data without requesting AniList for every
                page visit.

            </p>

        </div>

        <div className="explaination-container">
            <h3>Technology</h3>
            <ul className="technology-list">
                <li>
                    <img className='tech-stack-icon' src={reactimg} />
                </li>
                <li>
                    <img className='tech-stack-icon' src={reactRouterImg} />
                    
                </li>
                <li>
                    <img className='tech-stack-icon' src={node} />
                </li>
                <li>
                    <img className='express tech-stack-icon' src={expressImg} />
                </li>
                    <li>
                        <img className='tech-stack-icon' src={postgresImg} />
                    </li>
                    <li>
                         <img className='tech-stack-icon' src={anilistImg} />
                    </li>
            </ul>

        </div>

        <div className="explaination-container">

            <h3>
            WHY I BUILT IT

        </h3>
        <p>
            AniKinu was built as a full-stack project to
            explore what goes into building a real
            data-driven web application.

            From data ingestion and database design to
            API development, routing and responsive UI,
            the project brings the entire stack together
            in one application.
        </p>

        </div>

        <div className="explaination-container">
            <h3>SOURCE</h3>
            <p>Anikinu is powered by the Anilist GraphQL API, All anime data is courtesy of Anilist</p>

        </div>
        
       
        
        
        
        </section>
    )
}