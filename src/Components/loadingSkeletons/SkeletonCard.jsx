
export default function SkeletonCard(){
    const cardStyles = {
         minWidth: "140px",
        maxWidth: "140px",
        height: "269px",
        overflow: "hidden",
        position: "relative",
    }

    
    return (
        <div style={cardStyles}  className="skeleton-card">
            
         <div  className="card skeleton-img"></div>
         <div  className="card skeleton-heading"></div>
         <div className="card skeleton-meta"></div>
        </div>
    )
}