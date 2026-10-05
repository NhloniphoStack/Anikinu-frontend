import { Suspense,  useState } from "react"
import { Await, Form, useLoaderData, useSearchParams } from "react-router"
import kawai2 from '../assets/kawai2.png'

import bin from '../assets/bin.svg'
import { deleteLog } from "../api/deleteLog.js"
export default function Entries(){
    const [showModal, setShowModal] = useState(false)
    const animePromise = useLoaderData()?.logs
    const [selectedAnime, setSelectedAnime] = useState([null])
    const [confirmModel, setConfirmModal] = useState(false)
    const [id, setId] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    
    function handleToggle(anime){
        setSelectedAnime(anime)
        setShowModal(prev => !prev)
    }

     function cleanDate(date){
        if(!date){
            return null
        }
      const instance = new Date(date)

      return instance.toLocaleDateString("en-US", {year: "numeric", day:"numeric", month: "long"})
    }

    function close(){
        setShowModal(false)
    }

    function closeConfirm(){
        setConfirmModal(false)
    }

    function toggleConfirm(id){
        
        setId(id)
        setConfirmModal(prev => !prev)
    }

   async function handleDeleteLog(){
    
       try{

        const attempt = await deleteLog(id)
        
        setSearchParams(() => ({deleted: true}))
        setConfirmModal(false)
        
       }catch(error){
        console.log("Delete failed:", error)
       }
        


    }

    
    return (
        <section className="container">
            <h2 id="entries-heading">Manage Entries</h2>
            <div className="entries-container">
            <div className="entry-grid">
                <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={animePromise}>
                    {anime => {
                        
                       
                        return (
                            <>
                            {anime.map(ani => 
                            <div className="entry-card" key={ani?.id}>
                            <div className="entry-layout">
                            <div className="entry-card-content">
                                  <p className="entry-version">v{ani?.version}</p>
                            
                        
                                    <p className="entry-title">{ani?.title}</p>
                                    
                                    </div>
                                      <p className="entry-date">{cleanDate(ani?.created_at)}</p>
                                    </div>
                                  
                                    <div className="crud-container">
                                    <button 
                                    onClick={() => handleToggle(ani)}
                                    className="edit-button">Edit</button>
                                    <button
                                    onClick={() => toggleConfirm(ani?.id)}
                                     className="delete-button">
                                        <img src={bin} />
                                    </button>
                                    </div>
                                    
                               
                                
                                
                            
                            </div>)}

                            {anime.length === 0 && 
                            <div className="empty-entry">
                                <h2>{`Add a changelog to see something ;)`}</h2>
                                <img className="cute-icon" src={kawai2} />
                            </div>}
                            </>
                        )
                    }}
                </Await>
                </Suspense>
            </div>
            </div>
           {showModal && 
           <div className="edit-modal">
            <h3>Edit Entry</h3>
                <Form method="POST">
                <div className="edit-form">
                    <div className="first-row">
                        <div className="input-container">
                            <label htmlFor="title">Version</label>
                           <input defaultValue={selectedAnime?.version} id="title"  name="version"/>
 
                        </div>
                        
                        <div className="input-container">
                             <label htmlFor="version">Title</label>
                            <input defaultValue={selectedAnime?.title} id="version"  name="title"/>
     
                        </div>
                      
                     <input value={selectedAnime.id} name="id" type="hidden"/>
                     

                    </div>
                   

                    
                    <label htmlFor="content">{`Content(Markdown)`}</label>
                   <textarea defaultValue={selectedAnime?.content}  id="content"  name="content"/>
                   <div className="cancel-button">
                    <button onClick={handleToggle}>Cancel</button>
                   </div>
                   <button  className="save-button">Save Entry</button>
                </div>
                
          
                </Form>
              
            </div>}

            {confirmModel &&
             <div className="confirm-modal">
             <h3>
                Are you sure you want to
                delete?

                </h3>
                <div className="confirm-container">
                    <button onClick={closeConfirm}>No</button>
                    <button onClick={handleDeleteLog}>Yes</button>
                </div>
            </div>}
        </section>
    )
}