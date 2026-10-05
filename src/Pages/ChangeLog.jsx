import { Suspense, useState } from "react"
import { Await, Link, useLoaderData } from "react-router"
import kawai1 from '../assets/kawai.png'
import kawai2 from '../assets/kawai2.png'
import kawai3 from '../assets/kawai3.png'
import removeMd from "remove-markdown"
import ChangelogSkeleton from "../Components/loadingSkeletons/changelog skeleton/Changelogskeleton.jsx"
import LogPanelSkeleton from "../Components/loadingSkeletons/changelog skeleton/LogPanelskeleton.jsx"
import ChangeLogHeroCard from '../Components/ChangeLogHeroCard.jsx'
export default function ChangeLog(){
    const logsPromise = useLoaderData()?.logs
    const [animeCount, setAnimeCount] = useState(1)
    const [version, setVersion] = useState("")
    const [currenTitle, setCurrenTitle] = useState("")
    const [prevLogs, setPrevLogs] = useState(null)
   const [currentUpdate, setCurrentUpdate] = useState(null)
   
   
    
    function changeColor(chip){
      if(chip === "New"){
        return "purple"
      }

      if(chip === 'Tweak'){
        return "blue"
      }

      if(chip === "Fixed"){
           return "red"
      }
    }

    function cleanDate(date){
        if(!date){
            return null
        }
      const instance = new Date(date)

      return instance.toLocaleDateString("en-GB", {day:"numeric", month: "long", year: "numeric",})
    }

  
    return(
        <section className="container">
            <ChangeLogHeroCard currentVersion={currentUpdate}/>
            <div className="log-grid">
            <Suspense fallback={<LogPanelSkeleton />}>
             <Await resolve={logsPromise} >
                {anime => {
                  
                    const copy = [...anime]
                            copy.pop()

                            
                    return (
                        <div className="changelog-panel">
                <h5>✨ ANIKINU CHANGELOG</h5>
                <p className="advice">Follow the development of
                    Anikinu, one update at a time
                </p>
                <div>
                    <img className="cute-icon" src={kawai1} />
                    <img className="cute-icon" src={kawai2} />
                </div>
                <div className="latest-release">
                 <h5>Latest release</h5>
                <p className="latest-version">v{version}</p>
                <p className="version-title">{currenTitle}</p>
                
                </div>
               {prevLogs && <div>
                     <h5 className="prev-releases-title">Previous releases</h5>
                    <div className="prev-releases-container">   
                            
                     <>
                       {copy?.toReversed().slice(0, 4).map(ani =>

                        <div key={ani?.id} className="prev-version-card">
                        <span className="version-number">v{ani?.version}</span>
                        <span className="version-heading"> {ani?.title}</span>

                        </div>)
                                 }
                    </>
                    
                    </div>
                   
                </div>}
            </div>
                    )
                }}
             </Await>
             </Suspense>
            <div className="log-card-layout">
                <Suspense fallback={<ChangelogSkeleton count={animeCount}/>}>
                <Await resolve={logsPromise}>
                   
                    {(anime ) => {
                        const last = anime[anime.length - 1]
                        
                        setVersion(last?.version)
                        setCurrenTitle(last?.title)
                       setAnimeCount(anime.length)
                       setCurrentUpdate(anime[0])
                        return (
                            <>
                            {anime?.toReversed().slice(0, 3).map(ani => 
                     <div key={ani?.id} className="log-card">
                    
                    <div className="date-version">
                        <span className="version">v{ani.version}</span>
                        <span>{cleanDate(ani?.created_at)}</span>
                    </div>
                    
                        <h3 className="log-title">{ani?.title}✨</h3>
                    
                    <p className="log-content-preview">
                       {removeMd(ani?.content)}

 
                    </p>
                    <div className="chips-readmore">
                    <div className="chips">
                    <span style={{backgroundColor: "purple"}} className="chip">New</span>
                    <span style={{backgroundColor: "blue"}} className="chip">Tweaked</span>
                    <span style={{backgroundColor: "red"}} className="chip">Fixed</span>
                    </div>
                    <Link to={`/changelog/${ani?.id}`}>Read more</Link>
                    </div>
                    
                      </div>
                  
             
                            )}

                            
                           
                            </>
                        )
                    }}
                
                </Await>
                </Suspense>
            </div>
            </div>
            <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={logsPromise}>
                {(anime) => {
                    return (
                        <>
                        {anime.length === 0  &&
                             
                             <div className="empty-logs-state">
                                <h2>
                                There are currently
                                no changelogs Senpai

                                </h2>
                                
                                <img className="kawai-icon" src={kawai3} />
                                <h4>Come checkback later :/</h4>
                            </div>}
                        </>
                    )
                }}
            </Await>
            </Suspense>
         
        </section>
    )
}