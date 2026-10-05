import ChangeLog from "../Pages/ChangeLog";
import Skeleton from "react-loading-skeleton";

export default function ChangeLogHeroCard({currentVersion}){
    console.log(currentVersion)

     function cleanDate(date){
        if(!date){
            return null
        }
      const instance = new Date(date)

      return instance.toLocaleDateString("en-GB", {day:"numeric", month: "long", year: "numeric",})
    }

    return (
        <div className="ChangeLog-hero-card">
        <div className="chirp-date">
          <p className="latest-chirp">Latest</p>
          {currentVersion?.created_at ? 
          <p>{cleanDate(currentVersion?.created_at)}</p> : <Skeleton />}
        </div>
        
       {currentVersion?.version ?
        <h1>v{currentVersion?.version}</h1> : <Skeleton />}
        {currentVersion?.title ?
            <h2>{currentVersion?.title}</h2> : <Skeleton />}
        {currentVersion?.content ? <p className="changelog-hero-card-content">
            {currentVersion?.content}
        </p> : <Skeleton />}
        </div>
    )
}