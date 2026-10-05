import AnimeCardSkeletons from "./loadingSkeletons/AnimeCardSkeletons.jsx"

export default function Fallback(){
    return (
        <div className="cards-layout">
                          <div className="cards-container">
                             <AnimeCardSkeletons />
                          </div>
        
                      </div>
    )
}