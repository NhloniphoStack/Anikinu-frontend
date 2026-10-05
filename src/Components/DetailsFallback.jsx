import LoadingSkeleton from "./loadingSkeletons/recommendations loading skeletons/LoadingSkeleton.jsx";

export default function DetailsFallback(){
    return (
        <div className="recom-skull-container">
            <LoadingSkeleton count={4}/>
        </div>
    )
}