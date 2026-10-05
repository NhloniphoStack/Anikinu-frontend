import { Suspense, useState } from "react"
import { Await, NavLink, useLoaderData, useNavigate, useSearchParams } from "react-router"
import MyChart from "../../Components/MyChart.jsx"
import profile from '../../assets/profile.svg'
import complete from '../../assets/complete.svg'
import plan from '../../assets/planning.svg'
import StatsSkeleton from "../../Components/loadingSkeletons/StatsSkeleton.jsx"
import MylistCardSkeleton from "../../Components/loadingSkeletons/MylistCardSkeleton.jsx"
import MyListCard from "../../Components/MyListCard.jsx"
import dropped from '../../assets/dropped.svg'
export default function MyList(){
       const listPromise = useLoaderData()?.list
       const statsPromise = useLoaderData()?.stats
       
       const statuses = ['Watching', 'Completed', 'Planning', 'On Hold', 'Dropped']
       const [searchParams, setSearchParams] = useSearchParams()
       const [anime, setAnime] = useState([])
       const statusType = searchParams.get("status")
       const navigate = useNavigate()
        const colors = ['#8b5ff6', '#22c553', '#3b82f6', '#ef5666']
         const statusColor = ['Plan to watch', 'Completed', 'Dropped', 'Watching']
         function allocateColor(status){
              if(status === 'PLANNING'){
                     return '#8b5ff6'
              }

              if(status === 'COMPLETED'){
                      return '#22c553'
              }

               if(status ==='DROPPED'){
                       return '#3b82f6'
              }

              if(status === 'WATCHING'){
                      return '#ef5666'
              }

              
         }
        return(
        <section className="container">
        
        <div className="mylist-layout">
              <div className="mylist-sidepanel">
              <h2 className="progress-text">Progress</h2>
              {anime ?
              <MyChart data={anime}/> : 
              <div className="empty-progress">
                     <h3>Add Anime to see progress</h3>
              </div>}
              <div className="color-layout">
                     {colors?.map((colour, i) =>
                      <div key={i}>
                      <span className="box" 
                      style={{backgroundColor: colour}}>
                            {statusColor[i]}
                     </span>
                     </div>)}
              </div>
        </div>
       <div className="mylist-user-content">
       <Suspense fallback={<StatsSkeleton />}>
        <Await resolve={statsPromise}>
              {stats => {
                    

                     return (

               <div className="stats-layout">
                     <div className="stat-container">
                            <div className="total-container">
                             <img src={profile} />
                             <p className="total-anime">Total Anime</p>
                            </div>
                           
                            <p className="stat-value">{stats?.total_Anime}
                                    <span className="stat-type">series</span></p>
                            <p className="stat-value-status">tracking</p>
                     </div>

                     <div className="stat-container">
                            <div className="total-container">
                             <img src={complete} />
                             <p className="total-anime">Completed Anime</p>
                            </div>
                           
                            <p className="stat-value">{stats?.completed_Anime}
                                    <span className="stat-type">series</span></p>
                            <p className="stat-value-status">Completed</p>
                     </div>

                     <div className="stat-container">
                            <div className="total-container">
                             <img src={plan} />
                             <p className="total-anime">Plan to watch</p>
                            </div>
                           
                            <p className="stat-value">{stats?.planning_Anime}
                                    <span className="stat-type">series</span></p>
                            <p className="stat-value-status">Planned</p>
                     </div>


                     <div className="stat-container">
                            <div className="total-container">
                             <img src={dropped} />
                             <p className="total-anime">Dropped</p>
                            </div>
                           
                            <p className="stat-value">{stats?.dropped_Anime}
                                    <span className="stat-type">series</span></p>
                            <p className="stat-value-status">Dropped</p>
                     </div>
              </div>

                     )
              }}
        </Await>
       </Suspense>
        <p>Your personal anime collections</p>
        <div className="mylist-filters-container">
        
         {statuses?.map((status, i) => 
         <NavLink key={i} className={() => status.toUpperCase() === statusType ? 'list-active': null}  to={`?status=${status?.toUpperCase()}`}>{status}</NavLink>)}
         
        </div>
        <div>
              <div className="mylist-grid">
              <Suspense fallback={<MylistCardSkeleton />}>
              <Await resolve={listPromise}>
                     {(list) => {
                     
                           
                            setAnime(list)
                            const filteredList = list.filter(li => {
                                   return (
                                          (!statusType || li.status === statusType)
                                   )
                            })
           
                            return (
                                   <>
                                   
                                   {filteredList?.map(anime =>
                                   
                                   <MyListCard key={anime?.id}  color={allocateColor(anime?.status)} anime={anime}/>
                                   
                                   )}
                                   {list.length === 0 && 
                                   <div className="list-empty-state">
                                          <h2>Your list is empty</h2>
                                          <p>
                                                 Start building your 
                                          personal anime collection.
                                          Add shows you want to watch, are currently
                                          watching, or have Completed
                                          </p>
                                          <button 
                                          onClick={() => navigate(`/discover`)} 
                                          className="browse-button">
                                                 Browse Catalague
                                          </button>
                                   </div>
                                   }
                                   </>
                            )
                     }}
              </Await>
             </Suspense>
              </div>
        </div>
        </div>
        </div>
   
        </section>
       )
}