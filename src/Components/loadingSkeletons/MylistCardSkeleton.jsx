
export default function MylistCardSkeleton({count = 6}){
    return (
        <>
        {Array.from({length: count}, (_, i) => {
            return (
        <div key={i} className="list-card-skeleton">
        
        </div>
    )
        })}
        </>
    )
}