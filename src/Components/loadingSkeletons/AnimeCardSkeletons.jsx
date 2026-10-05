import AnimeCardSkeleton from "./animeCardSkeleton.jsx";


export default function AnimeCardSkeletons({count = 6}){
   
    return (
        <>
        {Array.from({length: count}, (_, i) => {
           return <AnimeCardSkeleton  key={i} />
        })}
        </>
    )
}