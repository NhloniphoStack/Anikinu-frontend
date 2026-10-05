

export default function LogPanelSkeleton({count = 1}){
    return(
       <>
       {Array.from({length: count}, (_, i) => {
        return (
             <div key={i} className="changelog-skull-panel">
                <div className="logpanel-skull-title"></div> 
                <div className="logpanel-skull-instructions"></div> 
                <div className="logpanel-skull-img-container">
                    <div className="logpanel-skull-img"></div>
                    <div className="logpanel-skull-img"></div>
                </div> 
                <div className="latest-release">  
                <div className="logpanel-skull-sentence"></div>
                <div className="logpanel-skull-short"></div>  
                <div className="logpanel-skull-sentence"></div>
                </div>
             </div>
        )
       })}
       </>
    )
}