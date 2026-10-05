import AnimeCardSkeleton from "./AnimeCardSkeleton.jsx";


export default function AnimeCardSkeletons({count = 6}){
   
    return (
        <>
        {Array.from({length: count}, (_, i) => {
           return <AnimeCardSkeleton  key={i} />
        })}
        </>
    )
}