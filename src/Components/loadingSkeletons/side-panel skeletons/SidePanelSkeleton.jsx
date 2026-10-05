

export default function SidePanelSkeleton(){
     const cardStyles = {
         minWidth: "260px",
        maxWidth: "260px",
        height: "85px",
        overflow: "hidden",
        position: "relative"
    }
    return (
        <div style={cardStyles} className="side-panel-card">
        <div  className="side side-panel-img"></div>
        <div  className="side side-panel-content">
        <div className="side-panel-title"></div>
        <div className="side-panel-genre"></div>
        <div  className="side side-panel-date"></div>
        </div>

        </div>
    )
}