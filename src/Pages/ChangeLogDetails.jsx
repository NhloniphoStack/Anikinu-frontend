import { Await, useLoaderData, Link } from "react-router"
import Markdown from "react-markdown"
import ReportBox from '../Components/ReportBox.jsx'
import { Suspense } from "react"
export default function ChangeLogDetails(){
    const animePromise = useLoaderData()?.log
    function cleanDate(date){
        if(!date){
            return null
        }
      const instance = new Date(date)

      return instance.toLocaleDateString("en-GB", {day:"numeric", month: "long", year: "numeric",})
    }
    return(
        <section className="container">
            <Suspense fallback={<h2>Loading</h2>}>
        <Await resolve={animePromise}>
            {anime => {
              return (
                <div className="changelog-details-container">
                    <Link to={`/changelog`} className="back-button">Back to Changelog</Link>
                    <div className="version-details-date">
                          <h1 id="version-title">v{anime?.version}</h1>
                      <p id="changelog-date">{cleanDate(anime?.created_at)}</p>
                    </div>
                  
                     <h2 id="changelog-title">{anime?.title}</h2>
                    <div className="new-layout">
                        
                    <div className="new-container">
                    <h2>✨What's New</h2>
                       <div className="markdown">

                       
                        <Markdown>{anime?.content}</Markdown>
                       </div>

                       <div className="conclusion-container">
                        <p>Thats all for this update</p>

                        <p className="site-name">✨The Anikinu Team</p>
                       </div>
                       </div>
                       <ReportBox /> 
                       </div>
                </div>
              )
            }}
        </Await>
        </Suspense>
        </section>
    )
}