
export default function LoadingSkeleton({count = 4}){
    return (
        <>
        {Array.from({length: count}, (_, i) => {
            return (
            <div key={i} className="recom-skull-card">
            <div className="recom-skull-image"></div>
            <div className="recom-skull-title"></div>
        </div>
            )
        })}
        </>
        
    )
}