
import SkeletonCard from "./SkeletonCard";


export default function SkeletonsCard({count = 20}){
   
    return (
        <>
        {Array.from({length: count}, (_, i) => {
           return <SkeletonCard  key={i} />
        })}
        </>
    )
}