

export default function StatsSkeleton({count = 4}){
    return (
        <div className="stats-layout">
        {Array.from({length: count}, (_, i) => {
            return (
        <div key={i} className="stats-card-skeleton">
        
        </div>
    )
        })}
        </div>
    )
}