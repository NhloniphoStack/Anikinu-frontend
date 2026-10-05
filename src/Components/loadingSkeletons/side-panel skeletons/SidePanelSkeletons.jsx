import SidePanelSkeleton from "./SidePanelSkeleton.jsx"


export default function SidePanelSkeletons({count = 5}){
   
    return (
        <>
        {Array.from({length: count}, (_, i) => {
           return <SidePanelSkeleton  key={i} />
        })}
        </>
    )
}